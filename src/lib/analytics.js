/**
 * Analytics module — dual-sends events to GTM/GA4 dataLayer and Supabase edge function.
 * Tracks session ID, UTM params, referrer, device context, and optional user identity.
 */

const SUPABASE_URL = 'https://esjvxzpgusznirtsqdbc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzanZ4enBndXN6bmlydHNxZGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzU4NTIsImV4cCI6MjA4NTY1MTg1Mn0.B754pkRrLonuRYZU4Hj3tPsM9rPErDZzH0acachn864';
const TRACK_EVENT_URL = `${SUPABASE_URL}/functions/v1/track-event`;

// --- Session ID ---
function getSessionId() {
  let id = sessionStorage.getItem('ft_session_id');
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem('ft_session_id', id);
  }
  return id;
}

// --- UTM Params (captured once on landing, cached for session) ---
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function captureUtmParams() {
  const stored = sessionStorage.getItem('ft_utm');
  if (stored) {
    try { return JSON.parse(stored); } catch { /* fall through to re-capture */ }
  }

  const params = new URLSearchParams(window.location.search);
  const utm = {};
  let hasUtm = false;
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    sessionStorage.setItem('ft_utm', JSON.stringify(utm));
  }
  return utm;
}

// --- Referrer (captured once on first page load) ---
function captureReferrer() {
  const stored = sessionStorage.getItem('ft_referrer');
  if (stored !== null) return stored || null;

  const ref = document.referrer || '';
  // Only store external referrers (not self-referrals)
  const isExternal = ref && !ref.includes(window.location.hostname);
  const value = isExternal ? ref : '';
  sessionStorage.setItem('ft_referrer', value);
  return value || null;
}

// --- Device context ---
function getDeviceContext() {
  return {
    user_agent: navigator.userAgent,
    screen_width: window.innerWidth,
    screen_height: window.innerHeight,
    locale: navigator.language || null,
  };
}

// --- User identity (set by auth context) ---
let _userId = null;

export function setAnalyticsUser(userId) {
  _userId = userId;

  // Set GA4 user ID
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-QJLGV0LK7T', { user_id: userId });
  }

  // Tag Clarity session
  if (typeof window.clarity === 'function') {
    window.clarity('set', 'user_id', userId);
  }
}

export function clearAnalyticsUser() {
  _userId = null;
}

// --- Core tracking function ---
export function trackEvent(eventName, params = {}) {
  const sessionId = getSessionId();
  const utm = captureUtmParams();
  const referrer = captureReferrer();
  const device = getDeviceContext();

  // 1. Push to GTM dataLayer (existing GA4 flow, now enriched)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    user_id: _userId || undefined,
    page_referrer: referrer || undefined,
    ...utm,
    ...params,
  });

  // 2. Send to Supabase edge function (fire-and-forget)
  const payload = {
    session_id: sessionId,
    user_id: _userId,
    event_name: eventName,
    page_path: window.location.pathname,
    referrer,
    ...utm,
    ...device,
    metadata: Object.keys(params).length > 0 ? params : null,
  };

  fetch(TRACK_EVENT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Silent fail — analytics should never break the app
  });
}

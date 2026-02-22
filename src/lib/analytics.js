/**
 * GTM dataLayer event tracking utility.
 * Pushes custom events to window.dataLayer for Google Tag Manager to forward
 * to GA4, Google Ads, or any other connected service.
 */
export function trackEvent(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

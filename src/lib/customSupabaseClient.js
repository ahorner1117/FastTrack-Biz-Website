import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://esjvxzpgusznirtsqdbc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzanZ4enBndXN6bmlydHNxZGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzU4NTIsImV4cCI6MjA4NTY1MTg1Mn0.B754pkRrLonuRYZU4Hj3tPsM9rPErDZzH0acachn864';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};

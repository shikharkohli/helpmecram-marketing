
import { createClient } from '@supabase/supabase-js';

// Use hard-coded values for development/testing purposes
const supabaseUrl = 'https://ijvvdcvzgjsjivustdgs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdnZkY3Z6Z2pzaml2dXN0ZGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNzY3ODksImV4cCI6MjA1ODY1Mjc4OX0.8RiKCEiJMIarbpiw7gA8G9Gbal1MvShm1vqCshqx-zs';

// Create a supabase client with the hard-coded values
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);

// Helper function to get the current user
export const getCurrentUser = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error getting session:', error);
      return null;
    }
    
    return session?.user || null;
  } catch (err) {
    console.error('Error in getCurrentUser:', err);
    return null;
  }
};

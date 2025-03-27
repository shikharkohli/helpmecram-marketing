
import { supabase } from './supabase';

export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
}

export const addToWaitlist = async (email: string): Promise<{success: boolean; error?: string}> => {
  try {
    // Check if the Supabase client is properly initialized
    if (!supabase || typeof supabase.from !== 'function') {
      console.error('Supabase client is not properly initialized');
      return { 
        success: false, 
        error: 'Database connection error. Please try again later.' 
      };
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);
    
    if (error) {
      console.error('Error adding to waitlist:', error);
      
      // Handle duplicate emails more gracefully
      if (error.code === '23505') {
        return { success: false, error: 'This email is already on our waitlist!' };
      }
      
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Exception adding to waitlist:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
};


import { supabase } from '@/integrations/supabase/client';

export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string;
  phone?: string;
  created_at?: string;
}

export const addToWaitlist = async (email: string, name?: string, phone?: string): Promise<{success: boolean; error?: string}> => {
  try {
    // Check if the Supabase client is properly initialized
    if (!supabase || typeof supabase.from !== 'function') {
      console.error('Supabase client is not properly initialized');
      return { 
        success: false, 
        error: 'Database connection error. Please try again later.' 
      };
    }

    // Insert the waitlist entry into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ 
        email, 
        phonenumber: phone ? phone.replace(/\D/g, '') : null 
      }])
      .select();
    
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

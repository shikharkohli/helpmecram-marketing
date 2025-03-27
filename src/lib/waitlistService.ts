
import { supabase } from './supabase';

export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
}

export const addToWaitlist = async (email: string): Promise<{success: boolean; error?: string}> => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);
    
    if (error) {
      console.error('Error adding to waitlist:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Exception adding to waitlist:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
};

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function handleSignup(formData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
}) {
  try {
    // First create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) throw authError;

    if (!authData.user) throw new Error("No user data returned");

    // Then insert the user profile data
    const { data: profileData, error: profileError } = await supabase
      .from('users')
      .insert([
        {
          id: authData.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          phone_number: formData.phone,
        }
      ])
      .select()
      .single();

    if (profileError) throw profileError;

    return { authData, profileData };

  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}
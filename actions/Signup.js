//handle signup process with Supabase
// I have firstNmae, lastName, email, password, and mobile number

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bxaqcditqgwcldwdyqvn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4YXFjZGl0cWd3Y2xkd2R5cXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMDcxMDUsImV4cCI6MjA0Njc4MzEwNX0.BgJJ2H65dEfbu02hvgQ9LMgRT8kg0dZWvyGzrpUv89M";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function handleSignup(formData) {
  try {
    // First, sign up the user for authentication
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      throw authError;
    }

    // If authentication is successful, insert additional user details into the 'users' table

    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        user_id: authData.user?.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile_number: formData.phone,
        email: formData.email,
        username: formData.username,
      });

    if (userError) {
      throw userError;
    }
  } catch (error) {
    console.error("Error during signup:", error.message);
    throw error;
  }
}

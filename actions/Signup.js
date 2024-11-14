//handle signup process with Supabase 
// I have firstNmae, lastName, email, password, and mobile number  


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bxaqcditqgwcldwdyqvn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export async function HandleSignup(formData) 
{
    try {
        const {data, error  } = await SupabaseAuthClient.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    mobile_number: formData.phone
                },
            },
            
        });

        if (error) 
            throw error;
        return data;
        
    } catch (error) {

        console.error('Error signing up:', error.message);
        throw error;
        
    }
}
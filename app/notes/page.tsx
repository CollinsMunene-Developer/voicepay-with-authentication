import { createClient } from "@supabase/supabase-js";

export default async function Notes() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase URL and Key are required.");
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: notes } = await supabase.from('notes').select();

    return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}

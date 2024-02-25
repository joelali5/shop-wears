import { supabase } from "../helper/supabaseClient";

export async function login(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);
  return data;
}

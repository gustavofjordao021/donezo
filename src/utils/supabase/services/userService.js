import { supabase } from "../supabaseClient";

export async function getUserEmail(userId) {
	const { data, error } = await supabase
		.from("users")
		.select("email")
		.eq("id", userId)
		.single();

	if (error) {
		throw error;
	}

	return data;
}

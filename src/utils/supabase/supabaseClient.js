import { createClient } from "@supabase/supabase-js";

export const createSupabaseClient = (token) => {
	return createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_KEY,
		{
			global: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		}
	);
};

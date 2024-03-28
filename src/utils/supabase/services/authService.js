import { createSupabaseClient } from "../supabaseClient";

export const initSupabase = (token) => {
	const supabase = createSupabaseClient(token);
	return supabase;
};

export const getUser = async (supabase) => {
	if (!supabase) {
		throw new Error("Supabase client not initialized");
	}

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error) {
		console.error("Error fetching user:", error.message);
		return null;
	}

	return user;
};

export const onAuthStateChange = (client, callback) => {
	if (!client) {
		throw new Error("client client not provided");
	}

	const {
		data: { subscription },
	} = client.auth.onAuthStateChange((event, session) => {
		callback(event, session);
	});

	return subscription.unsubscribe;
};

export const signOut = async (supabase) => {
	if (!supabase) {
		throw new Error("client not initialized");
	}

	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error("Error signing out:", error.message);
		throw error;
	}
};

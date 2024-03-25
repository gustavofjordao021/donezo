// authService.js

import { supabase } from "../supabaseClient";

export const getUser = async (req) => {
	const { data, error } = await supabase.auth.getUser(req);

	if (error) {
		console.error("Error fetching user:", error.message);
		return null;
	}

	return data.user;
};

export const onAuthStateChange = (callback) => {
	const { data } = supabase.auth.onAuthStateChange(callback);

	return data?.subscription.unsubscribe;
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error("Error signing out:", error.message);
		throw error;
	}
};

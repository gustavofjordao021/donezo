import { createSupabaseClient } from "../supabaseClient";

export const getUserEmail = async (userId) => {
	try {
		const response = await createSupabaseClient
			.from("users")
			.select("email")
			.eq("user_id", userId)
			.single();

		// Check for and handle any errors returned by Supabase
		if (response.error) {
			console.error("Error retrieving user email:", response.error.message);
			throw new Error(response.error.message);
		}

		// Access the email from the response data
		const email = response.data.email;

		return email;
	} catch (error) {
		// This catch block will handle exceptions thrown explicitly in the try block
		// and any other errors that might occur during the execution of the async operation.
		console.error("Caught error:", error.message);
		throw error;
	}
};

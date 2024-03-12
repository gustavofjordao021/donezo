// src/app/api/users/route.js
import { getUserEmail } from "../../../../utils/supabase/services/userService";

// Export a named function for the GET HTTP method
export async function GET(req, { params }) {
	try {
		const userId = params.userId;
		const userEmail = await getUserEmail(userId);
		console.log("userEmail", userEmail);
		res.status(200).json(userEmail);
	} catch (error) {
		console.log("nah, bruv");
		res.status(500).json({ error: error.message });
	}
}

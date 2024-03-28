import {
	getUser,
	initSupabase,
} from "../../../../utils/supabase/services/authService";
import { getTasks } from "../../../../utils/supabase/services/taskService";

export async function GET(request) {
	// Get the authentication token from the request headers
	const token = request.headers.get("Authorization")?.replace("Bearer ", "");

	// Initialize the Supabase client with the token
	const supabase = initSupabase(token);

	// Get the authenticated user
	const user = await getUser();

	if (!user) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Retrieve the tasks using the taskService and pass the authenticated Supabase client
	const { data: tasks, error } = await getTasks(supabase, user.id);

	if (error) {
		console.error("Error retrieving tasks:", error);
		return new Response(JSON.stringify({ error: "Failed to retrieve tasks" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}

	return new Response(JSON.stringify({ tasks }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}

import {
	getUser,
	initSupabase,
} from "../../../../utils/supabase/services/authService";
import { createTask } from "../../../../utils/supabase/services/taskService";

export async function POST(request) {
	const { title, description, due_date, priority } = await request.json();

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

	// Create the task using the taskService
	const { data, error } = await createTask(supabase, user.id, {
		title,
		description,
		due_date,
		priority,
	});

	if (error) {
		console.error("Error creating task:", error);
		return new Response(JSON.stringify({ error: "Failed to create task" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}

	if (data && data.length > 0) {
		return new Response(JSON.stringify({ task: data[0] }), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} else {
		return new Response(
			JSON.stringify({ message: "Task created successfully" }),
			{
				status: 201,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}

import { getUser } from "../../../../utils/supabase/services/authService";
import { supabase } from "../../../../utils/supabase/supabaseClient";

export async function POST(request) {
	const { title, description, due_date, priority } = await request.json();

	const { data, error } = await supabase.from("tasks").insert({
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

export async function createTask(supabase, userId, taskData) {
	const { data, error } = await supabase.from("tasks").insert({
		...taskData,
		user_id: userId,
	});
	return { data, error };
}

export async function getTasks(supabase, userId) {
	const { data, error } = await supabase
		.from("tasks")
		.select("*")
		.eq("user_id", userId);
	return { data, error };
}

export async function updateTask(supabase, userId, taskId, taskData) {
	const { data, error } = await supabase
		.from("tasks")
		.update(taskData)
		.eq("id", taskId)
		.eq("user_id", userId);
	return { data, error };
}

export async function deleteTask(supabase, userId, taskId) {
	const { error } = await supabase
		.from("tasks")
		.delete()
		.eq("id", taskId)
		.eq("user_id", userId);
	return { error };
}

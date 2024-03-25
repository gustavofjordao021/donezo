import { getUserEmail } from "../../../../utils/supabase/services/userService";

export async function GET(request, { params }) {
	try {
		const userId = params.userId;
		const userEmail = await getUserEmail(userId);
		return new Response(userEmail);
	} catch (error) {
		return Response(message);
	}
}

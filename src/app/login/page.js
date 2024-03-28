"use client";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { createSupabaseClient } from "../../utils/supabase/supabaseClient";
import {
	getUser,
	onAuthStateChange,
	initSupabase,
} from "../../utils/supabase/services/authService";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		const checkUserSession = async () => {
			// Create a new Supabase client instance
			const supabase = createSupabaseClient();

			// Get the current session
			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (session) {
				// Initialize the Supabase client with the session access token
				const authenticatedSupabase = initSupabase(session.access_token);

				// Get the authenticated user
				const user = await getUser(authenticatedSupabase);

				if (user) {
					// If the user is found, redirect to the main page
					router.push("/main");
				}
			} else {
				// Set up the auth state change listener
				const unsubscribe = onAuthStateChange(supabase, (event, session) => {
					switch (event) {
						case "SIGNED_IN":
							// When the user signs in, redirect to the /main page
							router.push("/main");
							break;
						default:
							break;
					}
				});

				return () => {
					unsubscribe();
				};
			}
		};

		checkUserSession();
	}, [router]);

	const supabase = createSupabaseClient();

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Auth
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					style: { container: { width: "400px" } },
				}}
				providers={["google"]}
				redirectTo="http://localhost:3000/main"
			/>
		</div>
	);
}

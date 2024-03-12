"use client";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

export default function Page() {
	const router = useRouter();
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		const getInitialSession = async () => {
			const { data } = await supabase.auth.getSession();

			if (data.session) {
				router.push("/main");
			}
		};

		getInitialSession();

		const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
			switch (event) {
				case "SIGNED_IN":
					console.log("User signed in:", session.user);
					router.push("/main");
					break;
				case "INITIAL_SESSION":
					console.log("Initial session event:", session);
					break;
				default:
					break;
			}
		});

		setSubscription(unsubscribe); // Store the unsubscribe function in state

		return () => {
			if (subscription) {
				subscription(); // Call the unsubscribe function if it exists
			}
		};
	}, [router]);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Auth
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					style: { container: { width: "400px" } },
				}}
				providers={[]}
			/>
		</div>
	);
}

"use client";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import {
	getUser,
	onAuthStateChange,
} from "../../utils/supabase/services/authService";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		const checkUserSession = async () => {
			const user = await getUser();

			if (user) {
				router.push("/main");
			}
		};

		checkUserSession();

		const unsubscribe = onAuthStateChange((event, session) => {
			switch (event) {
				case "SIGNED_IN":
					console.log("User signed in:", session.user);
					router.push("/main");
					break;
				case "INITIAL_SESSION":
					break;
				default:
					break;
			}
		});

		return () => {
			unsubscribe();
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
				providers={["google"]}
				redirectTo="http://localhost:3000/main"
			/>
		</div>
	);
}

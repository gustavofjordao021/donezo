"use client";

import { Button } from "@/components/ui/button";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createSupabaseClient } from "../../utils/supabase/supabaseClient";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
	getUser,
	signOut,
	initSupabase,
	onAuthStateChange,
} from "../../utils/supabase/services/authService";

export default function Page() {
	const router = useRouter();

	const checkUserSession = async () => {
		const supabase = createSupabaseClient();
		const {
			data: { session },
			error,
		} = await supabase.auth.getSession();

		if (error) {
			console.error("Error retrieving session:", error.message);
			throw error;
		}

		if (session) {
			const authenticatedSupabase = initSupabase(session.access_token);
			const user = await getUser(authenticatedSupabase);

			if (!user) {
				console.error("User not found");
				throw new Error("User not found");
			}

			return authenticatedSupabase;
		}

		console.log("No active session");
		return null;
	};

	const handleSignOut = async () => {
		try {
			const supabase = await checkUserSession();
			if (supabase) {
				try {
					await signOut(supabase);
				} catch (error) {
					console.error("Error during sign-out:", error.message);
					throw error; // Rethrow the error to be caught by the outer catch block
				}
			} else {
				console.error("Supabase client is null");
				throw new Error("Supabase client is null"); // Throw an error to be caught by the outer catch block
			}

			router.push("/login").catch((error) => {
				console.error("Error navigating to /login:", error);
			});
		} catch (error) {
			console.error("Error in handleSignOut:", error.message);
			// Handle the error appropriately, e.g., display an error message to the user
		}
	};

	useEffect(() => {
		const initializeSupabase = async () => {
			const supabase = await checkUserSession();

			if (supabase) {
				const unsubscribe = onAuthStateChange(supabase, (event, session) => {
					switch (event) {
						case "SIGNED_OUT":
							// When the user signs out, redirect to the /login page
							router.push("/login");
							break;
						default:
							break;
					}
				});

				return () => {
					unsubscribe();
				};
			} else {
				// If no active session is found, redirect to the /login page
				router.push("/login");
			}
		};

		initializeSupabase();
	}, [router]);

	return (
		<div className="h-full w-full flex flex-row">
			<div className="flex items-center justify-between space-y-2 h-full w-full">
				<ResizablePanelGroup
					direction="horizontal"
					className="min-h-[200px] rounded-lg"
				>
					<ResizablePanel
						defaultSize={15}
						maxSize={15}
						minSize={5}
						className="bg-slate-200"
					>
						<div className="flex h-full items-center justify-center p-6">
							<span className="font-semibold">Header</span>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize={85} minSize={60}>
						<div className="flex items-center justify-between p-4">
							<div>
								<h2 className="text-2xl font-bold tracking-tight">
									Welcome back!
								</h2>
								<p className="text-muted-foreground">
									Here&apos;s a list of your tasks for this month!
								</p>
							</div>
							<Button variant="destructive" onClick={handleSignOut}>
								<BiLogOut className="mr-2 h-4 w-4" />
								Logout
							</Button>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	);
}

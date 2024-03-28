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
		} = await supabase.auth.getSession();

		if (session) {
			const authenticatedSupabase = initSupabase(session.access_token);
			const user = await getUser(authenticatedSupabase);

			if (!user) {
				router.push("/login");
			}

			return authenticatedSupabase;
		}

		return null;
	};

	const handleSignOut = async () => {
		try {
			const supabase = await checkUserSession();
			console.log(supabase);
			await signOut(supabase);
			router.push("/login");
		} catch (error) {
			console.error("Error signing out:", error.message);
		}
	};

	useEffect(() => {
		const initializeSupabase = async () => {
			const supabase = await checkUserSession();

			if (supabase) {
				const unsubscribe = onAuthStateChange(supabase, (event, session) => {
					switch (event) {
						case "SIGNED_IN":
							break;
						case "SIGNED_OUT":
							handleSignOut();
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

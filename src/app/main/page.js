"use client";

import { Button } from "@/components/ui/button";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
	getUser,
	signOut,
	onAuthStateChange,
} from "../../utils/supabase/services/authService";

export default function Page() {
	const router = useRouter();

	const handleSignOut = async () => {
		try {
			await signOut();
			router.push("/login");
		} catch (error) {
			console.error("Error signing out:", error.message);
		}
	};

	useEffect(() => {
		const checkUserSession = async () => {
			const user = await getUser();

			if (!user) {
				router.push("/login");
			}
		};

		checkUserSession();

		const unsubscribe = onAuthStateChange((event, session) => {
			switch (event) {
				case "SIGNED_IN":
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

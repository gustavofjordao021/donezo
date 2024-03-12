import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Page() {
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
					<ResizablePanel defaultSize={75} minSize={60}>
						<div className="flex items-center justify-between p-4">
							<div>
								<h2 className="text-2xl font-bold tracking-tight">
									Welcome back!
								</h2>
								<p className="text-muted-foreground">
									Here&apos;s a list of your tasks for this month!
								</p>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	);
}

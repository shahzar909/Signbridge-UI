import { DashboardSidebar } from "@/components/custom/dashboard";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-white">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto p-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="max-w-350 mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

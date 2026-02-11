import { ClosedCaption, Ear, MonitorPlay, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturesGrid = () => {
    return (
        <section className={"py-24 bg-card px-6 md:px-20 space-y-20"}>
            {/* Header Section*/}
            <div className={"w-full flex flex-col items-center justify-center gap-2"}>
                <h2 className={"font-bold text-5xl mb-2"}>Build for Everyone</h2>
                <p className={"w-1/2 text-center tracking-wide text-gray-500"}>We&#39;ve re-engineered video calling to solve the
                    challenges
                    of modern digital communication with real time translation, even for sign languages.</p>
            </div>

            {/*------------------------------- Bento Grid ------------------------------------*/}
            <div>
                {/* First Row */}
                <div className={"w-full flex items-center justify-center gap-5"}>
                    {/*Left-card*/}
                    <div className={"border bg-white shadow-md rounded-lg p-6 pl-10 w-[80%] flex flex-col items-start justify-center gap-10"}>
                        <div>
                            <Ear size={60} color="green" />
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="font-semibold text-2xl">Sign Language Optimized</h3>
                            <p className="w-[70%] text-left">Our algorithm prioritize the motion of hands and facial features, ensuring high fidelity even
                                on low bandwidth connections.</p>
                        </div>
                        <div className={"flex items-center justify-center gap-3"}>
                            <Badge className={"bg-chart-4 p-2 px-4 font-semibold"} variant="default">Adaptive Frame Rate</Badge>
                            <Badge className={"bg-chart-4 p-2 px-4 font-semibold"} variant="default">Motion Sharpening</Badge>
                        </div>
                    </div>
                    {/*Right-card*/}
                    <div className="p-6 pl-10 shadow-md min-h-full rounded-lg border bg-chart-2 text-white flex flex-col items-start justify-center gap-10">
                        <div>
                            <ClosedCaption size={60} />
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="font-semibold text-2xl">Live Captioning</h3>
                            <p className="w-[75%] text-left">Instant, accurate transcription of spoken words into text with custom font sizes and
                                colors.</p>
                        </div>
                        <div className={"flex items-center justify-center gap-3"}>
                            <Badge className={"bg-chart-4 p-2 px-4 font-semibold"} variant="default">Real-Time Translation</Badge>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="w-full flex items-center justify-start mt-[2vw] gap-5">
                    {/* Left-card */}
                    <div className={"w-[45%] p-6 pl-10 shadow-md rounded-lg border bg-chart-2 text-white flex flex-col items-start justify-center gap-10"}>
                        <div>
                            <MonitorPlay size={60} />
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="font-semibold text-2xl">Screen Reader Support</h3>
                            <p className="w-[70%] text-left">Full ARIA compliance ensures navigation is seamless for users with visaul impairments.</p>
                        </div>
                    </div>

                    {/* Right-card */}
                    <div className="p-6 bg-white pl-10 py-9 border shadow-md rounded-lg p-6 pl-10 w-[80%] flex flex-col items-start justify-center gap-10">
                        <div>
                            <ShieldCheck size={60} color="green"/>
                        </div>
                        <div className="w-full space-y-5">
                            <h3 className="font-semibold text-2xl">Privacy By Design</h3>
                            <p className="w-[70%]">End-to-end encryption on every call. Your private conversation stay private and secure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;


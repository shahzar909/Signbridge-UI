import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay and Blur */}
            <div className="absolute inset-0 z-0">
                {/* Using user-provided reference image. TODO: Replace with high-res asset */}
                <img
                    src="https://imgs.search.brave.com/2hag1wpglvKFhLsV7goA5XuXFnF-5rb_IDwqnoV-U40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZXJ0/aWZpZWRsYW5ndWFn/ZXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzEyL3R3/by1wZW9wbGUtc2ln/bmluZy1vdmVyLXZp/ZGVvLmpwZw"
                    alt="Video Calling with Sign Language"
                    className="w-full h-full object-cover blur-[2px] scale-105"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center space-y-8">


                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] max-w-5xl">
                    Bridging the Gap in <br />
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">Every</span> Conversation.
                </h1>

                <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                    Real-time video calling designed for accessibility. Experience a platform built for every ability with low-latency and AI-driven tools.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-6">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg font-semibold shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:scale-105 transition-transform duration-300">
                        Start Calling <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-semibold bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300">
                        Book a Demo
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
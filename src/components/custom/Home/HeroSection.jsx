import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20 p-6 md:p-10 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Left-section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-sm px-4 py-1.5 rounded-full font-medium">
                        <span className="mr-2">✨</span> NOW WITH AI SIGN OPTIMIZATION
                    </Badge>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Bridging the Gap in
                        <span className="text-primary ml-4">Every</span> <br />
                        Conversation.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                        Real-time video calling designed for accessibility. Experience a platform built for every ability with low-latency and AI-driven tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <Button size="lg" className="rounded-xl px-8 h-12 text-base shadow-lg shadow-primary/25">
                            Start Calling <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80">
                            Book a Demo
                        </Button>
                    </div>
                </div>

                {/* Right-Section */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Main Image Container */}
                    <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden bg-muted/20 border-4 border-white/50 shadow-2xl">
                        {/* Placeholder for the image from design - using a gradient/solid for now as specific asset not provided */}
                        <div className="absolute inset-0 bg-[#C4D7C2] flex items-center justify-center">
                            {/* In a real scenario, this would be: <Image src="/hero-image.jpg" ... /> */}
                            {/* Simulating the hand image with text/icon for now if asset missing */}
                            <span className="text-6xl opacity-20 user-select-none">👋</span>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute bottom-8 -left-4 md:left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Zap className="w-6 h-6 text-green-600" fill="currentColor" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-foreground">Latency: 12ms</span>
                            <span className="text-xs text-muted-foreground">Industry leading speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
import { Link2, Sparkle, Video } from "lucide-react";

const ProcessSection = () => {
    const cardsData = [
        {
            icn: <Link2 color="blue" />,
            title: "Connect",
            description: "One-Click links that work in any browser. No complex setups, passwords, or plugin downloads required."
        },
        {
            icn: <Video color="blue" fill="true" />,
            title: "Communicate",
            description: "High-definition video with 30FPS support ensures every finger movement and facial expression is captured perfectly."
        },
        {
            icn: <Sparkle color="blue" fill="true" />,
            title: "Express",
            description: "Build in AI tools for real-time transcription, sign enhancement, and accessibility overlays."
        },
    ];
    return (
        <section className="p-20 flex flex-col gap-10">
            {/* Header section */}
            <div className="flex flex-col gap-5 items-start justify-center">
                <p className="text-blue-500 uppercase font-semibold">Our Process</p>
                <h4 className="text-5xl font-extrabold">Three Step to seamless communication</h4>
                <p className="text-gray-400">Designed with simpllicity and accessibility at the core.</p>
            </div>
            {/* Cards section */}
            <div className="flex items-center justify-center">
                {
                    cardsData.map((card, index) => (
                        <div className="border rounded-md shadow-md p-8">
                            <div className="p-4 bg-blue-300 border">{card.icn}</div>
                            <h5>{card.title}</h5>
                            <p>{card.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProcessSection;

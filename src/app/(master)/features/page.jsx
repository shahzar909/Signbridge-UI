import {
    Video,
    Mic,
    Type,
    Globe,
    Shield,
    Smartphone,
    Zap,
    Users,
    Accessibility,
    Ear
} from "lucide-react";

const features = [
    {
        category: "Communication",
        items: [
            {
                icon: <Video className="w-6 h-6 text-primary" />,
                title: "HD Video Calls",
                description: "Crystal clear video quality optimized for sign language visibility, ensuring every gesture is captured perfectly."
            },
            {
                icon: <Mic className="w-6 h-6 text-primary" />,
                title: "Speech-to-Text",
                description: "Real-time captioning converts spoken language into text instantly, keeping everyone in the loop."
            },
            {
                icon: <Type className="w-6 h-6 text-primary" />,
                title: "Text-to-Speech",
                description: "Type your responses and have them spoken aloud to hearing participants in a natural-sounding voice."
            }
        ]
    },
    {
        category: "Accessibility & AI",
        items: [
            {
                icon: <Accessibility className="w-6 h-6 text-primary" />,
                title: "Sign Language Recognition",
                description: "Advanced AI detects and highlights sign language gestures, improving clarity during fast-paced conversations."
            },
            {
                icon: <Globe className="w-6 h-6 text-primary" />,
                title: "Multi-Language Support",
                description: " communicate across borders with support for various sign languages (ASL, BSL, ISL) and spoken languages."
            },
            {
                icon: <Ear className="w-6 h-6 text-primary" />,
                title: "Audio Visualization",
                description: "Visual indicators for sound intensity and speaker direction help context awareness for deaf users."
            }
        ]
    },
    {
        category: "Performance & Security",
        items: [
            {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Low Latency",
                description: "Engineered for speed with <50ms latency to ensure conversations feel natural and uninterrupted."
            },
            {
                icon: <Shield className="w-6 h-6 text-primary" />,
                title: "End-to-End Encryption",
                description: "Your conversations are private and secure. No data is stored or shared without your explicit consent."
            },
            {
                icon: <Smartphone className="w-6 h-6 text-primary" />,
                title: "Cross-Platform",
                description: "Seamless experience on Web, iOS, and Android. Connect with anyone, anywhere, on any device."
            }
        ]
    }
];

const FeaturesPage = () => {
    return (
        <main className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary/5 py-20 text-center space-y-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        Powerful Features for <br /> <span className="text-primary">Seamless</span> Communication
                    </h1>

                </div>
            </section>

            {/* Detailed Features List */}
            <section className="py-20 container mx-auto px-6 md:px-12 space-y-24">
                {features.map((section, idx) => (
                    <div key={idx} className="space-y-12">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">{section.category}</h2>
                            <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.items.map((feature, fIdx) => (
                                <div key={fIdx} className="group p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to experience the difference?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join thousands of users who are already communicating without barriers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/dashboard" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FeaturesPage;

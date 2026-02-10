import Link from "next/link";
import { Handshake, Globe, AtSign, Circle, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Logo and Description */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#1D4ED8] p-1.5 rounded-md">
                                <Handshake className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">Sign Bridge</span>
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
                            Making digital communication inclusive, accessible, and fast for everyone, everywhere.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="bg-gray-50 p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                                <Globe size={20} />
                            </Link>
                            <Link href="#" className="bg-gray-50 p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                                <AtSign size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Platform */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-6">Platform</h3>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Video Tools</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Accessibility</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Integrations</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Status</Link></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-6">Company</h3>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">About Us</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Careers</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Blog</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Press</Link></li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-6">Legal</h3>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Privacy</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Terms</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">Compliance</Link></li>
                                    <li><Link href="#" className="text-gray-500 hover:text-[#1D4ED8] transition-colors">DPA</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-100 flex flex-col items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                        <p>© {`${new Date().getFullYear()}`} Signbridge. All rights reserved.</p>
                        <span className="hidden md:block text-gray-200">|</span>
                        <p>Released under the <Link href="/LICENSE" className="hover:text-gray-600 transition-colors underline decoration-gray-200 underline-offset-4">Apache License 2.0</Link></p>
                        <span className="hidden md:block text-gray-200">|</span>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-gray-600 transition-colors"
                        >
                            <Github size={16} />
                            <span>View Source on GitHub</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

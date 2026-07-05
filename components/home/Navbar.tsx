"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContainerWrapper from "@/components/common/ContainerWrapper";

const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Stack", href: "/#stack" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-secondary/15">
            <ContainerWrapper>
                <nav className="flex items-center justify-between py-2.5">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight"
                        onClick={() => setIsOpen(false)}
                    >
                        Shanto<span className="text-primary">Paul</span>
                        <span className="text-tertiary">.</span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sub hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/#contact"
                        className="hidden md:inline-block px-5 py-2 rounded-full font-medium text-btn bg-primary hover:bg-primary/80 transition-all"
                    >
                        Hire me
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden p-2 text-main cursor-pointer"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
            </ContainerWrapper>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-72 border-t border-secondary/15" : "max-h-0"
                    }`}
            >
                <ContainerWrapper>
                    <ul className="flex flex-col py-4 gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 text-sub hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2 pb-1">
                            <Link
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-block px-5 py-2 rounded-full font-medium text-btn bg-primary hover:bg-primary/80 transition-all"
                            >
                                Hire me
                            </Link>
                        </li>
                    </ul>
                </ContainerWrapper>
            </div>
        </header>
    );
}
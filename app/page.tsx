"use client";

import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroSection } from "@/components/ui/Hero-Section";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".box",
            {
                x: -200,
                duration: 1,
            },
            {
                x: 0,
            }
        );
    });
    return (
        <>
            <Navbar className="top-4 hidden  md:block lg:block" />

            <main>
                <div id="hero">
                    <HeroSection />
                </div>
                <div id="journey"></div>
            </main>
        </>
    );
};

export default Home;

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Journey"
                />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Projects"
                ></MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="About Me"
                ></MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Contact Me"
                ></MenuItem>
            </Menu>
        </div>
    );
}

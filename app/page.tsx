"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/ui/Hero-Section";
import { Timeline } from "@/components/ui/timeline";
import Card, { CardProps } from "@/components/ui/Card";

const Home = () => {
    const makeCard = (cardData: CardProps[]) => {
        return cardData.map((card, index) => {
            const { title, content, img, alt, badges, year } = card;
            return {
                title: card.year,
                content: (
                    <Card
                        title={title}
                        content={content}
                        img={img}
                        alt={alt}
                        badges={badges}
                        year={year}
                    />
                ),
            };
        });
    };
    const cardData: CardProps[] = [
        {
            title: "SDE Intern - Akrivia",
            content: "Worked as fullstack engineer in Akrivia Automation",
            img: "/akrivia.webp",
            alt: "Akrivia",
            year: "2025",
            badges: ["Frontend", "Backend"],
        },
        {
            title: "GeeksForGeeks",
            content:
                "Served as the Technical Representative for Raghu Engineering, acting as a liaison between students and faculty to coordinate and promote technical initiatives, events, and workshops.",
            img: "/gfg.png",
            alt: "GFG",
            year: "2024",
            badges: ["Workshops", "Education"],
        },
        {
            title: "CodeChef",
            content:
                "Led the CodeChef campus chapter by organizing competitive programming events, coding contests, and workshops to promote problem-solving skills and student engagement in the programming community.",
            img: "/codechef.jpg",
            alt: "codechef",
            year: "2023",
            badges: ["Events", "Contests"],
        },
    ];
    const data = makeCard(cardData);
    return (
        <>
            <Navbar className="top-4" />
            <main>
                <div id="hero">
                    <HeroSection />
                </div>
                <div id="journey">
                    <Timeline data={data} />
                </div>
            </main>
        </>
    );
};

export default Home;

export function Navbar({ className }: { className?: string }) {
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

"use client";

import React, { useEffect } from "react";
import { HeroSection } from "@/components/ui/Hero-Section";
import { Timeline } from "@/components/ui/timeline";
import Card, { CardProps } from "@/components/ui/Card";
import { Navbar } from "../components/ui/Navbar";
import { Projects } from "@/components/ui/Projects";
import ContactMe from "@/components/ui/ContactMe";

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
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);
    return (
        <>
            <Navbar className="top-4" />
            <main>
                <div id="Home">
                    <HeroSection />
                </div>
                <div id="Journey">
                    <Timeline data={data} />
                </div>
                <div id="Projects" className=" w-full ">
                    <Projects />
                </div>
                <div id="Contact-me">
                    <ContactMe />
                </div>
            </main>
        </>
    );
};

export default Home;

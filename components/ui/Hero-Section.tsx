import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import HeroButton from "./Hero-Button";
import { Button } from "./button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import Link from "next/link";

interface IWords {
    text: string;
    className?: string;
}

export function HeroSection() {
    return (
        <BackgroundBeamsWithCollision className="flex flex-col justify-around py-[8%]  ">
            <div className="text-2xl relative  flex-col flex z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white  tracking-tight">
                <motion.div
                    className="flex gap-1.5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                    }}
                >
                    Hi, I'm
                    <div className=" flex justify-around items-baseline gap-1  ">
                        <span className="text-blue-500 dark:text-blue-500 ">
                            Pavan
                        </span>
                    </div>
                </motion.div>
            </div>

            <div id="content" className="w-[80vw]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 1.0,
                    }}
                    className="text-xs md:text-xl  text-[var(--noble--black--300)]   md:block lg:block  lg:text-2xl text-center"
                >
                    Full-stack wizard—frontends don’t scare me, backends don’t
                    bite, and bugs... usually cry when they see me.
                </motion.div>
            </div>
            <div
                id="button"
                className=" flex-col mt-10 lg:flex-row md:flex-row flex h-[10%]   lg:justify-around md:justify-around gap-2.5 justify-center items-center  w-[40%] "
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 1.6,
                            duration: 0.6,
                            ease: "easeInOut",
                        },
                    }}
                    whileHover={{ scale: 1.1, transition: { delay: 0 } }}
                    whileTap={{ scale: 0.9, transition: { delay: 0 } }}
                >
                    <Link href="#Contact-me">
                        <Button className="rounded-4xl hover:bg-blue-700  bg-blue-500 text-white  ">
                            Get In Touch
                        </Button>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 1.6,
                            duration: 0.6,
                            ease: "easeIn",
                        },
                    }}
                    whileHover={{ scale: 1.1, transition: { delay: 0 } }}
                    whileTap={{ scale: 0.9, transition: { delay: 0 } }}
                >
                    <Link href={`#Projects`}>
                        <Button variant="outline" className="rounded-4xl">
                            View My Work
                        </Button>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                id="social-media"
                className="flex w-[30%]  justify-around mt-10 "
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 2.6,
                        duration: 0.6,
                        ease: "easeIn",
                        type: "spring",
                    },
                }}
            >
                <Link href="https://github.com/pavan-gokarla">
                    <Github className="cursor-pointer   md:size-10 lg:size-10  hover:stroke-blue-500 hover:size-12  duration-200 " />
                </Link>
                <Link href="https://www.linkedin.com/in/pavangokarla2003/">
                    <Linkedin className="cursor-pointer  md:size-10 lg:size-10  hover:stroke-blue-500 hover:size-12  duration-200 " />
                </Link>
                <Link href="https://x.com/GokarlaPavan">
                    <Twitter className="cursor-pointer  md:size-10 lg:size-10  hover:stroke-blue-500 hover:size-12  duration-200 " />
                </Link>
            </motion.div>
        </BackgroundBeamsWithCollision>
    );
}

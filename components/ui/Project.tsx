"use client";

import React, { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

export interface ThreeDCardProps {
    title: string;
    description: string;
    img: string;
    liveLink: string;
    githubLink: string;
}

export function Project(threeDCard: ThreeDCardProps) {
    const { title, description, img, liveLink, githubLink } = threeDCard;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.4 });
    return (
        <motion.div
            id="project-card"
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={
                isInView
                    ? {
                          opacity: 1,
                          x: 0,
                          transition: {
                              ease: "easeIn",
                              type: "spring",
                              duration: 0.8,
                          },
                      }
                    : {}
            }
        >
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
                    >
                        {description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={liveLink}
                            target="_blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            <div className="flex gap-1 justify-between items-center-safe">
                                Website <ArrowUpRight width={20} height={16} />
                            </div>
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            href={githubLink}
                            as="a"
                            target="_blank"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Github
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
}

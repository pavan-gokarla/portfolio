import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Project } from "./Project";

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const projects = [
        {
            title: "Prepview",
            description:
                "A voice-based AI interview coach that simulates real interview scenarios based on role, level, and tech stack, and provides instant, personalized feedback.",
            img: "prepview.png",
            githubLink: "https://github.com/pavan-gokarla/prepview.git",
            liveLink: "#",
        },
        {
            title: "Capzion",
            description:
                " An intelligent audio transcription tool that converts speech to text with high accuracy, optimized for clarity, speed, and usability, with OAuth authentication",
            img: "capzion.png",
            githubLink: "https://github.com/pavan-gokarla/capzion.git",
            liveLink: "https://capzion.vercel.app/",
        },
        {
            title: "Python Backend",
            description:
                " A completely authenticated django backend which can be used for CRUD operations for a micro-blogging app. Sqlite is used as the database which can be used to store relational data.",
            img: "django.jpg",
            githubLink:
                "https://github.com/pavan-gokarla/django-backend-api.git",
            liveLink: "https://github.com/pavan-gokarla/django-backend-api.git",
        },
        {
            title: "Nestjs Backend",
            description:
                "Implemented CRUD operations on MongoDb through mongoose ORM.NestJs is a modern javascript based backend framework which offers many useful features out of the box",
            img: "nestjs.jpg",
            githubLink: "https://github.com/pavan-gokarla/nest-backend-api.git",
            liveLink: "https://github.com/pavan-gokarla/nest-backend-api.git",
        },
    ];
    return (
        <div
            ref={ref}
            className="flex flex-col  justify-between items-center p-10       bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-800"
        >
            <motion.div
                className="flex gap-1.5 text-2xl md:text-3xl lg:text-3xl "
                initial={{ opacity: 0, y: -20 }}
                animate={
                    isInView
                        ? {
                              opacity: 1,
                              y: 0,
                              transition: {
                                  duration: 0.5,
                              },
                          }
                        : {}
                }
            >
                My
                <div className=" flex justify-around items-baseline gap-1  ">
                    <span className="text-blue-500 dark:text-blue-500 ">
                        Projects
                    </span>
                </div>
            </motion.div>
            <motion.div
                id="projects"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-x-[30%] "
            >
                {projects.map((project, index) => (
                    <Project key={`index-${index}`} {...project} />
                ))}
            </motion.div>
        </div>
    );
}

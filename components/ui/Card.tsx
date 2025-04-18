import React, { useRef } from "react";
import { Button } from "./button";
import { motion, useInView } from "framer-motion";

export interface CardProps {
    title: string;
    content: string;
    badges: string[];
    img: string;
    alt: string;
    year: string;
}
export const Card = ({ title, content, badges, img, alt }: CardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.4 });
    return (
        <motion.div
            ref={ref}
            className="card bg-base-100 w-96 shadow-sm p-5  "
            initial={{ opacity: 0, x: 300 }}
            animate={
                isInView
                    ? {
                          opacity: 1,
                          x: 200,
                          transition: {
                              ease: "easeIn",
                              type: "spring",
                          },
                      }
                    : {}
            }
        >
            <img src={img} alt={alt} />

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    {badges.map((badge, index) => {
                        return (
                            <Button
                                variant="outline"
                                className="badge badge-outline"
                                key={`card-${index}`}
                            >
                                {badge}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;

import { motion, useInView } from "motion/react";
import { Input } from "./input";
import { Label } from "./label";
import { useRef } from "react";
import { PlaceholdersAndVanishInput } from "./VanishingInput";

const ContactMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 });
    return (
        <div
            ref={ref}
            className="bg-gradient-to-b gap-14 dark:from-neutral-800 dark:to-neutral-950 flex flex-col justify-between items-center-safe p-20"
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
                                  duration: 1.5,
                              },
                          }
                        : {}
                }
            >
                Contact
                <div className=" flex justify-around items-baseline gap-1  ">
                    <span className="text-blue-500 dark:text-blue-500 ">
                        Me
                    </span>
                </div>
            </motion.div>
            <div className="w-full md:w-[30%] lg:w-[30%] flex flex-col gap-7 justify-around items-center">
                <motion.div className="flex w-full">
                    <PlaceholdersAndVanishInput
                        placeholders={[
                            "example@gmail.com",
                            "hehe@example.com",
                            "naruto@leafvillage.com",
                        ]}
                        onChange={() => {}}
                        onSubmit={() => {
                            console.log("hi");
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactMe;

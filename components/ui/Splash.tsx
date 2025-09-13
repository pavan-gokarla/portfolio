// components/Splash.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "नमस्ते", // Hindi
    "こんにちは", // Japanese
    "Ciao", // Italian
    "Olá", // Portuguese
    "Hallo", // German
    "నమస్కారం", // Telugu
];
export default function Splash({ onFinish }: { onFinish: () => void }) {
    const [index, setIndex] = useState(0);
    const [slideUp, setSlideUp] = useState(false);

    useEffect(() => {
        if (index < words.length - 1) {
            const timer = setTimeout(() => setIndex(index + 1), 200);
            return () => clearTimeout(timer);
        } else {
            // Wait for the last word, then trigger slide up
            const finishTimer = setTimeout(() => setSlideUp(true), 200);
            return () => clearTimeout(finishTimer);
        }
    }, [index]);

    // When slideUp animation ends, call onFinish
    function handleAnimationComplete() {
        if (slideUp) {
            onFinish();
        }
    }

    return (
        <motion.div
            className="flex items-center justify-center h-screen bg-black"
            animate={
                slideUp ? { y: "-100vh", opacity: 0 } : { y: 0, opacity: 1 }
            }
            transition={{ duration: 0.7, ease: "easeInOut" }}
            onAnimationComplete={handleAnimationComplete}
        >
            <span className="md:text-5xl text-3xl text-white align-middle p-3">
                •
            </span>
            <AnimatePresence mode="wait">
                <motion.h1
                    key={words[index]}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.02 }}
                    className="font-bold flex items-center gap-2 text-3xl md:text-5xl"
                >
                    {words[index]}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
    );
}

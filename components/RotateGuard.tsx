"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MdScreenRotation } from "react-icons/md";

export default function RotateGuard() {
    return (
        <div className="hidden [@media(orientation:landscape)_and_(pointer:coarse)]:flex fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md items-center justify-center p-6 text-center select-none overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="max-w-md space-y-8"
            >
                <motion.div
                    animate={{ rotate: -90 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="flex justify-center"
                >
                    <div className="p-6 rounded-full bg-white/10 ring-1 ring-white/20">
                        <MdScreenRotation className="w-16 h-16 text-blue-400" />
                    </div>
                </motion.div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Portrait Mode Required
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        To provide the best experience, this site is optimized for portrait orientation.
                        <br />
                        Please rotate your device.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
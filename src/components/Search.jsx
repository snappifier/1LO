import { getStrapiMedia } from "../features/fetcher.jsx";
import { motion, AnimatePresence } from "motion/react";
import {useEffect, useRef, useState} from "react";
import {useScrollBlock} from "../features/useScrollBlock.jsx";
import {images} from "../features/strapiImages.jsx";

export function Search({ onClose }) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    useScrollBlock();

    const [value, setValue] = useState("");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="w-screen h-screen overflow-hidden fixed inset-0 z-[1000] flex justify-center items-center bg-black/70
  [background-image:radial-gradient(transparent_1px,#000_1px)]
  [background-size:4px_4px]
  backdrop-blur-[10px]
  backdrop-brightness-100"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={stopPropagation}
                className="relative flex flex-col gap-5 lg:max-w-[50vw] md:min-w-[60vw] h-max drop-shadow-2xl -translate-y-60 px-12 py-12 rounded-xl overflow-auto"
            >
                <div className="flex gap-4 w-full h-18 bg-white rounded-xl items-center px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                        <g fill="none" stroke="black">
                            <path d="M21 21l-4.34-4.34"/>
                            <circle cx="11" cy="11" r="8"/>
                        </g>
                    </svg>
                    <div className="flex py-2 w-full h-full">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Szukaj"
                            className="w-full text-xl p-2 outline-none border-none focus:ring-0 focus:border-none"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
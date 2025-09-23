import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {images} from "../../features/strapiImages.jsx";

export default function Shields() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const shields_src = [
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % shields_src.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [shields_src.length]);

    return (
        <div className="font-[montserrat] flex flex-col w-full py-6 mb-10 mt-20 z-10 items-center">
            <div className="w-[80%] flex gap-3 md:gap-10 mb-12 bg-transparent">
                <p className="text-2xl font-light w-max">Osiągnięcia</p>
            </div>
            <div className="flex flex-nowrap justify-between lg:justify-center lg:gap-15 items-center w-full bg-transparent">
                {shields_src.map((src, index) => (
                    <motion.img
                        key={index}
                        src={images[src+"_thumbnail"]}
                        alt={`Tarcza ${2019 + index}`}
                        width={120}
                        height={120}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{
                            scale: index === currentIndex ? 1.25 : 1,
                            opacity: index === currentIndex ? 1 : 0.7
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        whileHover={{ scale: 1.25 }}
                        className="w-[calc(100vw/7-1rem)] drop-shadow-lg lg:h-max max-w-[80px] lg:max-w-[120px] h-auto object-contain bg-transparent"
                    />
                ))}
            </div>
        </div>
    );
}
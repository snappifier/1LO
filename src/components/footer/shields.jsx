import { useEffect, useState } from "react";
import { motion } from "motion/react";

import s_2019 from "../../assets/shields/2019.png";
import s_2020 from "../../assets/shields/2020.png";
import s_2021 from "../../assets/shields/2021.png";
import s_2022 from "../../assets/shields/2022.png";
import s_2023 from "../../assets/shields/2023.png";
import s_2024 from "../../assets/shields/2024.png";
import s_2025 from "../../assets/shields/2025.png";

export default function Shields() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const shields_src = [
        s_2019,
        s_2020,
        s_2021,
        s_2022,
        s_2023,
        s_2024,
        s_2025
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % shields_src.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [shields_src.length]);

    return (
        <div className="font-[montserrat] flex flex-col px-[8vw] w-full py-6 mb-10">
            <div className="w-full flex gap-3 md:gap-10 mb-12">
                <p className="text-xl font-semibold w-max">Osiągnięcia</p>
                <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
            </div>
            <div className="flex flex-nowrap justify-between lg:justify-center lg:gap-15 items-center w-full px-4">
                {shields_src.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Tarcza ${index}`}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{
                            scale: index === currentIndex ? 1.25 : 1,
                            opacity: index === currentIndex ? 1 : 0.9
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        className="w-[calc(100vw/7-1rem)] lg:h-max max-w-[80px] lg:max-w-[120px] h-auto object-contain"
                    />
                ))}
            </div>
        </div>
    );
}
import { getStrapiMedia } from "../features/fetcher.jsx";
import { motion } from "motion/react";
import { useRef } from "react";
import {useScrollBlock} from "../features/useScrollBlock.jsx";
import {images} from "../features/strapiImages.jsx";

export function Post({ state: post, onClose }) {
    const scrollPosition = useRef(0);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    useScrollBlock();


    const imageUrl = post?.["ZdjecieProfile"]
        ? getStrapiMedia(post["ZdjecieProfile"].url)
        : images["zamoyski"]

    const postDate = new Date(post["Data"]).toLocaleDateString('pl-PL');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="w-screen h-screen overflow-hidden fixed inset-0 z-[100] flex justify-center items-center bg-black/70
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
                className="flex flex-col max-h-[60%] gap-5 max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] bg-white drop-shadow-2xl px-5 md:px-12 py-12 rounded-xl overflow-auto"
            >
                <div className="w-full flex flex-col justify-between">
                    <p className="font-[poppins] text-wrap font-semibold text-2xl md:text-3xl text-black">
                        {post["Tytul"]}
                    </p>
                    <p className="font-[montserrat] text-sm md:text-base mt-2">
                        {post["Autor"]} | {postDate}
                    </p>
                </div>

                <img
                    src={imageUrl}
                    alt={`Zdjęcie dla ${post["Tytul"]}`}
                    className="w-full h-auto object-cover shadow-lg"
                    loading="lazy"
                    decoding="async"
                />

                <p className="font-[poppins] w-full text-justify text-balance text-sm md:text-base">
                    {post["Opis"]}
                </p>
            </motion.div>
        </motion.div>
    );
}
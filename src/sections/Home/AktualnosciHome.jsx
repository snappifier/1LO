import { motion, AnimatePresence } from "motion/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get, getStrapiMedia } from "../../features/fetcher.jsx";
import {images} from "../../features/strapiImages.jsx";
import {useEffect, useState} from "react";
import { Post } from "../../components/Post.jsx";

export const AktualnosciHome = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape" && selectedPost === null) {
                setSelectedPost(null);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const { data } = useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: () =>
            get(
                "posts?populate=*&pagination[pageSize]=3&sort[0]=Data:desc"
            ),
    });
    const posts = data?.data || [];

    const handleClick = (news) => {
        setSelectedPost(news);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {selectedPost !== null && (
                    <Post
                        key={selectedPost.id}
                        state={selectedPost}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
            <div className="relative w-full h-max mt-35">
                <div className="absolute lg:left-[65%] lg:h-[100%] lg:w-[35%] left-[25%] md:h-[50%] h-[100%] w-[75%] bg-[#FFFF] z-10 drop-shadow-md/20 rounded-2xl"></div>
                <div className="relative z-20 font-[poppins] flex w-full h-max gap-5 px-[10vw] py-10 md:px-[15vw] md:gap-20">
                    <div className="flex flex-col gap-2 items-end w-full h-max">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <p className="text-xl font-medium">AKTUALNOŚCI</p>
                                <p className="text-lg font-light">Bądź na bieżąco</p>
                            </div>
                            <div className="w-2 h-14 bg-[#3077BA] rounded-2xl drop-shadow-md/20"></div>
                        </div>

                        <div className="w-full flex h-max items-center gap-2">
                            <div className="md:px-0 md:py-2 max-w-8xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                                    {posts.map((news) => (
                                        <motion.div
                                            key={news.id}
                                            whileHover={{ y: -10 }}
                                            onClick={() => handleClick(news)}
                                            className="bg-white cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0"
                                        >
                                            <div className="bg-gray-50 aspect-[23/15]">
                                                <img
                                                    src={
                                                        news?.["ZdjecieProfile"]
                                                            ? getStrapiMedia(news["ZdjecieProfile"].url)
                                                            : images["zamoyski"]
                                                    }
                                                    alt=""
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>

                                            <div className="p-6 font-[poppins]">
                                                <span className="text-sm block text-slate-600 mb-2">
                                                  {new Date(news["Data"]).toLocaleDateString("pl-PL")} |{" "}
                                                    {news["Autor"]}
                                                </span>
                                                <h2 className="text-xl font-semibold text-slate-900">
                                                    {news["Tytul"]}
                                                </h2>
                                                <hr className="my-4 border-black" />
                                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                                    {news["Opis"].substring(0, 215) + "..."}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
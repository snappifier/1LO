import {motion} from "motion/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";
import {useNavigate} from "react-router";
import Zamoyski_jpg from "../../assets/Home/zamoyski.jpg";

export const AktualnosciHome = () => {
    const navigate = useNavigate();

    const usePosts = () => {
        const {data} = useSuspenseQuery({
            queryKey: ["posts"],
            queryFn: () => get("posts?populate=*&pagination[pageSize]=3&sort[0]=Data:desc"),
        });
        return data?.data || [];
    };

    const posts = usePosts();
    console.log(posts[0]);


    return (
        <div className="font-[poppins] flex w-full h-max gap-5 px-[10vw] md:px-[15vw] mt-40 md:gap-20">
            <div className="flex flex-col gap-5 items-end w-full h-max">
                <div className="flex items-center gap-5">
                    <div className="flex flex-col items-end">
                        <p className="text-xl font-medium">AKTUALNOŚCI</p>
                        <p className="text-lg font-light">BĄDŹ NA BIEŻĄCO</p>
                    </div>
                    <div className="w-3 h-15 bg-[#3077BA] rounded-2xl drop-shadow-md/20"></div>
                </div>
                <div className="w-full flex h-max items-center gap-2">
                    <div className="md:px-0 md:py-5 max-w-8xl mx-auto">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                            {posts.map((news) => (
                                <motion.div
                                    whileHover={{y: -10}}
                                    className="bg-white cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0">
                                    <div className="bg-gray-50 aspect-[23/15]">
                                        <img
                                            src={getStrapiMedia(news["ZdjecieProfile"].url)}
                                            alt=""
                                            className="w-full h-full object-cover object-top"/>
                                    </div>
                                    <div className="p-6  font-[poppins]">
                                <span
                                    className="text-sm block text-slate-600 mb-2">{new Date(news["Data"]).toLocaleDateString('pl-PL')} | {news["Autor"]}</span>
                                        <h2 className="text-xl font-semibold text-slate-900">{news["Tytul"]}</h2>
                                        <hr className="my-4 border-black"/>
                                        <p className="text-slate-600 text-[15px] leading-relaxed">{news["Opis"].substring(0, 215) + "..."}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
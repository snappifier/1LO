import aktu1 from "../../assets/aktu/aktu1.jpeg";
import aktu2 from "../../assets/aktu/aktu2.jpg";
import aktu3 from "../../assets/aktu/aktu3.jpg";
import {motion} from "motion/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";

export const AktualnosciHome2 = () => {

    const newsSection = [
        {image: aktu1, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "Krystian Matwiej"},
        {image: aktu2, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "Michał Szyszło"},
        {image: aktu3, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "ktoś taminny"},
    ]

    const usePosts = () => {
        const { data } = useSuspenseQuery({
            queryKey: ["posts"],
            queryFn: () => get("posts?populate=*&pagination[pageSize]=3&sort[0]=Data:desc"),
        });
        return data?.data || [];
    };

    const posts = usePosts();
    console.log(posts[0]);

    return (
        <div className="p-4 w-full">
            <div className="w-full flex gap-5 md:gap-10 px-[12vw] pb-5">
                <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
                <div className="flex flex-col gap-1 items-end">
                    <p className="text-xl font-semibold w-max font-[montserrat]">AKTUALNOŚCI</p>
                    <p className="text-md w-max font-[montserrat]">Bądź na bieżąco!</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                    {posts.map((news, index) => (
                    <motion.div
                        whileHover={{y: -10}}

                        className="bg-white cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0">
                        <div className="bg-gray-50 aspect-[23/15]">
                            <img
                                src = {getStrapiMedia(news.ZdjecieProfile.url)}
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-6">
                            <span className="text-sm block text-slate-600 mb-2">{new Date(news.Data).toLocaleDateString('pl-PL')} | {news.Autor}</span>
                            <h2 className="text-xl font-semibold text-slate-900">{news["Tytul"]}</h2>
                            <hr className="my-4 border-slate-300"/>
                            <p className="text-slate-600 text-[15px] leading-relaxed">{news.Opis.substring(0, 215) + "..."}</p>
                        </div>
                    </motion.div>
                        ))}
                </div>
            </div>
        </div>)
}
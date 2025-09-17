import {motion} from "motion/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get} from "../../features/fetcher.jsx";

const Aktualnosci = () => {

    const { data } = useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: () =>
            get(
                "posts?populate=*&pagination[pageSize]=3&sort[0]=Data:desc"
            ),
    });
    const posts = data?.data || [];

    return (
        <div className="bg-white p-4 w-full pt-40">
            <div className="w-full flex gap-5 md:gap-10 px-[12vw] pb-5">
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-xl font-semibold w-max font-[montserrat]">AKTUALNOŚCI</p>
                    <p className="text-md w-max font-[montserrat]">Bądź na bieżąco!</p>
                </div>
                <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
            </div>
            <div className="max-w-6xl mx-auto">

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                    {posts.map((news, index) => (
                        <motion.div
                            whileHover={{y: -10}}

                            className="bg-white cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0">
                            <div className="bg-gray-50 aspect-[23/15]">
                                <img src={news.image} alt={`post ${index + 1}`}
                                     className="w-full h-full object-cover object-top"/>
                            </div>
                            <div className="p-6">
                                <span className="text-sm block text-slate-600 mb-2">{news.post} | {news.author}</span>
                                <h2 className="text-xl font-semibold text-slate-900">{news.title}</h2>
                                <hr className="my-4 border-black"/>
                                <p className="text-slate-600 text-[15px] leading-relaxed">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum vel odio ut sapien elementum cursus. Praesent blandit
                                    lacus eu elit molestie, at gravida nibh pellentesque.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aktualnosci
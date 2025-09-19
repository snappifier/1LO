import {AnimatePresence, motion} from "motion/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";
import images from "../../features/strapiImages.jsx";
import {Post} from "../../components/Post.jsx";
import {useState} from "react";

const Aktualnosci = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const {data} = useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: () =>
            get(
                "posts?populate=*&sort[0]=Data:desc"
            ),
    });
    const posts = data?.data || [];

    const handleClick = (news) => {
        setSelectedPost(news);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };


    return (<>
            <AnimatePresence>
                {selectedPost !== null && (
                    <Post
                        key={selectedPost.id}
                        state={selectedPost}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
            <div className="bg-white p-4 w-full pt-40 pb-20 md:px-[15vw] px-[10vw]">
                <div className="w-full flex gap-3 md:gap-10 mb-12 bg-transparent">
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                    <p className="text-2xl font-semibold w-max">Aktualności</p>
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                </div>
                <div className="max-w-8xl mx-auto">

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                        {posts.map((news) => (
                            <motion.div
                                key={news.id}
                                whileHover={{y: -10}}
                                onClick={() => handleClick(news)}
                                className="bg-white cursor-pointer rounded-md overflow-hidden [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] relative top-0">
                                <div className="bg-gray-50 aspect-[23/15]">
                                    <img src={
                                        news?.["ZdjecieProfile"]
                                            ? getStrapiMedia(news["ZdjecieProfile"].url)
                                            : images["zamoyski"]
                                    }
                                         alt={`post`}
                                         className="w-full h-full object-cover object-top"/>
                                </div>
                                <div className="p-6">
                                <span
                                    className="text-sm block text-slate-600 mb-2">{new Date(news["Data"]).toLocaleDateString("pl-PL")} |{" "}
                                    {news["Autor"]}</span>
                                    <h2 className="text-xl font-semibold text-slate-900">{news["Tytul"]}</h2>
                                    <hr className="my-4 border-black"/>
                                    <p className="text-slate-600 text-[15px] leading-relaxed">{news["Opis"].substring(0, 215) + "..."}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aktualnosci
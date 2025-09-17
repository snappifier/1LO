import {AnimatePresence, motion} from "motion/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";
import images from "../../features/strapiImages.jsx";
import {Post} from "../../components/Post.jsx";
import {useState} from "react";

const Aktualnosci = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const { data } = useSuspenseQuery({
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
                        state={selectedPost}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        <div className="bg-white p-4 w-full pt-40 md:px-[15vw] px-[10vw]">
            <div className="flex w-full md:gap-4 gap-2 items-center">
                <div className="w-3 h-10 bg-[#3077BA] rounded-2xl drop-shadow-md/20"></div>
                <p className="text-xl font-medium">KRÓTKO O SZKOLE </p>
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
                                <span className="text-sm block text-slate-600 mb-2">{new Date(news["Data"]).toLocaleDateString("pl-PL")} |{" "}
                                {news["Autor"]}</span>
                                <h2 className="text-xl font-semibold text-slate-900">{news["Tytul"]}</h2>
                                <hr className="my-4 border-black"/>
                                <p className="text-slate-600 text-[15px] leading-relaxed">{news["Opis"].substring(0, 215) + "..."}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div></>
    )
}

export default Aktualnosci
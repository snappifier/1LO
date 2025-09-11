import aktu1 from "../../assets/aktu/aktu1.jpeg";
import aktu2 from "../../assets/aktu/aktu2.jpg";
import aktu3 from "../../assets/aktu/aktu3.jpg";
import {motion} from "motion/react";

export const Aktualnosci2 = () => {

    const newsSection = [
        {image: aktu1, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "Krystian Matwiej" },
        {image: aktu2, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "Michał Szyszło" },
        {image: aktu3, title: "Zakończenie roku szkolnego 2024/2025", post: "24.08.2025", author: "ktoś taminny" },
    ]

    return (
        <>
            <div className="font-[montserrat] flex flex-col w-full h-max gap-5 mt-20 md:gap-5">
                <div className="w-full flex gap-5 md:gap-10 px-[12vw] pb-5">
                    <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1 items-end">
                        <p className="text-xl font-semibold w-max">AKTUALNOŚCI</p>
                        <p className="text-md w-max">Bądź na bieżąco!</p>
                    </div>
                </div>

                <div className="w-full flex flex-wrap gap-10 items-start justify-center px-[12vw] pt-10 pb-15 ">
                    {newsSection.map((news, index) => (
                        <motion.div className="h-130 flex flex-col gap-2 md:w-2/7 hover:cursor-pointer rounded-lg shadow-xl/20 overflow-hidden bg-white"
                        whileHover={{y: -10}}
                        >
                            <div className="w-full h-40 overflow-hidden">
                                <img className="object-cover" src={news.image} alt="news" />
                            </div>
                            <div className="w-full flex justify-center items-center pt-4">
                                <p className="text-sm w-5/6 font-[Montserrat] text-black">{news.post} | {news.author}</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <p className="w-5/6 font-[golos_text] font-semibold text-black text-xl">{news.title}</p>
                            </div>
                            <div className="w-full flex justify-center"><div className="w-5/6 h-[1px] bg-black/40"></div></div>
                            <div className="w-full  overflow-hidden py-4 flex justify-center">
                                <p className="w-5/6 font-[Montserrat] text-black" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel odio ut sapien elementum cursus. Praesent blandit lacus eu elit molestie, at gravida nibh pellentesque.</p>
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <p className="w-5/6 font-[golos_text] font-semibold text-black text-sm">Zobacz więcej</p>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    )
}
import {motion} from "motion/react";
import zamoyski from "../../assets/zdj1.webp";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";

const Kadra = () => {

    const {data} = useSuspenseQuery({
        queryKey: ["kadra"],
        queryFn: () =>
            get(
                "kadras?populate=*"
            ),
    });
    const kadra = data?.data || [];

    return (<>
        <div className="p-4 pt-40 pb-20">
            <div className="lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto">
                <div className="w-full flex gap-3 md:gap-10 mb-12 bg-transparent">
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                    <p className="text-2xl font-semibold w-max">Kadra</p>
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                </div>

                {/*<div*/}
                {/*    className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center max-sm:max-w-xs mx-auto mt-12">*/}
                    {/*<motion.div className="bg-white drop-shadow-xl rounded-lg overflow-hidden"*/}
                    {/*            whileHover={{y: -10}}>*/}
                    {/*    <div className="w-full aspect-square ">*/}
                    {/*        <img src={zamoyski} alt="profile"*/}
                    {/*             className="w-full h-full object-cover object-top"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="p-4">*/}
                    {/*        <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">John Doe</h4>*/}
                    {/*        <p className="text-slate-600 text-xs mt-1 font-[poppins]">Software Engineer</p>*/}
                    {/*        <span*/}
                    {/*            className="-translate-x-0.5 mt-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400">*/}
                    {/*        Dyrektor*/}
                    {/*    </span>*/}
                    {/*    </div>*/}

                    {/*</motion.div>*/}
                    <div className="grid lg:grid-cols-3 lg:max-w-3xl md:grid-cols-3 md:max-w-2xl sm:grid-cols-2 sm:max-w-md gap-6 max-md:justify-center max-sm:max-w-xs mx-auto">
                        {kadra.map((profil) => {
                            console.log(profil["Funkcja"])
                            if (profil["Funkcja"] === "Wicedyrektor" || profil["Funkcja"] === "Dyrektor") {
                                return (<>
                                    <motion.div className="bg-white max-w-xs drop-shadow-xl rounded-lg overflow-hidden"
                                                whileHover={{y: -10}}>
                                        <div className="w-full aspect-square ">
                                            <img src={profil?.["Zdjecie"] ? getStrapiMedia(profil["Zdjecie"].url)    : "https://i1.memy.pl/obrazki/5066708508_jestem_twoja_.jpg"} alt="profil"
                                                 className="w-full h-full object-cover object-top"/>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">{profil["ImieNazwisko"]}</h4>
                                            {/*<p className="text-slate-600 text-xs mt-1 font-[poppins]">{profil["funkcja"]}</p>*/}
                                            <span className={`-translate-x-0.5 mt-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${badges[profil["Funkcja"]]} `}>{profil["Funkcja"]}</span>
                                        </div>
                                    </motion.div>
                                </>)
                            }

                        })}
                    </div>

                    {/*</div>*/}
                </div>
            </div>

        </>
        )
        }

        // -translate-x-0.5 mt-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium
        // text-red-400

        const badges = {
        "Dyrektor": "bg-red-100 text-red-700",
        "Wicedyrektor": "bg-yellow-100 text-yellow-800",
        "Nauczyciel": "bg-green-100 text-green-700",
        "PedagogSpecjalny": "bg-blue-100 text-blue-700",
        "PedagogSzkolny": "bg-blue-100 text-blue-700",
        "PsychologSzkolny": "bg-blue-100 text-blue-700",
        "Biblioteka": "bg-green-100 text-green-700",
    }

        // export default function Example() {
//     return (
//         <>
//       <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
//         Badge
//       </span>
//             <span className="inline-flex items-center rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
//         Badge
//       </span>
//         </>
//     )
// }

        export default Kadra;
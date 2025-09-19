import {motion} from "motion/react";
import images from "../../features/strapiImages.jsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get, getStrapiMedia} from "../../features/fetcher.jsx";




const dyrektorzy = () => {

    const {data} = useSuspenseQuery({
        queryKey: ["profile"],
        queryFn: () =>
            get(
                "archiwum-dyrekcjas?populate=*&sort[0]=Poczatek:desc"
            ),
    });
    const profile = data?.data || [];
    console.log(profile)

    return (<>
        <div className="p-4 pt-40 pb-20">
            <div className="lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto">
                <div className="w-full flex gap-3 md:gap-10 mb-12 bg-transparent">
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                    <p className="text-2xl font-semibold w-max">Dyrektorzy</p>
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                </div>

                <div
                    className="grid lg:grid-cols-3 lg:max-w-3xl md:grid-cols-3 md:max-w-2xl sm:grid-cols-2 sm:max-w-md gap-6 max-md:justify-center max-sm:max-w-xs mx-auto mt-12">
                    {profile.map((profile) => (
                    <motion.div
                        key={profile.id}
                        className="bg-white drop-shadow-xl rounded-lg overflow-hidden"
                                whileHover={{y: -10}}>
                        <div className="w-full aspect-square ">
                            <img src={profile?.["ZdjecieProfile"]
                                ? getStrapiMedia(profile["ZdjecieProfile"].url)
                                : images["zamoyski"]
                            } alt={`Zdjecie-${profile["ImieNazwisko"]}`}
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-4">
                            <h4 className="text-slate-900 text-md font-[poppins] font-medium">{profile["ImieNazwisko"]}</h4>
                            <p className="text-slate-600 text-sm mt-1 font-[poppins]">{ profile?.["Koniec"] ? `${profile?.["Poczatek"].substring(0,4)}-${profile["Koniec"].substring(0,4)}` : "Aktualne" }</p>
                        </div>

                    </motion.div>
                    ))}



                </div>
            </div>
        </div>

    </>)
}

export default dyrektorzy;
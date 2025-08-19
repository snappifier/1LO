import {AnimatePresence} from "motion/react";

import aktu1 from "../../assets/aktu/aktu1.jpeg";
import aktu2 from "../../assets/aktu/aktu2.jpg";
import aktu3 from "../../assets/aktu/aktu3.jpg";

export default function Aktualnosci() {
    const PostContent = ({ content }) => (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );

    const classAktu = ["col-span-2 row-span-2", "col-start-3", "col-start-3 row-start-2", "col-start-4 row-start-1", "col-start-4 row-start-2", "row-start-3", "row-start-3", "row-start-3", "row-start-3"];

    return <div className="font-[montserrat] flex flex-col w-full h-max gap-5 px-[12vw] pb-20 mt-20 md:gap-10 bg-white">
        <div className="w-full flex gap-3 md:gap-10">
            <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
            <div className="flex flex-col gap-1 items-end">
                <p className="text-xl font-semibold w-max">AKTUALNOSCI</p>
                <p className="text-md w-max">Bądź na bieżaco!</p>
            </div>
        </div>
        <AnimatePresence>
            <div className="w-full h-full flex flex-wrap md:grid grid-cols-4 grid-rows-3 gap-8 md:gap-4">
                <div className="flex flex-col gap-2 w-full h-full col-span-2 row-span-2">
                    <div className="h-full w-full"><img src={aktu3} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-xl text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                        <p className="font-medium text-base text-wrap w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis  maximus risus in placerat. Interdum et malesuada fames ac ante ipsum  primis in faucibus. Etiam feugiat ligula ut urna lacinia sodales...</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full col-start-3">
                    <div className="h-full w-full"><img src={aktu2} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full col-start-3 row-start-2">
                    <div className="h-full w-full"><img src={aktu1} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full col-start-4 row-start-1">
                    <div className="h-max w-full"><img src={aktu2} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full col-start-4 row-start-2">
                    <div className="h-full w-full"><img src={aktu3} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full row-start-3">
                    <div className="h-full w-full"><img src={aktu1} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full row-start-3">
                    <div className="h-full w-full"><img src={aktu2} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full row-start-3">
                    <div className="h-full w-full"><img src={aktu3} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-full row-start-3">
                    <div className="h-full w-full"><img src={aktu2} className="w-full"></img></div>
                    <div className="translate-y-[-0.5] flex mt-3 w-1/2 h-0.5 rounded-md bg-black"></div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-base text-wrap w-full">Zakończenie roku szkolnego 2024/2025</h1>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    </div>
}
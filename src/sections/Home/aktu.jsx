import {get} from "../../components/fetcher.jsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {AnimatePresence} from "motion/react";

export default function Aktualnosci() {
    const PostContent = ({ content }) => (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );

    const classAktu = ["col-span-2 row-span-2", "col-start-3", "col-start-3 row-start-2", "col-start-4 row-start-1", "col-start-4 row-start-2", "row-start-3", "row-start-3", "row-start-3", "row-start-3"];

    return <div className="font-[montserrat] flex flex-col w-full h-max gap-5 px-[12vw] pb-10 mt-20 md:gap-10 bg-white">
        <div className="w-full flex gap-3 md:gap-10">
            <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
            <div className="flex flex-col gap-1 items-end">
                <p className="text-xl font-semibold w-max">AKTUALNOSCI</p>
                <p className="text-md w-max">Bądź na bieżaco!</p>
            </div>
        </div>
        <AnimatePresence>
            <div className="w-full h-250 grid grid-cols-4 grid-rows-4 gap-4">
            </div>
        </AnimatePresence>
    </div>
}
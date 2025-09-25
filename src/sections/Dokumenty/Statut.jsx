import {motion} from "motion/react";
import {Link} from "react-router-dom";


const Statut = () => {


    return (
        <>
            <div className="w-full pt-36 md:pt-40 pb-16 md:pb-20 flex flex-col items-center h-[80vh]">
                <div className="w-[92%] sm:w-[90%] lg:w-[80%]">
                        <div className="w-full flex flex-col mb-4 sm:mb-6">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-extralight w-max">
                                Statut
                            </p>
                        </div>
                    <div className="w-max h-max">
                        <Link to={""} target={"_blank"} className="w-max h-max">
                            <motion.div
                                className="w-max cursor-pointer flex items-center justify-between gap-3"
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 260, damping: 24}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <path fill="#959595"
                                          d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"/>
                                </svg>
                                <p className="text-xl mt-1 font-[poppins] font-light text-slate-700">Pobierz statut szkoły</p>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Statut;
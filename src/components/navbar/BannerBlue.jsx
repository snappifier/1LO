import {ExitIcon} from "../animations/ExitIcon";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {LogoLetters} from "../LogoLetters";
import {DropdownMobile} from "./DropdownMobile.jsx";

export const BannerBlue = ({navOpen, setNavOpen}) => {


    return (
        <>
        <div className="fixed bg-[#3077BA] w-full flex flex-col items-center justify-start overflow-y-auto z-60 shadow-md ">
           <div className="w-full flex items-center justify-between">
            <Link to={'/'} className="z-[60]">
                <LogoLetters />
            </Link>
            <motion.button
                onClick={() => setNavOpen(!navOpen)}
                className={`cursor-pointer z-90 text-white text-3xl pr-8`}

            >
                <ExitIcon isOpen={navOpen}/>
            </motion.button>
           </div>

            <DropdownMobile isOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        </>
    )
}
import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {LogoLetters} from "../LogoLetters";
import {DropdownMobile} from "./DropdownMobile.jsx";

export const BannerBlue = ({navOpen, setNavOpen}) => {


    return (
        <header id="heads" className="fixed bg-[#3077BA] w-full flex flex-col items-center justify-start overflow-y-auto z-60 ">
           <div className="w-full flex items-center justify-between">
            <Link to={'/'} className="z-[60]">
                <LogoLetters />
            </Link>
            <motion.button
                onClick={() => setNavOpen(!navOpen)}
                className={` cursor-pointer z-90 text-white text-3xl pr-8`}

            >
                <ExitIcon isOpen={navOpen} className=""/>
            </motion.button>
           </div>
            <DropdownMobile isOpen={navOpen} setNavOpen={setNavOpen} className="z-100" />
        </header>

    )
}
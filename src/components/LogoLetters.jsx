import {motion} from "motion/react";
import logo from "../assets/logo.png";

export const LogoLetters = ({scrolled}) => {
    return (<div
        className={`flex items-center font-[Montserrat] leading-none drop-shadow-sm text-white gap-2`}>
        <motion.img
            src={logo}
            className={`drop-shadow-md m-3 h-20 ${scrolled ? "md:h-20" : "md:h-25"}`}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1}}
        />
        <div className="w-2/5 md:w-1/2 text-wrap text-xs md:text-base">
            <p>I Liceum Ogólnokształcące im. Jana Zamoyskiego</p>
        </div>
    </div>)
}
import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {DropdownMobile} from "./DropdownMobile";
import {DropdownPC} from "./DropdownPC";


export const BannerTransparent = () => {

    const [navOpen, setNavOpen] = useState(false);


    return (
        <>
        <header className="top-0 w-full h-40 z-50 p-[2vw] lg:px-25 flex justify-between items-center absolute bg-gradient-to-b from-black/80 to-transparent">
            <Link to={'/'} className="z-[60]">
                <div
                    className={`flex items-center font-[Montserrat] leading-none drop-shadow-sm text-white gap-2`}>
                    <motion.img
                        src={logo}
                        className="drop-shadow-md m-3 h-20 md:h-25"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                    />
                    <div className="w-2/5 md:w-1/2 text-wrap text-xs md:text-base">
                        <p>I Liceum Ogólnokształcące im. Jana Zamoyskiego</p>
                    </div>
                </div>
            </Link>
            <DropdownPC />
        </header>

            {/*<motion.button*/}
            {/*    onClick={setNavOpen(!navOpen)}*/}
            {/*    className="absolute cursor-pointer flex items-center justify-center z-[1000] md:hidden text-white size-12 top-8 right-5 text-3xl"*/}
            {/*><ExitIcon isOpen={navOpen}/></motion.button>*/}


        </>
    );
}
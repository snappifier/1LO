import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {DropdownMobile} from "./DropdownMobile";
import {DropdownPC} from "./DropdownPC";


export const BannerTransparent = () => {

    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
                <header className={`top-0 w-full z-60  ${navOpen ? "absolute h-full bg-[#3077BA] flex flex-col justify-between items-center" : "h-40  lg:px-25 flex justify-between items-center absolute bg-gradient-to-b from-black/80 to-transparent"}`}>

                    {/*<motion.div*/}
                    {/*    className="top-0 w-full h-40 bg-[#3077BA] z-60 flex items-center justify-start text-white font-[Montserrat] leading-none text-sm"*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    animate={{opacity: 1}}*/}
                    {/*    exit={{opacity: 0}}*/}
                    {/*    transition={{duration: 0.1}}*/}
                    {/*>*/}
                    {/*    <motion.img*/}
                    {/*        src={logo}*/}
                    {/*        alt="Logo"*/}
                    {/*        className="drop-shadow-md m-5 h-20 md:h-25"*/}
                    {/*    />*/}
                    {/*    <div className="w-2/5 md:w-1/2 text-wrap text-xs md:text-base">*/}
                    {/*        <p>I Liceum Ogólnokształcące<br/> im. Jana Zamoyskiego</p>*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}

                    <Link to={'/'} className="z-[60]">
                <div
                    className={`flex items-center font-[Montserrat] leading-none drop-shadow-sm text-white gap-2 h-40 p-[2vw]`}>
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
            <DropdownPC className="hidden lg:flex" />
            <motion.button
                onClick={() => setNavOpen(!navOpen)}
                className={`absolute cursor-pointer z-90 lg:hidden text-white  text-3xl top-16 right-10`}

            >
                <ExitIcon isOpen={navOpen} className=""/></motion.button>
                    <DropdownMobile isOpen={navOpen} setNavOpen={setNavOpen} className="z-100 "/>
        </header>

            {/*<motion.button*/}
            {/*    onClick={setNavOpen(!navOpen)}*/}
            {/*    className="absolute cursor-pointer flex items-center justify-center z-[1000] md:hidden text-white size-12 top-8 right-5 text-3xl"*/}
            {/*><ExitIcon isOpen={navOpen}/></motion.button>*/}


        </>
    );
}
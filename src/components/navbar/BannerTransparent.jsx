import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {useState} from "react";


export const BannerTransparent = () => {

    const [navOpen, setNavOpen] = useState(false);


    return (
        <>
        <header className="top-0 w-full h-30 z-50 flex justify-between items-center fixed bg-gradient-to-b from-black/80 to-transparent">
            <Link to={'/'} className="z-[60]">
                <div
                    className={`flex items-center font-[golos_text] leading-none drop-shadow-sm text-white text-sm`}>
                    <motion.img
                        src={logo}
                        className="drop-shadow-md m-3 h-20"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                    />
                    <div>
                        <p>I Liceum</p>
                        <p>Ogólnokształcące im.</p>
                        <p>Jana Zamoyskiego</p>
                    </div>
                </div>
            </Link>
        </header>

            <motion.button
                onClick={setNavOpen(!navOpen)}
                className="absolute cursor-pointer flex items-center justify-center z-[1000] md:hidden text-white size-12 top-8 right-5 text-3xl"
            ><ExitIcon isOpen={navOpen}/></motion.button>


        </>
    );
}
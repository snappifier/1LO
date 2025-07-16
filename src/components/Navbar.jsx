import logo from "../assets/logo.png";
import logoblack from "../assets/logoonlyblack.png";
import { ExitIcon } from "./animations/ExitIcon";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [scrollY, setScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);


    const navLinks = [
        {name: 'Home', path: '/'},
        {name: 'Szkola', path: '/szkola'},
    ]


    const HEADER_HEIGHT = 110; //wysokosc zmiany navbarow

    const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > HEADER_HEIGHT) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        setScrollY(currentY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (<>
        <header className={`top-0 w-full z-50 flex justify-between items-center ${scrolled
            ? "h-20 fixed bg-white shadow-md"
            : "h-30 absolute bg-gradient-to-b from-black/80  to-transparent "}`}
        >
            <Link to={'/'} className="z-[60]">
            <div className={`flex items-center font-[golos_text] leading-none drop-shadow-sm ${scrolled ? "text-sm text-black" : "text-sm text-white"}`}>
                <motion.img
                    src={scrolled ? logoblack : logo}
                    className={` drop-shadow-md ${scrolled ? "ml-4 mr-3 h-18 rounded-full" : "m-3 h-20"}`}
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
            <motion.button
                onClick={() => setNavOpen(!navOpen)}
                className={`cursor-pointer size-12 flex items-center justify-center font-bold mx-7 z-[999] md:hidden ${scrolled ? "text-black text-2xl" : "text-white text-3xl" }`}

            >
                <ExitIcon isOpen={navOpen}/></motion.button>
        </header>
        <AnimatePresence>
        {navOpen && (
            <motion.nav
                key="mobile-nav"
            initial={{y: -800, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -800, opacity: 0}}
            transition={{duration: 0.4}}
            className="fixed top-0 left-0 w-full h-full bg-blue-900 z-40 overflow-hidden"

            >
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.path} onClick={() => setNavOpen(false)}>{link.name}</Link>
                ))}
            </motion.nav>
        )};
        </AnimatePresence>

    </>)
}



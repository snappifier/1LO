import logo from "../assets/logo.png";
import logoblack from "../assets/logoonlyblack.png";
import {ExitIcon} from "./animations/ExitIcon";
import {DropArrow} from "./animations/DropArrow";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [scrollY, setScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [openSzkola, setOpenSzkola] = useState(false);
    const [openUczen, setOpenUczen] = useState(false);


    const navLinks = [
        {name: 'rekrutacja', path: '/rekrutacja'},
        {name: 'kontakt', path: '/kontakt'},
        {name: 'kontakt', path: '/kontakt'},
        {name: 'kontakt', path: '/kontakt'},
    ]

    const navButtons = [
        {name: 'szkoła'},
        {name: 'uczeń'}
    ]

    const mobileNavLinks = [
        {name: 'Szkoła', onClick: () => setOpenSzkola(prev => !prev), isOpen: openSzkola, isDropdown: true},
        {name: 'Uczeń', onClick: () => setOpenUczen(prev => !prev), isOpen: openUczen, isDropdown: true},
        {name: 'Rekrutacja', onClick: () => setNavOpen(false)},
        {name: 'E-Dziennik', onClick: () => setNavOpen(false)},
        {name: 'Panel nauczyciela', onClick: () => setNavOpen(false)},
    ]

    //wysokosc zmiany navbarow
    const HEADER_HEIGHT = 110;

    //zmiana navbarow transparent/bialy
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

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [navOpen]);


    return (<>
            <header className={`top-0 w-full z-50 flex justify-between items-center ${scrolled
                ? "h-20 fixed bg-[#3077BA] shadow-md"
                : "h-30 absolute bg-gradient-to-b from-black/80  to-transparent "}`}
            >

                {/*logo*/}
                <Link to={'/'} className="z-[60]">
                    <div
                        className={`flex items-center font-[golos_text] leading-none drop-shadow-sm text-white ${scrolled ? "text-sm" : "text-sm "}`}>
                        <motion.img
                            src={logo}
                            className={` drop-shadow-md ${scrolled ? "ml-4 mr-3 h-18" : "m-3 h-20"}`}
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

                {/*nav md*/}
                <nav className={`hidden md:flex items-end font-[golos_text] ${scrolled ? "text-black" : "text-white flex-col mx-5"}  `}>
                    <div className="flex flex-col items-end">
                        <div className="text-[14px] font-regular">&#128222;+84 639 28 01</div>
                        <div className="text-[14px] font-regular mb-2">&#9993;sekretariat@1lo.zamosc.pl</div>
                    </div>
                    <div className="border-t-2 border-white flex justify-between gap-12 font-bold text-[24px]">
                        {navLinks.map((link) => (
                            <Link
                                className=""
                                key={link.name} to={link.path}>{link.name}</Link>
                        ))}
                    </div>
                </nav>
            </header>

            {/*hamburger*/}
            <motion.button
                onClick={() => setNavOpen(!navOpen)}
                className={`absolute cursor-pointer flex items-center justify-center z-[1000] md:hidden text-white ${scrolled ? "fixed size-12 top-5 right-5 text-2xl" : "size-12  top-8 right-5 text-3xl"}`}

            >
                <ExitIcon isOpen={navOpen}/></motion.button>

            <AnimatePresence>
                {navOpen && (
                    <>
                        <motion.div className="fixed top-0 left-0 w-full h-full bg-[#3077BA] z-60"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.5}}
                        >
                            <motion.div className=" top-0 left-0 w-full h-45 bg-[#3077BA] z-60 flex items-center justify-start text-white font-[golos_text] leading-none text-sm"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.1}}
                            >
                                <motion.img src={logo} className="m-5 mb-15 h-24" />
                                <div className="mb-10">
                                    <p>I Liceum</p>
                                    <p>Ogólnokształcące im.</p>
                                    <p>Jana Zamoyskiego</p>
                                </div>
                            </motion.div>
                            <motion.nav className="relative top-0 left-0 w-full h-full flex flex-col items-start justify-start z-60"
                            >
                                {mobileNavLinks.map((link, i) => {
                                    const enterDelay = i * 0.07;
                                    const exitDelay = (mobileNavLinks.length - i - 1) * 0.07;
                                    return (
                                        <motion.div key={link.name}
                                                    className="cursor-pointer w-full h-20 flex items-center justify-start pl-20 bg-[#3077BA] text-white text-xl font-[golos_text] border-b-1 border-white"
                                                    initial={{opacity: 0, y: -10}}
                                                    animate={{opacity: 1, y: 0}}
                                                    exit={{opacity: 0,y: -10, transition: {delay: exitDelay}}}
                                                    transition={{duration: 0.1, delay: enterDelay}}
                                        >
                                            <button className="cursor-pointer flex items-center " onClick={link.onClick}>{link.name} {link.isDropdown && <DropArrow isOpen={link.isOpen} className="block"/>}</button>
                                        </motion.div>)
                                })}
                            </motion.nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            
        </>
    )
}



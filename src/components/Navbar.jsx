import logo from "../assets/logo.png";
import {ExitIcon} from "./animations/ExitIcon";
import {DropdownMobile} from "./navbar/DropdownMobile";
import {BannerTransparent} from "./navbar/BannerTransparent";
import {BannerBlue} from "./navbar/BannerBlue";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })



    return (
        <>
            <header className="top-0 w-full h-40 z-50 lg:px-25 flex justify-between items-center absolute bg-gradient-to-b from-black/80 to-transparent">
                <motion.button
                    onClick={() => setNavOpen(!navOpen)}
                    className={`absolute cursor-pointer flex items-center justify-center z-90 lg:hidden text-white top-16 right-10 text-3xl `}

                >
                    <ExitIcon isOpen={navOpen} className=""/>
                </motion.button>

                <DropdownMobile isOpen={navOpen} setNavOpen={setNavOpen} className="z-100"/>
                <BannerTransparent />
            </header>
        </>
    )


}


// const [scrollY, setScrollY] = useState(0);
// const [scrolled, setScrolled] = useState(false);
// const [navOpen, setNavOpen] = useState(false);
// const [openSzkola, setOpenSzkola] = useState(false);
// const [openUczen, setOpenUczen] = useState(false);
//
//
// const navLinks = [
//     {name: 'Szkoła', path: '/szkola'},
//     {name: 'Uczeń', path: '/uczen'},
//     {name: 'Rekrutacja', path: '/rekrutacja'},
//     {name: 'Kontakt', path: '/kontakt'},
// ]
//
// const mobileNavLinks = [
//     {name: 'Szkoła', onClick: () => setOpenSzkola(prev => !prev), isOpen: openSzkola, isDropdown: true},
//     {name: 'Uczeń', onClick: () => setOpenUczen(prev => !prev), isOpen: openUczen, isDropdown: true},
//     {name: 'Rekrutacja', onClick: () => setNavOpen(false)},
//     {name: 'E-Dziennik', onClick: () => setNavOpen(false)},
//     {name: 'Panel nauczyciela', onClick: () => setNavOpen(false)},
// ]
//
// //wysokosc zmiany navbarow
// const HEADER_HEIGHT = 110;
//
// //zmiana navbarow transparent/bialy
// const handleScroll = () => {
//     const currentY = window.scrollY;
//     if (currentY > HEADER_HEIGHT) {
//         setScrolled(true);
//     } else {
//         setScrolled(false);
//     }
//     setScrollY(currentY);
// }
//
// useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
// }, [scrollY]);
//
// useEffect(() => {
//     if (navOpen) {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'auto';
//     }
//
//     return () => {
//         document.body.style.overflow = 'auto';
//     };
// }, [navOpen]);
//
//
// return (<>
//         <header className={`top-0 w-full z-50 flex justify-between items-center ${scrolled
//             ? "h-20 fixed bg-[#3077BA] shadow-md"
//             : "h-30 absolute bg-gradient-to-b from-black/80  to-transparent "}`}
//         >
//
//             {/*logo*/}
//             <Link to={'/'} className="z-[60]">
//                 <div
//                     className={`flex items-center font-[golos_text] leading-none drop-shadow-sm text-white ${scrolled ? "text-sm" : "text-sm "}`}>
//                     <motion.img
//                         src={logo}
//                         className={` drop-shadow-md ${scrolled ? "ml-4 mr-3 h-18" : "m-3 h-20"}`}
//                         whileHover={{scale: 1.1}}
//                         whileTap={{scale: 1}}
//                     />
//                     <div>
//                         <p>I Liceum</p>
//                         <p>Ogólnokształcące im.</p>
//                         <p>Jana Zamoyskiego</p>
//                     </div>
//
//                 </div>
//             </Link>
//
//             {/*nav md*/}
//             <nav className={`hidden md:flex items-end font-[golos_text] text-white flex-col mx-5`}>
//                 <div className="flex flex-col items-end">
//                     <div className="text-[14px] font-regular">&#128222;+84 639 28 01</div>
//                     <div className="text-[14px] font-regular mb-2">&#9993;sekretariat@1lo.zamosc.pl</div>
//                 </div>
//                 <div className="border-t-2 border-white flex justify-between gap-12 font-bold text-[24px]">
//                     {navLinks.map((link) => (
//                         <Link
//                             className=""
//                             key={link.name} to={link.path}>{link.name}</Link>
//                     ))}
//                 </div>
//             </nav>
//         </header>
//
//         {/*hamburger*/}
//         <motion.button
//             onClick={() => setNavOpen(!navOpen)}
//             className={`absolute cursor-pointer flex items-center justify-center z-[1000] md:hidden text-white ${scrolled ? "fixed size-12 top-5 right-5 text-2xl" : "size-12  top-8 right-5 text-3xl"}`}
//
//         >
//             <ExitIcon isOpen={navOpen}/></motion.button>
//
//         {/*otwierana logo na mobile*/}
//        <DropdownMobile isOpen={navOpen} setNavOpen={setNavOpen} className="z-100"/>
//     </>
// )






import logo from "../assets/logo.png";
import {ExitIcon} from "./animations/ExitIcon";
import {DropdownMobile} from "./navbar/DropdownMobile";
import {BannerTransparent} from "./navbar/BannerTransparent";
import {BannerBlue} from "./navbar/BannerBlue";
import {BannerBluePC} from "./navbar/BannerBluePC";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);


    {/*Overflow Settings*/
    }
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navOpen]);
    {/*Changing Settings*/
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>

            <header className="lg:hidden">
                <BannerBlue setNavOpen={setNavOpen} navOpen={navOpen}/>
            </header>
            {scrolled ? <BannerBluePC />: <BannerTransparent />}


        </>
    )


}


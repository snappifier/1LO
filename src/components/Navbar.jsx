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


    {/*Overflow Settings*/}
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navOpen]);
    {/*Changing Settings*/}
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


                <BannerBlue setNavOpen={setNavOpen} navOpen={navOpen} className="hidden" />


                {/*<BannerTransparent className="hidden" />*/}


        </>
    )


}


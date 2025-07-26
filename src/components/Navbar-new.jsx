import {BannerBlue} from "./navbar/BannerBlue";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

export const NavbarNew = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Overflow Settings
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navOpen]);
    
    // Changing Settings
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll Value
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.header
                initial={false}
                className="w-full z-[100] flex justify-between items-center px-[8vw]"
            >

                <BannerBlue setNavOpen={setNavOpen} navOpen={navOpen} className="" />
            </motion.header>
        </>
    )


}






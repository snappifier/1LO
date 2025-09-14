import { BannerBlue } from "./navbar/BannerBlue";
import { BannerBluePC } from "./navbar/BannerBluePC";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const scrolled = true;
    // Overflow settings (blokowanie przewijania przy otwartym mobile menu)
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<>
        <header className="lg:hidden">
            <BannerBlue setNavOpen={setNavOpen} navOpen={navOpen} />
        </header>
        <BannerBluePC navOpen={navOpen} setNavOpen={setNavOpen} scrolled={scrolled} />
    </>)
}
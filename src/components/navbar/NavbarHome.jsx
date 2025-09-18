import { BannerTransparent } from "./BannerTransparent.jsx";
import { BannerBlue } from "./BannerBlue.jsx";
import { BannerBluePC } from "./BannerBluePC.jsx";

import { useState, useEffect } from "react";

export const NavbarHome = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Overflow settings (blokowanie przewijania przy otwartym mobile menu)
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navOpen]);

    // Jeśli okno >= 1024px, zamykamy mobile menu
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Zmiana bannera przy scrollu
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="lg:hidden">
                <BannerBlue setNavOpen={setNavOpen} navOpen={navOpen} />
            </header>


            {scrolled ? (
                <BannerBluePC navOpen={navOpen} setNavOpen={setNavOpen} scrolled={scrolled} />
            ) : (
                <BannerTransparent />
            )}
        </>
    );
};

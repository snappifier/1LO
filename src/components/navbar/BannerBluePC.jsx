import { Link } from "react-router-dom";
import { LogoLetters } from "../LogoLetters";
import { DropdownPC } from "./DropdownPC";

export const BannerBluePC = ({ navOpen, setNavOpen, scrolled }) => {
    return (
        <>
            {/* overflow-visible aby dropdowny mogły wystawać poza header */}
            <div className="fixed bg-[#3077BA] w-full items-center justify-around overflow-visible z-60 hidden lg:flex shadow-md h-25">
                <Link to={"/"} className="z-[60]">
                    <LogoLetters scrolled={scrolled}/>
                    </Link>

                {/* compact = true -> ukrywa kontakt i linię wewnątrz dropdownu */}
                <DropdownPC compact={true} />
            </div>
        </>
    );
};

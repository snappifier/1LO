import {Link} from "react-router-dom";
import {LogoLetters} from "../LogoLetters";
import {DropdownPC } from "./DropdownPC";

export const BannerBluePC = ({navOpen, setNavOpen}) => {


    return (
        <>
            <div className="fixed bg-[#3077BA] w-full items-center justify-around overflow-y-auto z-60 hidden lg:flex  shadow-md ">

                    <Link to={'/'} className="z-[60]">
                        <LogoLetters />
                    </Link>
                    <DropdownPC/>



            </div>
        </>
    )
}
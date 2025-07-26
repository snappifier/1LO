import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {DropdownMobile} from "./DropdownMobile";
import {DropdownPC} from "./DropdownPC";
import {LogoLetters} from "../LogoLetters";


export const BannerTransparent = () => {


    return (
        <>
            <div className="absolute w-full flex items-center justify-between">
                <Link to={'/'} className="z-[60]">
                    <LogoLetters />
                </Link>

            </div>

            <DropdownPC className="" />

        </>
    );
}
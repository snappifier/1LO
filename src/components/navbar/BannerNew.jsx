import {Link} from "react-router";
import {motion} from "motion/react";
import DropdownNew from "./DropdownNew.jsx";
import strapiImages from "../../assets/photos.jsx";

export const BannerNew = () => {
    console.log(strapiImages)
    return(<>
    <header className="fixed top-0 w-full h-30 flex flex-col items-center justify-center z-100">
        <div className="w-[80%] h-15 bg-[#3077BA]/80 backdrop-blur-xs backdrop-saturate-300 rounded-xl flex items-center justify-between px-10 shadow-lg">
            <Link to={'/'} className="z-[60]">
            <motion.img src={strapiImages["logo"]} alt="logo" className="h-11" whileHover={{scale: 1.1}} whileTap={{scale: 1}}/>
            </Link>
            <div className="flex items-center ">
                <DropdownNew />
            </div>
        </div>
    </header>
    </>)
}
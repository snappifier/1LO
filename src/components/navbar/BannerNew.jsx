import {Link} from "react-router";
import {motion} from "motion/react";
import DropdownNew from "./DropdownNew.jsx";
import {useEffect} from "react";
import {fetchAndOrganizeStrapiImages, images} from "../../features/strapiImages.jsx";
import {useLocation} from "react-router-dom";

export const BannerNew = () => {
    console.log(images)
    console.log("Wczytany baner")

    const location = useLocation();

    useEffect(() => {
        fetchAndOrganizeStrapiImages();
    }, [location.pathname]);

    return(<>
    <header className="fixed top-0 w-full h-30 flex flex-col items-center justify-center z-100">
        <div className="w-[80%] h-15 bg-[#3077BA]/80 backdrop-blur-xs backdrop-saturate-300 rounded-xl flex items-center justify-between px-10 shadow-lg">
            <Link to={'/'} className="z-[60]">
            <motion.img src={images["logo_thumbnail"]} width={64} height={64}  alt="logo" className="h-11 w-11" whileHover={{scale: 1.1}} whileTap={{scale: 1}}/>
            </Link>
            <div className="flex items-center ">
                <DropdownNew />
            </div>
            <motion.div
            whileHover={{scale: 1.15}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fdfdfd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>
            </motion.div>
        </div>
    </header>
    </>)
}
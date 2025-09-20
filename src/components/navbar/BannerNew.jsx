import {Link} from "react-router";
import {AnimatePresence, motion} from "motion/react";
import DropdownNew from "./DropdownNew.jsx";
import {useEffect, useState} from "react";
import {fetchAndOrganizeStrapiImages, images} from "../../features/strapiImages.jsx";
import {useLocation} from "react-router-dom";
import {Search} from "../Search.jsx";

export const BannerNew = () => {
    const [searchOn, setSearchOn] = useState(false);

    const location = useLocation();

    useEffect(() => {
        fetchAndOrganizeStrapiImages();
    }, [location.pathname]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape" && searchOn !== true) {
                setSearchOn(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);


    const handleClick = () => {
        setSearchOn(true);
    };

    const closeModal = () => {
        setSearchOn(false);
    };

    return(<>
        <AnimatePresence mode="wait">
            {searchOn !== false && (
                <Search
                    key={searchOn.id}
                    onClose={closeModal}
                />
            )}
        </AnimatePresence>
    <header className="fixed top-0 w-full h-30 flex flex-col items-center justify-center z-100">
        <div className="w-[90%] lg:w-[80%] h-15 bg-[#3077BA]/80 backdrop-blur-xs backdrop-saturate-300 rounded-xl flex items-center justify-between px-10 shadow-lg">
            <Link to={'/'} className="z-[60]">
            <motion.img src={images["logo_thumbnail"]} width={64} height={64}  alt="logo" className="h-11 w-11 min-w-11" whileHover={{scale: 1.1}} whileTap={{scale: 1}}/>
            </Link>
            <div className="hidden md:flex items-center ">
                <DropdownNew />
            </div>
            <div
                className="group hover:bg-[#3077BA] h-10 w-10 flex justify-center items-center rounded-md cursor-pointer"
            onClick={handleClick}
            >
                <motion.svg className="transform transition-transform duration-150 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fdfdfd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></motion.svg>
            </div>
        </div>
    </header>
    </>)
}
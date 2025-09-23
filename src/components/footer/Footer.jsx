import Slider from "./slider.jsx";
import Menu from "./menu.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {fetchAndOrganizeStrapiImages} from "../../features/strapiImages.jsx";

export default function Footer(){
    const location = useLocation();

    useEffect(() => {
        fetchAndOrganizeStrapiImages();
    }, [location.pathname]);

    return <>
        <footer className="flex flex-col z-40 md:items-center text-white pt-4 overflow-hidden whitespace-nowrap w-full h-full bg-[#3077BA]">
            <Slider />
            <Menu />
        </footer>
    </>
}
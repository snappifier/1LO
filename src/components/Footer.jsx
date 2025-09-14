import Slider from "./footer/slider.jsx";
import Menu from "./footer/menu.jsx";
import Shields from "./footer/shields.jsx";
import Banner from "../sections/Home/banner.jsx";

export default function Footer(){
    return <>
        <footer className="flex flex-col z-40 font-[montserrat] font-regular md:items-center text-white pt-4 overflow-hidden whitespace-nowrap w-full h-full bg-[#3077BA]">
            <Slider />
            <Menu />
        </footer>
    </>
}
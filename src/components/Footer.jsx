import Slider from "./footer/slider.jsx";
import Menu from "./footer/menu.jsx";

export default function Footer(){
    return <>
        <footer className="flex flex-col z-40  md:items-center text-white pt-4 overflow-hidden whitespace-nowrap w-full h-full bg-[#3077BA]">
            <Slider />
            <Menu />
        </footer>
    </>
}
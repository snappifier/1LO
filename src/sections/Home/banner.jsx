import Home from "./Home.jsx";
import baner1LO from "../../assets/Home/zdj1.jpg";

export default function Banner() {
    return (
        <>
            <div className="relative w-full h-[70vh] md:h-[80vh]">
                <img
                    src={baner1LO}
                    className="w-full h-full brightness-60 object-cover object-bottom"
                    alt="baner"
                />
                <p className="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-20 font-[meow_script] text-5xl md:text-9xl text-white text-center">
                    “Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
                </p>
            </div>

            {/* Niebieski prostokąt - nakładka na dół zdjęcia */}
            <div className="absolute -bottom-[calc(-30vh+40px)] md:-bottom-[calc(-20vh+40px)] left-1/2 translate-x-[-50%] w-3/4 h-[80px] bg-[#3077BA] z-10"></div>
        </>
    );
}

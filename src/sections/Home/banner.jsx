import Home from "./Home.jsx";
import baner1LO from "../../assets/Home/zdj1.jpg";

export default function Banner(){
    return <>
        <div className="w-full h-[80vh] flex">
            <img
                src={baner1LO}
                className="relative w-full brightness-75 object-cover object-bottom"
                alt="baner"
            />

            {/* Niebieski prostokąt - nakładka na dół zdjęcia */}
            <div className="absolute -bottom-[calc(-20vh+40px)] left-1/2 translate-x-[-50%] w-3/4 h-[80px] bg-[#3077BA] z-10"></div>
        </div>
    </>
}
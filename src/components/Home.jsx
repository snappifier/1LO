import {Navbar} from './Navbar.jsx';
import Footer from "./Footer.jsx";
import baner1LO from "../assets/zdj1.jpg";

export default function Home(){
    return <>
        <Navbar />
        <div className="w-full h-max flex flex-col items-center">
            <div className="w-full h-[600px] relative">
                <img
                    src={baner1LO}
                    className="w-full h-full object-cover object-bottom"
                    alt="baner"
                />

                {/* Niebieski prostokąt - nakładka na dół zdjęcia */}
                <div className="absolute bottom-[-40px] left-1/2 translate-x-[-50%] w-3/4 h-[80px] bg-[#3077BA] z-10"></div>
            </div>
            <div className="w-full h-100 bg-white"></div>
        </div>
        <Footer />
    </>
}
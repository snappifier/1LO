import {Navbar} from '../../components/Navbar.jsx';
import Footer from "../../components/Footer.jsx";
import Banner from "./banner.jsx";
import baner1LO from "../../assets/Home/zdj1.jpg";

export default function Home(){
    return <>
        <div className="w-full h-max flex flex-col items-center">
            <Banner />
            <div className="flex flex-col w-full h-100 bg-white">
                <div className="flex">
                    <div className="flex flex-col">
                        <p className="font">REKRUTACJA 2025/2026</p>
                        <p>Dołącz do naszej szkoły już dziś!</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
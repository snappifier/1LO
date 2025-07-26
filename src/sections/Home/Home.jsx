import {Navbar} from '../../components/Navbar.jsx';
import Footer from "../../components/Footer.jsx";
import Banner from "./banner.jsx";
import baner1LO from "../../assets/Home/zdj1.jpg";
import Rekrutacja from "./rekrutacja.jsx";
import Aktualnosci from "./aktu.jsx";

export default function Home(){
    return <>
        <div className="w-full h-max flex flex-col items-center">
            <Banner />
            <Rekrutacja />
            <Aktualnosci />
        </div>

    </>
}
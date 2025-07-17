import {Navbar} from '../../components/Navbar.jsx';
import Footer from "../../components/Footer.jsx";
import Banner from "./banner.jsx";
import baner1LO from "../../assets/zdj1.jpg";

export default function Home(){
    return <>
        <Navbar />
        <div className="w-full h-max flex flex-col items-center">
            <Banner />
            <div className="w-full h-100 bg-white"></div>
        </div>
        <Footer />
    </>
}
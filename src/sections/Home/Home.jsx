import {Navbar} from '../../components/Navbar.jsx';
import Footer from "../../components/Footer.jsx";
import Banner from "./banner.jsx";
import baner1LO from "../../assets/Home/zdj1.jpg";
import RekrutacjaHome from "./RekrutacjaHome.jsx";
import {AktualnosciHome} from "./AktualnosciHome.jsx";
import {AktualnosciHome2} from "./AktualnosciHome2.jsx";

export default function Home(){
    return <>
        <div className="w-full h-max flex flex-col items-center">
            <Banner />
            <RekrutacjaHome />
            <AktualnosciHome2 />
        </div>

    </>
}
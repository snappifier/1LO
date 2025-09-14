import Banner from "./banner.jsx";
import RekrutacjaHome from "./RekrutacjaHome.jsx";
import {AktualnosciHome2} from "./AktualnosciHome2.jsx";
import Shields from "../../components/footer/shields.jsx"

export default function Home(){
    return (
        <div className="relative w-full min-h-screen">

            {/* Zawartość strony - z przezroczystym tłem */}
            <div className="w-full h-max flex flex-col items-center z-10">
                <div className="w-full bg-transparent">
                    <Banner />
                </div>
                <div className="w-full bg-transparent">
                    <RekrutacjaHome />
                </div>
                <div className="w-full bg-transparent">
                    <AktualnosciHome2 />
                </div>
                <div className="w-full bg-transparent">
                    <Shields />
                </div>
            </div>
        </div>
    );
}
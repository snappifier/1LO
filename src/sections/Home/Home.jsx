import Banner from "./banner.jsx";
import Wstep from "./Wstep.jsx";
import {AktualnosciNew} from "./AktualnosciNew.jsx";
import Shields from "../../components/footer/shields.jsx"

export default function Home(){
    return (
        <div className="relative w-full min-h-screen">
            <div className="w-full h-max flex flex-col items-center z-10">
                <div className="w-full bg-transparent">
                    <Banner />
                </div>
                <div className="w-full bg-transparent">
                    <Wstep />
                </div>
                <div className="w-full bg-transparent">
                    <AktualnosciNew />
                </div>
                <div className="w-full bg-transparent">
                    <Shields />
                </div>
            </div>
        </div>
    );
}
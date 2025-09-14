import Banner from "./banner.jsx";
import RekrutacjaHome from "./RekrutacjaHome.jsx";
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
import Ticker from "framer-motion-ticker";
import sgh_logo from "../../assets/coop logo/sgh-logo.png";
import umcs_logo from "../../assets/coop logo/umcs-logo.png";
import agh_logo from "../../assets/coop logo/agh-logo.png";
import kul_logo from "../../assets/coop logo/kul_logo.png";

export default function Slider(){
    const images = [sgh_logo, umcs_logo, agh_logo, kul_logo];
    return <div className="w-full flex flex-col font-medium mt-5 items-center">
        <div className="w-full px-10 flex items-center mb-10 gap-5">
            <div className="w-full h-[1px] bg-white"></div>
            <p className="">Nasze współprace</p>
            <div className="w-full h-[1px] bg-white"></div>
        </div>
        <Ticker duration={15}>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`img-${i}`}
                    className="h-12 w-auto object-cover mx-10"
                />
            ))}
        </Ticker>
    </div>
}
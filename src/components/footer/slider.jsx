import Ticker from "framer-motion-ticker";
import {images as listImages}  from "../../features/strapiImages.jsx";

export default function Slider(){
    const images = ["sgh-logo", "umcs-logo", "kul_logo", "agh-logo"];
    return <div className="w-full flex flex-col font-[poppins] mt-5 items-center">
        <div className="w-full px-10 flex items-center mb-10 gap-5">
            <div className="w-full h-[1px] bg-white"></div>
            <p className="">Nasze współprace</p>
            <div className="w-full h-[1px] bg-white"></div>
        </div>
        <Ticker duration={15}>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src === "sgh-logo" ? listImages[src] : listImages[src+"_thumbnail"]}
                    alt={`img-${i}`}
                    className="h-12 w-max object-cover mx-10 "
                    style={{ maxInlineSize: '100%' }}
                />
            ))}
        </Ticker>
    </div>
}
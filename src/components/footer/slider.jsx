import Ticker from "framer-motion-ticker";
import strapiImages from '../../assets/photos.jsx';

export default function Slider(){
    const images = ["sgh_logo", "umcs_logo", "kul_logo", "agh_logo"];
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
                    src={strapiImages[src]}
                    alt={`img-${i}`}
                    className="h-12 w-max object-cover mx-10 "
                    width={128}
                    height={48}
                />
            ))}
        </Ticker>
    </div>
}
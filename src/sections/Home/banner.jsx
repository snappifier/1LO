import baner1LO from "../../assets/Home/zdj1.jpg";
import strapiImages from '../../assets/photos.jsx';

export default function Banner() {
    return (
        <>
            <div className="relative w-full h-[70vh] md:h-[80vh]">
                <img
                    src={strapiImages["zdj1"]}
                    className="w-full h-full brightness-55 object-cover object-bottom drop-shadow-lg/60"
                    alt="Widok na budynek liceum"
                    fetchPriority="high"
                />

                <p className="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-20 font-[meow_script] text-5xl md:text-9xl text-white text-center">
                    “Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
                </p>
            </div>
        </>
    );
}

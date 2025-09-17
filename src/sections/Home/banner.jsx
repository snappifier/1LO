import {images} from "../../features/strapiImages.jsx";

export default function Banner() {
    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center drop-shadow-lg/60">

            <img
                src={images["zdj1"]}
                fetchPriority="high"
                alt="Widok na budynek liceum"
                className="absolute inset-0 w-full h-full object-cover"
                width={1600}
                height={900}
                style={{ maxInlineSize: '100%' }}
                loading="eager"
                decoding="async"

            />


            <div className="absolute inset-0 bg-black/45" />


            <p className="relative text-white font-[meow_script] text-5xl md:text-9xl text-center">
                "Myślę więc jestem...<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
            </p>
        </div>
    );
}

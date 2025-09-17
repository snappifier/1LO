import {images} from "../../features/strapiImages.jsx";

export default function Banner() {
    console.log(images)
    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center drop-shadow-lg/60">

            <img
                src={images["zdj1"]}
                alt="Widok na budynek liceum"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ maxInlineSize: '100%' }}
                loading="eager"
                decoding="async"
                fetchPriority="high"
            />


            <div className="absolute inset-0 bg-black/45" />


            <p className="relative text-white font-[meow_script] text-5xl md:text-9xl text-center">
                "Myślę więc jestem...<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
            </p>
        </div>
    );
}

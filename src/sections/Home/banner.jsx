import avif800 from "../../assets/Home/zdj1.jpg?format=avif&w=800";
import avif1200 from "../../assets/Home/zdj1.jpg?format=avif&w=1200";
import avif1600 from "../../assets/Home/zdj1.jpg?format=avif&w=1600";
import avif2400 from "../../assets/Home/zdj1.jpg?format=avif&w=2400";

import webp800 from "../../assets/Home/zdj1.jpg?format=webp&w=800";
import webp1200 from "../../assets/Home/zdj1.jpg?format=webp&w=1200";
import webp1600 from "../../assets/Home/zdj1.jpg?format=webp&w=1600";
import webp2400 from "../../assets/Home/zdj1.jpg?format=webp&w=2400";

import fallbackUrl from "../../assets/Home/zdj1.jpg?w=1600";

export default function Banner() {
    const avifSrcset = `${avif800} 800w, ${avif1200} 1200w, ${avif1600} 1600w, ${avif2400} 2400w`;
    const webpSrcset = `${webp800} 800w, ${webp1200} 1200w, ${webp1600} 1600w, ${webp2400} 2400w`;

    return (
        <div className="relative w-full aspect-[16/7] md:aspect-[3/1]">
            <picture>
                <source type="image/avif" srcSet={avifSrcset} sizes="100vw" />
                <source type="image/webp" srcSet={webpSrcset} sizes="100vw" />
                <img
                    src={fallbackUrl}
                    alt="Widok na budynek liceum"
                    width="1600"
                    height="900"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-bottom drop-shadow-lg/60 brightness-55"
                />
            </picture>

            <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 text-center font-[meow_script] text-5xl md:text-9xl text-white">
                “Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
            </p>
        </div>
    );
}

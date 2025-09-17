// import baner1LO from "../../assets/Home/zdj1.jpg";
//
// export default function Banner() {
//     return (
//         <>
//             <div className="relative w-full h-[70vh] md:h-[80vh]">
//                 <img
//                     src={baner1LO}
//                     className="w-full h-full brightness-55 object-cover object-bottom drop-shadow-lg/60"
//                     alt="Widok na budynek liceum"
//                     fetchPriority="high"
//                 />
//                 <p className="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-20 font-[meow_script] text-5xl md:text-9xl text-white text-center">
//                     “Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
//                 </p>
//             </div>
//         </>
//     );
// }

import React from "react";

import avif800 from "../../assets/Home/zdj1.jpg?format=avif&w=800";
import avif1200 from "../../assets/Home/zdj1.jpg?format=avif&w=1200";
import avif1600 from "../../assets/Home/zdj1.jpg?format=avif&w=1600";

import webp800 from "../../assets/Home/zdj1.jpg?format=webp&w=800";
import webp1200 from "../../assets/Home/zdj1.jpg?format=webp&w=1200";
import webp1600 from "../../assets/Home/zdj1.jpg?format=webp&w=1600";

import fallbackUrl from "../../assets/Home/zdj1.jpg?w=1600";

export default function Banner() {
    const avifSrcset = `${avif800} 800w, ${avif1200} 1200w, ${avif1600} 1600w`;
    const webpSrcset = `${webp800} 800w, ${webp1200} 1200w, ${webp1600} 1600w`;

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh]">
            <picture>
                <source type="image/avif" srcSet={avifSrcset} sizes="(max-width: 768px) 800px, 1600px" />
                <source type="image/webp" srcSet={webpSrcset} sizes="(max-width: 768px) 800px, 1600px" />
                <img
                    src={fallbackUrl}
                    alt="Widok na budynek liceum"
                    width="1600"
                    height="900"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"    // <-- tutaj
                    className="w-full h-full brightness-55 object-cover object-bottom drop-shadow-lg/60"
                />
            </picture>

            <p className="w-max h-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-20 font-[meow_script] text-5xl md:text-9xl text-white text-center">
                “Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”
            </p>
        </div>
    );
}

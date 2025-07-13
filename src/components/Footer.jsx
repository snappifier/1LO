import {Component, useRef} from "react";
import {motion, useAnimationFrame} from "motion/react"
import agh_logo from "../assets/agh-logo.png";
import sgh_logo from "../assets/sgh-logo.png";
import umcs_logo from "../assets/umcs-logo.png";

export default function Footer(){
    const images = [
        sgh_logo,
        agh_logo,
        umcs_logo
    ];
    const ref = useRef(null);
    const x = useRef(0);

    useAnimationFrame((time, delta) => {
        if (ref.current) {
            x.current -= (delta / 1000) * 100; // 100px per second
            if (x.current <= -ref.current.offsetWidth / 2) {
                x.current = 0; // reset to start
            }
            ref.current.style.transform = `translateX(${x.current}px)`;
        }
    })

    return <>
        <div className="overflow-hidden w-full h-[50vh]">
            <div ref={ref} className="flex whitespace-nowrap">
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`img-${i}`}
                        className="h-48 w-auto object-cover mx-4"
                    />
                ))}
            </div>
        </div>
    </>
}
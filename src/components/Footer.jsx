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

    return <>
        <div className="text-white pl-6 pt-4 overflow-hidden whitespace-nowrap w-full h-[100vh] bg-[#3077BA]">
            <p className="mb-5">Nasze współprace</p>
            <motion.div
                className="flex"
                animate={{ x: "-122%" }} // tylko %, bez calc
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...images, ...images].map((src, i) => (
                    <><img
                        key={i}
                        src={src}
                        alt={`img-${i}`}
                        className="h-20 w-auto object-cover mx-4"
                    />
                        <div className="border-l-2 border-gray-300 h-10 translate-y-5"></div></>

                ))}
            </motion.div>
            <div className="flex flex-col">
                <h1 className="text-lg mt-5 mb-3">Kontakt</h1>
                <p className="text-md mb-1">+84 639 28 01</p>
                <p className="text-md">sekretariat@1lo.zamosc.pl</p>
            </div>
            <h1 className="text-xl mt-5 mb-3">Menu</h1>
            <div className="flex gap-8">
                <div className="flex flex-col gap-3">
                    <p className="text-md">Deklaracja dostępności strony</p>
                    <p className="text-md">Polityka prywatności</p>
                    <p className="text-md">RODO</p>
                    <p className="text-md">BIP</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-md">Plany lekcji</p>
                    <p className="text-md">E-dziennik</p>
                    <p className="text-md">Stypendia</p>
                    <p className="text-md">Certyfikaty</p>
                </div>
            </div>
            <span></span>
        </div>
    </>
}
import {Component, useRef} from "react";
import {motion, useAnimationFrame} from "motion/react"
import agh_logo from "../assets/agh-logo.png";
import sgh_logo from "../assets/sgh-logo.png";
import umcs_logo from "../assets/umcs-logo.png";
import logo1LO from "../assets/logo.png";

export default function Footer(){
    const images = [
        sgh_logo,
        agh_logo,
        umcs_logo
    ];

    return <>
        <footer className="flex flex-col md:items-center z-40 font-[golos_text] font-regular text-white pl-6 pt-4 overflow-hidden whitespace-nowrap w-full h-full bg-[#3077BA]">
            <div className="flex flex-col items-center font-medium">
                <p className="mb-8">Nasze współprace</p>
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
            </div>
            <div className="w-max ml-3 pt-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-30 md:items-center md:p-10">
                <div className="md:col-start-1 md:row-start-2">
                    <h1 className="text-xl font-medium mt-2 mb-1">Kontakt</h1>
                    <div className="w-9 h-0.5 bg-white mb-3"></div>
                    <div className="flex flex-col">
                        <p className="text-sm mb-1">+84 639 28 01</p>
                        <p className="text-sm">sekretariat@1lo.zamosc.pl</p>
                    </div>
                </div>
                <div className="md:row-span-2 md:col-start-2 md:row-start-1">
                    <h1 className="text-xl font-medium mt-5 mb-1">Menu</h1>
                    <div className="w-9 h-0.5 bg-white mb-3"></div>
                    <div className="flex gap-8 text-sm">
                        <div className="flex flex-col gap-3">
                            <p>Deklaracja dostępności strony</p>
                            <p>Polityka prywatności</p>
                            <p>RODO</p>
                            <p>BIP</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Plany lekcji</p>
                            <p>E-dziennik</p>
                            <p>Stypendia</p>
                            <p>Certyfikaty</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-10 mb-5 items-center">
                    <div className="flex items-center">
                        <motion.img
                            src={logo1LO}
                            className={`drop-shadow-md mr-3 h-12 rounded-full`}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 1}}
                        />
                        <div className="font-medium text-xs">
                            <p>I Liceum Ogólnokształcące</p>
                            <p>im. Jana Zamoyskiego</p>
                        </div>
                    </div>
                    <div className="flex gap-5"></div>
                </div>
            </div>
        </footer>
    </>
}
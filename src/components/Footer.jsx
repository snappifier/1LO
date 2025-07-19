import {useRef, useState, useEffect} from "react";
import {motion} from "motion/react"
import Ticker from 'framer-motion-ticker';
import agh_logo from "../assets/coop logo/agh-logo.png";
import sgh_logo from "../assets/coop logo/sgh-logo.png";
import umcs_logo from "../assets/coop logo/umcs-logo.png";
import logo1LO from "../assets/logo.png";
import kul_logo from "../assets/coop logo/kul_logo.png";
import facebookLogo from "../assets/social/facebook.png";
import instagramLogo from "../assets/social/instagram.png";

export default function Footer(){
    const images = [sgh_logo, umcs_logo, agh_logo, kul_logo];
    return <>
        <footer className="flex flex-col items-center z-40 font-[montserrat] font-regular text-white pt-4 overflow-hidden whitespace-nowrap w-full h-full bg-[#3077BA]">
            {/* Slider współpracy */}
            <div className="w-full flex flex-col font-medium mt-5">
                <p className="mb-12 ml-10 md:ml-80">Nasze współprace</p>
                <Ticker duration={15}>
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`img-${i}`}
                            className="h-12 w-auto object-cover mx-10"
                        />
                    ))}
                </Ticker>
            </div>

            {/* Ułożenie menu footer'a */}
            <div className="w-max h-max flex flex-col gap-15 mb-10 mt-20 md:flex-row md:m-15 md:mt-20 md:gap-30">
                <div className="flex flex-col md:w-100 w-80 order-4 md:order-1">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <motion.img
                                src={logo1LO}
                                className={`drop-shadow-md mr-3 h-16 rounded-full`}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 1}}
                            />
                            <div className="font-medium text-sm">
                                <p>I Liceum Ogólnokształcące</p>
                                <p>im. Jana Zamoyskiego</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex mt-5">
                        <p className="text-sm text-wrap">To prestiżowe liceum o bogatej tradycji, funkcjonujące od 1916 roku w zabytkowym gmachu dawnej Akademii Zamojskiej, założonej pierwotnie w 1594 r. przez Hetmana Jana Zamoyskiego.</p>
                    </div>
                    <div className="w-max h-8 flex gap-2 mt-5">
                        <img src={facebookLogo} />
                        <img src={instagramLogo} />
                    </div>
                </div>
                <div className="flex flex-col order-3 md:order-2">
                    <div className="flex items-center gap-3 text-xl mb-1">
                        <h1 className="font-medium">Kontakt</h1>
                        <div className="w-28 h-0.5 bg-white"></div>
                    </div>
                    <div className="flex flex-col mt-2 text-sm gap-2">
                        <p>+84 639 28 01</p>
                        <p>sekretariat@1lo.zamosc.pl</p>
                    </div>
                </div>
                <div className="flex flex-col text-sm order-2 md:order-3">
                    <h1 className="text-xl font-medium mb-4">Menu</h1>
                    <div className="flex flex-col gap-4">
                        <p>Plany lekcji</p>
                        <p>E-dziennik</p>
                        <p>Stypendia</p>
                        <p>Certyfikaty</p>
                    </div>
                </div>
                <div className="flex flex-col text-sm order-1 md:order-4">
                    <h1 className="text-xl font-medium mb-4">Informacje prawne</h1>
                    <div className="flex flex-col gap-4">
                        <p>Deklaracja dostępności strony</p>
                        <p>Polityka prywatności</p>
                        <p>RODO</p>
                        <p>BIP</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
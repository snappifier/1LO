import {motion} from "motion/react";
import logo from "../../assets/logo.png";
import facebookLogo from "../../assets/social/facebook.png";
import instagramLogo from "../../assets/social/instagram.png";

export default function Menu(){
    return <div className="w-max h-max flex flex-col gap-15 mb-10 pl-10 mt-20 md:flex-row md:m-10 md:mt-20 md:gap-28">
        <div className="flex flex-col md:w-100 w-80 order-4 md:order-1">
            <div className="flex items-center">
                <div className="flex items-center">
                    <motion.img
                        src={logo}
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
                <div className="hidden md:flex w-15 h-0.5 bg-white"></div>
            </div>
            <div className="flex flex-col mt-2 text-sm gap-2">
                <p>+84 639 28 01</p>
                <p>sekretariat@1lo.zamosc.pl</p>
                <p>sekretariat@1lo.zamosc.pl</p>
            </div>
        </div>
        <div className="flex flex-col text-sm order-2 md:order-3">
            <div className="flex items-center gap-3 text-xl mb-1 md:mb-4">
                <h1 className="font-medium">Menu</h1>
                <div className="hidden md:flex w-15 h-0.5 bg-white"></div>
            </div>
            <div className="flex md:flex-col gap-8 md:gap-5">
                <div className="flex flex-col gap-5">
                    <button className="flex">Plany lekcji</button>
                    <button className="flex">E-dziennik</button>
                </div>
                <div className="flex flex-col gap-5">
                    <button className="flex">Stypendia</button>
                    <button className="flex">Certyfikaty</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col text-sm order-1 md:order-4">
            <div className="flex items-center gap-3 text-xl mb-1 md:mb-4">
                <h1 className="font-medium">Informacje prawne</h1>
                <div className="hidden md:flex w-15 h-0.5 bg-white"></div>
            </div>
            <div className="flex md:flex-col gap-8 md:gap-5">
                <div className="flex flex-col gap-5">
                    <button className="flex">Deklaracja dostępności strony</button>
                    <button className="flex">Polityka prywatności</button>
                </div>
                <div className="flex flex-col gap-5">
                    <button className="flex">RODO</button>
                    <button className="flex">BIP</button>
                </div>
            </div>
        </div>
    </div>
}
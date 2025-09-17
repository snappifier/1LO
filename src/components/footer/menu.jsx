import { motion } from "motion/react";
import { Link } from "react-router-dom";
import strapiImages from "../../assets/photos.jsx";

export default function Menu() {
    return (
        <div className="w-max h-max font-[poppins] flex flex-col gap-10 mb-10 pl-10 mt-20 md:flex-row md:m-12 md:mx-8 md:mt-20 md:gap-28">
            <div className="flex flex-col md:w-100 w-80 order-4 md:order-1">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <motion.img
                            src={strapiImages["logo"]}
                            className="drop-shadow-md mr-3 rounded-full h-16 w-16 block aspect-square"
                            width={64}
                            height={64}
                            loading="eager"
                            decoding="async"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1 }}
                            alt="Logo szkoły"
                        />
                        <div className="text-sm text-wrap">
                            <p>I Liceum Ogólnokształcące im. Jana Zamoyskiego</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-5 w-5/6">
                    <p className="text-sm w-full text-wrap">
                        To prestiżowe liceum o bogatej tradycji, funkcjonujące od 1916 roku
                        w zabytkowym gmachu dawnej Akademii Zamojskiej, założonej
                        pierwotnie w 1594 r. przez Hetmana Jana Zamoyskiego.
                    </p>
                </div>
            </div>

            <div className="flex flex-col order-3 md:order-2">
                <div className="flex items-center gap-3 text-xl mb-1">
                    <h1 className="font-medium">Kontakt</h1>
                    <div className="hidden md:flex w-15 h-0.5 bg-white" />
                </div>
                <div className="flex flex-col mt-2 text-sm gap-2">
                    <p>+84 639 28 01</p>
                    <p>sekretariat@1lo.zamosc.pl</p>
                    <p>Akademicka 8, 22-400 Zamość</p>
                </div>
            </div>

            <div className="flex flex-col text-sm order-2 md:order-3">
                <div className="flex items-center gap-3 text-xl mb-4 md:mb-4">
                    <h1 className="font-medium">Menu</h1>
                    <div className="hidden md:flex w-15 h-0.5 bg-white" />
                </div>
                <div className="flex md:flex-col gap-8 md:gap-5">
                    <div className="flex flex-col gap-5">
                        <Link to={"/"}><button className="hover:underline">Plany lekcji</button></Link>
                        <Link to={"/"}><button className="hover:underline">E-dziennik</button></Link>
                        <Link to={"/"}><button className="hover:underline">Nauczyciele</button></Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link to={"/"}><button className="hover:underline">Stypendia</button></Link>
                        <Link to={"/"}><button className="hover:underline">Certyfikaty</button></Link>
                        <Link to={"/"}><button className="hover:underline">Erasmus+</button></Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-sm order-1 md:order-4">
                <div className="flex items-center gap-3 text-xl mb-4 md:mb-4">
                    <h1 className="font-medium">Informacje prawne</h1>
                    <div className="hidden md:flex w-15 h-0.5 bg-white" />
                </div>
                <div className="flex md:flex-col gap-8 md:gap-5">
                    <div className="flex flex-col gap-5">
                        <Link to={"/"}><button className="hover:underline">RODO</button></Link>
                        <Link to={"/ "}><button className="hover:underline">BIP</button></Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link to={"/"}><button className="hover:underline">Deklaracja dostępności strony</button></Link>
                        <Link to={"/"}><button className="hover:underline">Polityka prywatności</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

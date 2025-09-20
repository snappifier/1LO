import { motion } from "motion/react";
import { Link } from "react-router";
import images from "../../features/strapiImages.jsx";

export default function Wstep() {
    // upewnij się, że używasz poprawnego klucza (case-sensitive)
    const zamoyskiSrc = images["2048px-jan_zamoyski_11"] || images["2048px-Jan_Zamoyski_11"];

    return (
        <div className="relative w-full h-max mt-15">
            {/* szary prostokąt (tło) */}
            <div className="absolute left-0 top-0 h-[50%] w-[100%] md:h-[50%] lg:h-[95%] md:w-[100%] lg:w-[58vw] bg-[#F3F3F3] z-10 drop-shadow-md/20" />

            {/* tutaj content; dajemy prawe padding na lg równy szerokości obrazka,
          aby tekst nie wchodził pod obraz */}
            <div className="relative z-30 font-[poppins] flex w-full h-max gap-5 py-15 md:px-[15vw] px-[10vw] md:gap-15 lg:pr-[20rem]">
                <div className="w-full flex flex-col h-max items-center gap-10">
                    <div className="flex w-full md:gap-4 gap-2 items-center">
                        <div className="w-2 h-14 bg-[#3077BA] rounded-2xl drop-shadow-md/20" />
                        <div className="flex flex-col">
                            <p className="md:text-lg lg:text-xl font-medium">KRÓTKO O SZKOLE</p>
                            <p className="text-lg font-light">Dowiedz się troszkę więcej o nas</p>
                        </div>
                    </div>

                    <div className="w-full h-max flex flex-col gap-5">
                        <p className="w-3/4 font-[meow_script] hidden md:block text-wrap md:text-5xl lg:text-7xl">Jestem w pierwszym</p>

                        <p className="font-[montserrat] font-regular md:w-5/5 lg:w-1/2 w-full text-wrap md:text-lg lg:text-xl">
                            I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. 6 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. </p>

                        <div className="w-full flex justify-start z-0">
                            {/* obrazek mobilny (widoczny tylko na mniejszych ekranach) */}
                            <img
                                className="block lg:hidden w-3/5 h-auto object-contain mr-5 rounded-2xl drop-shadow-xl/30"
                                src={zamoyskiSrc}
                                alt="Zamoyski"
                            />
                        </div>

                        <div className="flex w-full  justify-start lg:justify-start">
                            <Link to="/o-szkole">
                                <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center items-center w-50 h-14 bg-[#3077BA] rounded-xl drop-shadow-md/20">
                                    <p className="font-normal text-white select-none cursor-pointer">Dowiedz się więcej</p>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* obrazek desktopowy: absolutnie, lewy brzeg obrazka na 58% szerokości -> przy rogu szarego */}
            <img
                src={zamoyskiSrc}
                alt="Zamoyski"
                className="
          hidden lg:block
          absolute
          top-1/2
          lg:left-[58%]    /* lewy brzeg obrazka przy prawym brzegu szarego pola */
          -translate-y-1/3
          -translate-x-1/8
          w-[22rem]        /* szerokość obrazka na desktop; dostosuj jeśli chcesz inny rozmiar */
          max-h-[70vh]     /* nie za wysoki */
          h-auto
          object-contain
          rounded-2xl
          drop-shadow-xl/20
          z-20
        "
            />
        </div>
    );
}

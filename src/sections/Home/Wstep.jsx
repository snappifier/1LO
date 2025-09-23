import { motion } from "motion/react";
import { Link } from "react-router";
import images from "../../features/strapiImages.jsx";

export default function Wstep() {
    // upewnij się, że używasz poprawnego klucza (case-sensitive)
    const zamoyskiSrc = images["2048px-jan_zamoyski_11"] || images["2048px-Jan_Zamoyski_11"];

    return (
        <div className="flex relative w-full h-120 mt-2 justify-center">
            <div className="absolute w-2/3 h-full bg-white left-0 rounded-r-2xl drop-shadow-lg/20"></div>
            <div className="relative flex w-[80%] h-full gap-20">
                <div className="flex flex-col w-[50%] justify-center gap-5 pb-5">
                    <div className="flex flex-col w-max">
                        <p className="md:text-lg lg:text-xl font-BOLD">KRÓTKO O SZKOLE</p>
                        <p className="text-lg font-light">Dowiedz się troszkę więcej o nas</p>
                    </div>
                    <div className="w-full h-max flex flex-col gap-5">
                        <p className="w-max font-[meow_script] hidden md:block text-wrap md:text-5xl lg:text-7xl">Jestem w pierwszym</p>

                        <p className="font-[montserrat] font-regular w-full text-wrap md:text-lg lg:text-xl">
                            I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. 6 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. </p>
                    </div>
                </div>
                <div className="relative flex h-full translate-y-20">
                    <img
                        src={zamoyskiSrc}
                        alt="Zamoyski"
                        className="h-full w-max rounded-2xl drop-shadow-lg/20"/>
                </div>
            </div>
        </div>

    );
}

// <div className="relative flex w-[80%]">
//     <div className="relative z-30 font-[poppins] flex w-max h-max lg:pr-[20rem] border-2">
//         <div className="flex flex-col h-max gap-10">
//             <div className="flex w-max md:gap-4 gap-2 items-center">
//                 <div className="flex flex-col">
//                     <p className="md:text-lg lg:text-xl font-medium">KRÓTKO O SZKOLE</p>
//                     <p className="text-lg font-light">Dowiedz się troszkę więcej o nas</p>
//                 </div>
//             </div>
//
//             <div className="w-full h-max flex flex-col gap-5">
//                 <p className="w-max font-[meow_script] hidden md:block text-wrap md:text-5xl lg:text-7xl">Jestem w pierwszym</p>
//
//                 <p className="font-[montserrat] font-regular w-full text-wrap md:text-lg lg:text-xl">
//                     I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. 6 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. </p>
//             </div>
//         </div>
//     </div>
// </div>
// <img
//     src={zamoyskiSrc}
//     alt="Zamoyski"
//     className="
//           hidden lg:block
//           w-[22rem]        /* szerokość obrazka na desktop; dostosuj jeśli chcesz inny rozmiar */
//           max-h-[70vh]     /* nie za wysoki */
//           h-auto
//           object-contain
//           rounded-2xl
//           drop-shadow-xl/20
//           z-20
//         "
// />
// </div>

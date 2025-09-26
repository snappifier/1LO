import images from "../../features/strapiImages.jsx";
import {useInViewOnce} from "./AktualnosciNew.jsx";

export default function Wstep() {
    const zamoyskiSrc = images["2048px-jan_zamoyski_11"] || images["2048px-Jan_Zamoyski_11"];
    const { ref, inView } = useInViewOnce();



    return (
        <div className="font-[poppins] flex relative w-full h-max md:h-135 lg:h-122 mt-5 justify-center">
            <div className="flex flex-col md:flex-row w-[94%] sm:w-[90%] lg:w-[80%] h-full justify-between bg-white rounded-2xl drop-shadow-xl/20">
                <div className="flex flex-col w-full md:w-[60%] lg:w-[55%] gap-10 px-10 py-8">
                    <div className="flex flex-col w-max">
                        <p className="md:text-lg lg:text-xl font-normal text-slate-900">KRÓTKO O SZKOLE</p>
                        <p className="text-lg font-extralight text-slate-800">Dowiedz się troszkę więcej o nas</p>
                    </div>
                    <div className="w-full h-max flex flex-col gap-8">
                        <p className="w-max font-[meow_script] block text-wrap text-5xl md:text-5xl lg:text-5xl xl:text-6xl">Jestem w pierwszym</p>

                        <p className="font-light w-full text-wrap text-lg md:text-lg lg:text-lg xl:text-xl">
                            I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. 6 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. </p>
                    </div>
                </div>
                <div className="px-8 pb-8 md:p-6 flex w-auto object-contain items-center">
                    <img
                        src={zamoyskiSrc}
                        alt="Zamoyski"
                        className="w-1/2 md:w-auto max-h-full md:h-max rounded-2xl drop-shadow-lg/20"/>
                </div>
            </div>
        </div>

    );
}
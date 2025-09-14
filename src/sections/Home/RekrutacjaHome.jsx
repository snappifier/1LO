import rekrutacjaBaner from "../../assets/Home/baner-rekrutacja.jpg";
import {Link} from "react-router-dom";

export default function RekrutacjaHome() {
    return <div className="font-[montserrat] flex flex-col w-full h-max gap-5 px-[12vw] mt-30 md:gap-10 bg-transparent">
        <div className="w-full flex gap-3 md:gap-10">
            <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold w-max">REKRUTACJA 2025/2026</p>
                <p className="text-md w-max">Dołącz do naszej szkoły już dziś!</p>
            </div>
            <div className="flex mt-3 w-full h-0.5 rounded-md bg-black"></div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row md:gap-15 lg:justify-center">
            <img className="w-full shadow-lg/20 md:w-3/4 lg:w-1/2"  src={rekrutacjaBaner} />
            <div className="w-full md:w-4/5 h-max flex flex-col gap-5 lg:gap-10 justify-center pb-10">
                <p className="w-max font-[meow_script] hidden md:block md:text-5xl lg:text-6xl">Jestem w pierwszym</p>
                <p className="font-[montserrat] font-medium w-full text-wrap md:text-xl lg:text-xl">Serdecznie zapraszamy wszystkich absolwentów szkół podstawowych do dołączenia do naszej wyjątkowej społeczności!</p>
                <p className="font-[montserrat] font-regular w-full text-wrap md:text-xl lg:text-xl ">
                    Jeśli szukasz miejsca, w którym będziesz mógł rozwijać swoje pasje, zdobywać wiedzę i nawiązywać wartościowe relacje — nasza szkoła będzie doskonałym wyborem.
                    Rekrutacja do naszej szkoły przebiega w wygodnej, elektronicznej formie.
                    Wystarczy, że wypełnisz podanie online i załączysz wymagane dokumenty za pośrednictwem systemu rekrutacyjnego PCSS. Cały proces jest prosty i intuicyjny, a w razie pytań służymy pomocą.
                </p>
                <p className="font-[montserrat] font-medium md:text-xl lg:text-xl text-wrap">Nie czekaj — dołącz do nas i zacznij nowy rozdział swojej edukacyjnej przygody!</p>
                <Link to={"/rekrutacja"} ><button className="mt-5 px-10 py-4 w-max h-max bg-[#3077BA] font-medium text-white cursor-pointer hover:bg-[#4034BA] rounded-md shadow-md/20">Dowiedz sie wiecej</button></Link>
            </div>
        </div>
    </div>
}
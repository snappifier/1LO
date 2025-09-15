import Zamoyski_jpg from "../../assets/Home/zamoyski.jpg"
import {Link} from "react-router-dom";

export default function Wstep() {
    return <div className="font-[poppins] flex w-full h-max gap-5 px-[15vw] mt-30 md:gap-20">
        <div className="w-5 h-110 bg-[#3077BA] rounded-2xl drop-shadow-md/20"></div>
        <div className="flex flex-col w-full h-max">
            <p className="text-xl font-medium">KRÓTKO O SZKOLE </p>
            <div className="w-full flex h-max items-center gap-2">
                <div className="w-full h-max flex flex-col gap-8">
                    <p className="w-max font-[meow_script] hidden md:block md:text-5xl lg:text-7xl">Jestem w pierwszym</p>
                    <p className="font-[montserrat] font-regular w-4/5 text-wrap md:text-xl lg:text-xl ">
                        I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej.
                    </p>
                </div>
                <img className="w-auto mr-5" src={Zamoyski_jpg} alt="Zamoyski" />
            </div>
            <div className="flex justify-center items-center w-50 h-14 bg-[#3077BA] rounded-xl drop-shadow-md/20">
                <p className="font-normal text-white">Dowiedz się więcej</p>
            </div>
        </div>
    </div>
}

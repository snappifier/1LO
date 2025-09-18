import images from "../../features/strapiImages.jsx";

export default function Wstep() {
    return <div className="relative w-full h-max mt-15">
        <div className="absolute h-[100%] w-[58%] bg-[#F3F3F3] z-10 drop-shadow-md/20"></div>
        <div className="relative z-20 font-[poppins] flex flex-col w-full h-max gap-5 py-15 md:px-[15vw] px-[10vw] md:gap-15">
            <div className="flex w-full md:gap-4 gap-2 items-center">
                <div className="w-3 h-10 bg-[#3077BA] rounded-2xl drop-shadow-md/20"></div>
                <p className="text-xl font-medium">KRÓTKO O SZKOLE </p>
            </div>
            <div className="w-full flex h-max items-center gap-2">
                <div className="w-full h-max flex flex-col gap-10">
                    <p className="w-max font-[meow_script] hidden md:block md:text-5xl lg:text-7xl">Jestem w pierwszym</p>
                    <p className="font-[montserrat] font-regular md:w-4/5 w-full text-wrap md:text-xl lg:text-xl ">
                        I Liceum Ogólnokształcące im. Jana Zamoyskiego w Zamościu – szkoła ponadpodstawowa, mieszcząca się od 1916 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej. 6 roku w gmachu zabytkowej, zbudowanej w stylu wczesnobarokowym, dawnej Akademii Zamojskiej.
                    </p>
                    <img className="md:hidden w-auto mr-5" src={images["zamoyski"]} alt="Zamoyski" />
                    <div className="flex w-full justify-center md:justify-start">
                        <div className="flex justify-center items-center w-50 h-14 bg-[#3077BA] rounded-xl drop-shadow-md/20">
                            <p className="font-normal text-white">Dowiedz się więcej</p>
                        </div>
                    </div>
                </div>
                <img className="hidden md:block mr-5" src={images["zamoyski"]} alt="Zamoyski" />
            </div>
        </div>
    </div>
}

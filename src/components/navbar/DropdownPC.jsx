export const DropdownPC = () => {
    return (
        <nav className="hidden lg:flex flex-col justify-center items-end gap-2 text-white font-[Montserrat]">
            <div className="flex flex-col items-end text-xs">
                <p>+48 84 639 28 01</p>
                <p>sekretariat@1lo.zamosc.pl</p>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="text-md lg:text-lg font-medium flex justify-between items-center gap-3 lg:gap-10">
                <div>Szkoła></div>
                <div>Uczeń></div>
                <div>Rekrutacja</div>
                <div>Kontakt</div>
            </div>
        </nav>
    )
}
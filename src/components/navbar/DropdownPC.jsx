export const DropdownPC = () => {
    return (
        <nav className="flex flex-col justify-center items-end gap-2 text-white font-[Montserrat] z-70 pr-2">
            <div className="flex flex-col items-end text-xs py-1">
                <p>+48 84 639 28 01</p>
                <p>sekretariat@1lo.zamosc.pl</p>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="text-lg flex justify-between items-center gap-12">
                <div>Szkoła></div>
                <div>Uczeń></div>
                <div>Rekrutacja</div>
                <div>Kontakt</div>
            </div>
        </nav>
    )
}
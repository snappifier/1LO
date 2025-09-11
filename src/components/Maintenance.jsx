import {Link} from "react-router-dom";

export const Maintenance = () => {
    return (<Link to="/" className="fixed top-0 left-0 w-full h-full bg-zinc-900 z-100 flex flex-col items-center justify-center gap-3">
        <p className="text-white text-6xl font-[golos_text]">Maintenance</p>
        <p className="text-white">Kliknij gdziekolwiek aby wrócić</p>
    </Link>)
}
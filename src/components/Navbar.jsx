import {motion} from "motion/react"
import {Link} from "react-router-dom"

export const Navbar = () => {

    return(<>
        {/*<header className="sticky top-0 left-0 z-50 w-full h-30 bg-black/65 backdrop-saturate-300 shadow-md">*/}
        {/*    <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">*/}
        {/*    <Link to={"/"} className="focus-visible:ring-3 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:rounded-[50%]" >*/}
        {/*    <motion.div*/}
        {/*        className="cursor-pointer select-none border-4 border-white rounded-[50%] size-24 shadow-md flex items-center justify-center text-white text-xl"*/}
        {/*        whileHover={{scale: 1.1}}*/}
        {/*        whileTap={{scale: 1}}*/}



        {/*    >Logo*/}
        {/*    </motion.div>*/}
        {/*    </Link>*/}
        {/*    </nav>*/}
        {/*</header>*/}
            <header className="sticky top-0 w-full h-30 bg-gradient-to-b from-black/65  to-black/30 backdrop-saturate-300 shadow-sm shadow-black/30">

            </header>
        </>
    );
}
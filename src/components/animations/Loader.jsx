import {motion} from "motion/react";

export const Loader = () => {
    return (<>
        <motion.div className="fixed w-full h-full z-[2147483647] flex justify-center items-center bg-zinc-900"
        >

            {[1,2,3].map((i) => (
            <motion.div className="absolute size-20 rounded-[50%] bg-[#3077BA]"
                        key={i}
            initial={{scale: 0, opacity: 1}}
                        animate={{scale: 1, opacity: 0}}
                        transition={{duration: 0.7, delay: i*0.22, repeat: Infinity, repeatDelay: 0.1}}
            ></motion.div>
            ))}
        </motion.div>
    </>)
}
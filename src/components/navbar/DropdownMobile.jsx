import {motion} from "motion/react";

const DropdownMobile = () => {

    return (<>


        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.1, ease: "easeOut"}}
            exit={{opacity: 0, transition: {duration: 0.2, delay: 0.05, ease: "easeOut"}}}
            className="relative w-[97%] sm:w-[90%] lg:w-[80%]  h-max bg-[#3077BA] backdrop-blur-xs backdrop-saturate-300 rounded-xl flex flex-col items-center justify-top gap-5 pt-8 shadow-lg pb-15" >

            <motion.div className=" w-[88%] "
            initial={{opacity: 0, y: 20, scale: 0.85}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 20, scale: 0.85, transition: {duration: 0.1, delay: 0.05, ease: "easeOut"}}}
                        transition={{duration: 0.2, ease: "easeOut", delay: -0.05}}
            ><div className="font-[poppins] font-light text-2xl text-white">Menu</div></motion.div>
            { glownaLista.map((item, index) => (
                <motion.div
                key={index}
                initial={{opacity: 0, y: 20, scale: 0.85}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 20, scale: 0.85, transition: {duration: 0.3, delay: index * -0.05, ease: "easeOut"}}}
                transition={{duration: 0.2, ease: "easeOut", delay: index * 0.05}}
                className="flex items-center w-[88%] h-17 bg-white rounded-md font-[poppins] text-2xl font-regular text-slate-900 px-5 gap-5"
                >
                <div>{item.icon}</div>
                <div>{item.title}</div>
                </motion.div>
            ))}
        </motion.div>


        </>)
}


const glownaLista = [
    { title: "Szkoła", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 21v-3a2 2 0 0 0-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11l-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 5v16"/><circle cx="12" cy="9" r="2"/></g></svg>) },
    { title: "Uczeń", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-7-3.8v-6L1 9l11-6l11 6v8h-2v-6.9l-2 1.1v6zm0-8.3L18.85 9L12 5.3L5.15 9zm0 6.025l5-2.7V12.25L12 15l-5-2.75v3.775zm0-3.775"/></svg>) },
    { title: "Aktualności", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11l5 5v11q0 .825-.587 1.413T19 21zm0-2h14V9h-4V5H5zm2-2h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7zM5 5v4zv14z"/></svg>) },
    { title: "Dokumenty", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M5 4v6.025V10v10zv5zm0 18q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h8l6 6v2.5q-.475-.2-.975-.312T17 10.025V9h-5V4H5v16h6.025q.4.6.9 1.113t1.1.887zm11.5-3q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m5.1 4l-2.7-2.7q-.525.35-1.137.525T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.175 1.263T20.3 18.9l2.7 2.7z"/></svg>) },
]

export default DropdownMobile;
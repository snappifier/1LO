import {motion} from "motion/react";
import zamoyski from "../../assets/zdj1.webp";

const Kadra = () => {

    return(<>
        <div className="p-4 pt-40 pb-20">
            <div className="lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto">
                <div className="w-full flex gap-3 md:gap-10 mb-12 bg-transparent">
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                    <p className="text-2xl font-semibold w-max">Kadra</p>
                    <div className="flex mt-3 w-full h-1 rounded-md bg-[#3077BA]"></div>
                </div>

                <div
                    className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center max-sm:max-w-xs mx-auto mt-12">
                    <motion.div className="bg-white drop-shadow-xl rounded-lg overflow-hidden"
                    whileHover={{y: -10}}>
                        <div className="w-full aspect-square ">
                            <img src={zamoyski} alt="profile"
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-4">
                            <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">John Doe</h4>
                            <p className="text-slate-600 text-xs mt-1 font-[poppins]">Software Engineer</p>
                        </div>

                    </motion.div>

                    <motion.div className="bg-white drop-shadow-xl rounded-lg overflow-hidden"
                                whileHover={{y: -10}}>
                        <div className="w-full aspect-square ">
                            <img src={zamoyski} alt="profile"
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-4">
                            <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">John Doe</h4>
                            <p className="text-slate-600 text-xs mt-1 font-[poppins]">Software Engineer</p>
                        </div>

                    </motion.div>

                    <motion.div className="bg-white drop-shadow-xl rounded-lg overflow-hidden"
                                whileHover={{y: -10}}>
                        <div className="w-full aspect-square ">
                            <img src={zamoyski} alt="profile"
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-4">
                            <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">John Doe</h4>
                            <p className="text-slate-600 text-xs mt-1 font-[poppins]">Software Engineer</p>
                        </div>

                    </motion.div>

                    <motion.div className="bg-white drop-shadow-xl rounded-lg overflow-hidden"
                                whileHover={{y: -10}}>
                        <div className="w-full aspect-square ">
                            <img src={zamoyski} alt="profile"
                                 className="w-full h-full object-cover object-top"/>
                        </div>
                        <div className="p-4">
                            <h4 className="text-slate-900 text-[15px] font-[poppins] font-medium">John Doe</h4>
                            <p className="text-slate-600 text-xs mt-1 font-[poppins]">Software Engineer</p>
                        </div>

                    </motion.div>



                </div>
            </div>
        </div>

    </>)
}

export default Kadra;
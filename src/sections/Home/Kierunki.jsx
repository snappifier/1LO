import { motion } from "motion/react";

const KIERUNKI = [
    { t: "matematyczno-fizyczny", k: "Profil", d: "Rozszerzona matematyka i fizyka, przygotowanie pod kierunki techniczne." },
    { t: "biologiczno-chemiczny", k: "Profil", d: "Biologia i chemia dla przyszłych medyków i nauk przyrodniczych." },
    { t: "humanistyczny",        k: "Profil", d: "Język polski i historia z akcentem na kulturę i media." },
    { t: "informatyczny",        k: "Profil", d: "Algorytmika, programowanie i nowoczesne technologie." },
    { t: "językowy",             k: "Profil", d: "Języki obce, konwersacje, zajęcia z native speakerami." },
    { t: "geograficzno-mat.",    k: "Profil", d: "Geografia z matematyką dla kierunków ekonomicznych i geoinf." },
    { t: "artystyczny",          k: "Profil", d: "Sztuki wizualne, projektowanie i historia sztuki." },
];

// Kolory tylko NA HOVERZE + kolor ikony
const PALETTE = [
    { tint: "rgba(125,211,252,0.18)", icon: "#38bdf8" },  // sky
    { tint: "rgba(110,231,183,0.18)", icon: "#10b981" },  // emerald
    { tint: "rgba(253,164,175,0.20)", icon: "#f43f5e" },  // rose
    { tint: "rgba(165,180,252,0.20)", icon: "#6366f1" },  // indigo
    { tint: "rgba(196,181,253,0.20)", icon: "#8b5cf6" },  // violet
    { tint: "rgba(251,191,36,0.20)",  icon: "#f59e0b" },  // amber
    { tint: "rgba(240,171,252,0.20)", icon: "#d946ef" },  // fuchsia
];

const easeSoft = [0.22, 1, 0.36, 1];

const Kierunki = () => {
    return (
        <div className="font-[poppins] w-full h-max flex justify-center items-center mt-20">
            <div className="h-max w-[94%] sm:w-[90%] lg:w-[80%] flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Nasze profile</h2>

                {/* 1 kol (mobile) → 2 kol (md) → 3 kol (xl); niższe rzędy (bardziej kompaktowo) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 auto-rows-[11rem] sm:auto-rows-[12.5rem] lg:auto-rows-[14rem]">
                    {KIERUNKI.map((item, i) => {
                        const { tint, icon } = PALETTE[i % PALETTE.length];

                        return (
                            <motion.div
                                key={i}
                                initial="rest"
                                animate="rest"          // pre-mount do stanu spoczynku (rozgrzewka warstwy)
                                whileHover="hover"
                                className="relative w-full h-full flex flex-col rounded-xl bg-white border border-slate-200 overflow-hidden"
                                style={{ transform: "translateZ(0)" }} // promotuj do kompozycji (gładszy pierwszy hover)
                            >
                                <div className="relative w-full h-full flex flex-col">
                                    {/* Pasek nagłówkowy */}
                                    <div className="relative z-0 w-full h-1/2 flex justify-between">
                                        <div className="w-max h-max flex p-3">
                      <span className="inline-flex items-center rounded-full bg-slate-900/5 border border-slate-200 px-2.5 py-0.5 text-[11px] sm:text-xs font-medium text-slate-700">
                        {item.k}
                      </span>
                                        </div>
                                        <div className="w-max h-full -translate-x-3 sm:-translate-x-4 translate-y-3 sm:translate-y-4 opacity-80">
                                            {/* Kolorowa ikonka */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full" viewBox="0 0 24 24" aria-hidden>
                                                <g fill="none" stroke={icon} strokeWidth={1.4}>
                                                    <path strokeLinecap="round" d="M12 5.793a28 28 0 0 1 3.342 2.865A28 28 0 0 1 18.207 12M12 5.793a28 28 0 0 0-3.342 2.865A28 28 0 0 0 5.793 12M12 5.793c3.57-2.584 6.947-3.554 8.354-2.147S20.791 8.43 18.207 12m0 0c2.584 3.57 3.554 6.947 2.147 8.354c-1.043 1.043-3.17.78-5.654-.48M18.207 12a28 28 0 0 1-2.865 3.342A28 28 0 0 1 12 18.207m0 0a28 28 0 0 1-3.342-2.865A28 28 0 0 1 5.793 12M12 18.207c-3.57 2.584-6.947 3.554-8.354 2.147S3.209 15.57 5.793 12m0 0C3.21 8.43 2.24 5.053 3.646 3.646c1.043-1.043 3.17-.78 5.654.48" />
                                                    <circle cx={12} cy={12} r={2} />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Overlay – biały w spoczynku, kolor TYLKO na hover; gładkie wejście */}
                                    <motion.div
                                        variants={{
                                            rest: {
                                                height: "42%",
                                                backgroundColor: "rgba(0,0,0,0)",
                                                backdropFilter: "blur(0px)",
                                                WebkitBackdropFilter: "blur(0px)",
                                            },
                                            hover: {
                                                height: "100%",
                                                backgroundColor: tint,
                                                backdropFilter: "blur(4px)",
                                                WebkitBackdropFilter: "blur(4px)",
                                            },
                                        }}
                                        transition={{
                                            height: { duration: 0.48, ease: easeSoft },
                                            backgroundColor: { duration: 0.42, ease: easeSoft },
                                            default: { duration: 0.45, ease: easeSoft },
                                        }}
                                        className="pointer-events-none absolute inset-x-0 bottom-0 z-[100] flex flex-col justify-end p-3 sm:p-4 rounded-t-xl"
                                        style={{ willChange: "height, background-color, backdrop-filter" }}
                                        aria-hidden="true"
                                    >
                                        <motion.p
                                            variants={{ rest: { color: "#475569", opacity: 0.95 }, hover: { color: "#0f172a", opacity: 1 } }}
                                            transition={{ duration: 0.35, ease: easeSoft }}
                                            className="w-max text-base sm:text-lg font-normal"
                                        >
                                            {item.k}
                                        </motion.p>

                                        <motion.p
                                            variants={{ rest: { color: "#334155", opacity: 0.97 }, hover: { color: "#0f172a", opacity: 1 } }}
                                            transition={{ duration: 0.38, ease: easeSoft }}
                                            className="w-full text-balance text-lg sm:text-xl font-semibold"
                                        >
                                            {item.t}
                                        </motion.p>

                                        <motion.p
                                            variants={{
                                                rest: { opacity: 0, height: 0, marginTop: 0, transitionEnd: { display: "none" } },
                                                hover: { display: "block", opacity: 1, height: "auto", marginTop: 6 },
                                            }}
                                            transition={{ duration: 0.4, ease: easeSoft, delay: 0.03 }}
                                            className="overflow-hidden w-full text-balance text-[13px] sm:text-sm font-medium text-slate-700 line-clamp-3"
                                        >
                                            {item.d}
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Kierunki;

import { motion, AnimatePresence } from "motion/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get, getStrapiMedia } from "../../features/fetcher.jsx";
import { images } from "../../features/strapiImages.jsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { Post } from "../../components/Post.jsx";

export function useInViewOnce(options = { root: null, rootMargin: "0px", threshold: 0.09 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current || inView) return; // nie obserwuj ponownie, gdy już raz weszło
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                obs.disconnect();
            }
        }, options);
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [inView, options]);

    return { ref, inView };
}

export function Reveal({ delay = 0, className="", children }) {
    const { ref, inView } = useInViewOnce();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}

const clampText = (txt, n = 215) =>
    typeof txt === "string" && txt.length > n ? txt.substring(0, n) + "…" : txt;

const formatPLDate = (d) => new Date(d).toLocaleDateString("pl-PL");

const Arrow = ({ animated = false }) => (
    <motion.svg
        viewBox="0 0 24 24"
        className="size-4"
        initial={false}
        animate={animated ? { x: 0 } : undefined}
        whileHover={animated ? { x: 3 } : undefined}
        transition={animated ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
    >
        <path d="M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 12H4" fill="none" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
);

function NewsCard({ news, onClick, featured = false }) {
    const imgSrc = news?.["ZdjecieProfile"]
        ? getStrapiMedia(news["ZdjecieProfile"].url)
        : images["zamoyski"];

    return (
        <motion.button
            type="button"
            onClick={() => onClick(news)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick(news);
                }
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.985 }}
            className="
        group relative w-full h-full text-left cursor-pointer
        rounded-xl overflow-hidden bg-white
        ring-1 ring-slate-200
        shadow-[0_2px_10px_-3px_rgba(14,14,14,0.25)]
        transition-shadow
        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60
        motion-safe:hover:shadow-[0_14px_30px_-10px_rgba(14,14,14,0.35)]
      "
            aria-label={news['Tytul']}
        >
      <span
          aria-hidden
          className="
          pointer-events-none absolute inset-0 opacity-0
          bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(56,189,248,0.18),transparent)]
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

            {featured ? (
                <div className="w-full h-full flex flex-col gap-3 px-5 py-4">
                    <div className="w-full flex md:justify-end">
            <span className="w-max inline-flex items-center rounded-md bg-red-500/15 px-3 py-1.5 text-xs font-medium text-red-500">
              Najnowszy post
            </span>
                    </div>

                    <div className="w-full h-full flex justify-center overflow-hidden rounded-lg">
                        <img
                            src={imgSrc}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="md:block hidden w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 px-1 pb-2">
                        <div className="flex flex-col gap-1">
              <span className="text-xs font-light block text-slate-600">
                {formatPLDate(news['Data'])} • {news['Autor']}
              </span>
                            <p className="font-semibold text-lg text-slate-900">{news['Tytul']}</p>
                        </div>

                        <div className="text-sm w-full h-full font-light flex flex-col justify-between gap-2 text-slate-700">
                            <p className="line-clamp-3">{clampText(news['Opis'], 215)}</p>
                            <div className="inline-flex items-center gap-2 text-sm text-sky-700">
                                Czytaj dalej
                                <Arrow animated />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full bg-white flex flex-col px-5 py-4 gap-2">
                    <div className="flex flex-col gap-1">
            <span className="text-xs font-light block text-slate-600">
              {formatPLDate(news['Data'])} • {news['Autor']}
            </span>
                        <p className="font-medium text-lg text-slate-900">{news['Tytul']}</p>
                    </div>

                    <div className="text-sm w-full h-full font-light flex flex-col justify-between gap-2 text-slate-700">
                        <p className="line-clamp-3">{clampText(news['Opis'], 215)}</p>
                        <div className="inline-flex items-center gap-2 text-sm text-sky-700">
                            Czytaj dalej
                            <Arrow animated />
                        </div>
                    </div>
                </div>
            )}
        </motion.button>
    );
}

export const AktualnosciNew = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape" && selectedPost !== null) {
                setSelectedPost(null);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [selectedPost]);

    const { data } = useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: () => get("posts?populate=*&pagination[pageSize]=5&sort[0]=Data:desc"),
    });
    const posts = data?.data || [];

    const handleClick = (news) => setSelectedPost(news);
    const closeModal = () => setSelectedPost(null);

    // GRID: 1 kol (xs) → 2 kol (sm) → 3 kol (lg); featured: sm full width, lg wysoki
    const cellClass = useMemo(() => {
        return (i) => {
            if (i === 0) return "sm:col-span-2 lg:col-span-1 lg:row-span-2";
            return "";
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {selectedPost !== null && (
                    <Post key={selectedPost.id} state={selectedPost} onClose={closeModal} />
                )}
            </AnimatePresence>

            <div className="relative flex justify-center w-full h-max">
                <div
                    className="
                    relative z-20 font-[poppins] flex w-[94%] sm:w-[90%] lg:w-[80%] h-max px-8 pb-6 pt-8
                    bg-white rounded-2xl
                    ring-1 ring-slate-200
                    drop-shadow-xl/20
                ">
                    <div className="flex flex-col gap-4 items-start w-full h-max">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-start">
                                <p className="text-xl font-normal text-slate-900">AKTUALNOŚCI</p>
                                <p className="text-lg font-extralight text-slate-700">Bądź na bieżąco</p>
                            </div>
                        </div>

                        <div className="w-full h-auto flex items-stretch">
                            <div className="
                                  w-full grid gap-4 max-w-7xl
                                  grid-cols-1
                                  sm:grid-cols-2
                                  lg:grid-cols-3
                                  auto-rows-auto
                                  lg:auto-rows-[16rem]">
                                {posts.map((news, index) => {
                                    const delay = 0.05 + index * 0.08;

                                    return (
                                        <Reveal
                                            key={news.id}
                                            delay={delay}
                                            className={`
                                            ${cellClass(index)}
                                            bg-white border-1 border-slate-300 rounded-xl overflow-hidden
                                            ${index === 0 ? "md:min-h-[32rem]" : ""}
                                        `}>
                                            <NewsCard news={news} onClick={handleClick} featured={index === 0} />
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

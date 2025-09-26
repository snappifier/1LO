import { AnimatePresence, motion } from "motion/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get, getStrapiMedia } from "../../features/fetcher.jsx";
import images from "../../features/strapiImages.jsx";
import { Post } from "../../components/Post.jsx";
import { useState, useMemo } from "react";

const Arrow = ({ animated = false }) => (
    <motion.svg
        viewBox="0 0 24 24"
        className="size-4"
        initial={false}
        animate={animated ? { x: 0 } : undefined}
        whileHover={animated ? { x: 3 } : undefined}
        transition={
            animated ? { type: "spring", stiffness: 300, damping: 20 } : undefined
        }
        aria-hidden="true"
    >
        <path d="M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 12H4" fill="none" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
);

const formatPLDate = (d) => {
    const date = d ? new Date(d) : null;
    return date && !Number.isNaN(date.valueOf())
        ? date.toLocaleDateString("pl-PL")
        : "";
};

const clampText = (txt, n = 215) =>
    typeof txt === "string" && txt.length > n ? `${txt.substring(0, n)}…` : txt || "";

const normalize = (raw) => {
    const a = raw?.attributes ?? raw ?? {};
    const id = raw?.id ?? a?.id;
    const title = a?.["Tytul"] || a?.title || "";
    const desc = a?.["Opis"] || a?.description || "";
    const date = a?.["Data"] || a?.date || null;
    const author = a?.["Autor"] || a?.author || "";
    const img = a?.["ZdjecieProfile"] || a?.image || null;
    const imgUrl = img?.url ? getStrapiMedia(img.url) : images["zamoyski"];
    return { id, title, desc, date, author, imgUrl };
};

const Card = ({ item, onOpen }) => {
    const { id, title, desc, date, author, imgUrl } = useMemo(() => normalize(item), [item]);

    return (
        <motion.button
            key={id}
            type="button"
            onClick={() => onOpen(item)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpen(item);
                }
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.985 }}
            className="group relative w-full h-full text-left cursor-pointer rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-[0_2px_10px_-3px_rgba(14,14,14,0.25)] transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 motion-safe:hover:shadow-[0_14px_30px_-10px_rgba(14,14,14,0.35)]"
            aria-label={title}
        >
      <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(56,189,248,0.18),transparent)] transition-opacity duration-300 group-hover:opacity-100"
      />

            <div className="w-full h-full flex flex-col gap-3 px-5 py-4">

                <div className="w-full overflow-hidden rounded-lg">
                    <div className="relative w-full aspect-[16/9]">
                        <img
                            src={imgUrl}
                            alt={title || "Post image"}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>


                <div className="w-full h-full flex flex-col gap-2 px-1 pb-2">
                    <div className="flex flex-col gap-1">
            <span className="text-xs font-light block text-slate-600">
              {formatPLDate(date)}{author ? ` • ${author}` : ""}
            </span>
                        <p className="font-semibold text-lg text-slate-900 line-clamp-2" title={title}>
                            {title}
                        </p>
                    </div>

                    <div className="text-sm w-full h-full font-light flex flex-col justify-between gap-2 text-slate-700">
                        <p className="line-clamp-3">{clampText(desc, 215)}</p>
                        <div className="inline-flex items-center gap-2 text-sm text-sky-700">
                            Czytaj dalej <Arrow animated />
                        </div>
                    </div>
                </div>
            </div>
        </motion.button>
    );
};

const Aktualnosci = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const { data } = useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: () => get("posts?populate=*&sort[0]=Data:desc"),
    });

    const posts = data?.data || [];

    const handleOpen = (news) => setSelectedPost(news);
    const handleClose = () => setSelectedPost(null);

    return (
        <>
            <AnimatePresence>{selectedPost && <Post key={selectedPost.id} state={selectedPost} onClose={handleClose} />}</AnimatePresence>

            <div className="w-full pt-36 md:pt-40 pb-16 md:pb-20 flex flex-col items-center">
                <div className="w-[92%] sm:w-[90%] lg:w-[80%] grid grid-cols-1 gap-6 md:gap-8">
                    <main>
                        <div className="w-full flex flex-col mb-4 sm:mb-6">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-extralight w-max">Aktualności</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {posts.map((news, index) => (
                                <Card key={news?.id ?? index} item={news} onOpen={handleOpen} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Aktualnosci;

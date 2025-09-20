import { get } from "../features/fetcher.jsx";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useScrollBlock } from "../features/useScrollBlock.jsx";
import { useQuery } from "@tanstack/react-query";

export function Search({ onClose }) {
    const stopPropagation = (e) => e.stopPropagation();
    useScrollBlock();

    const [value, setValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    // Debounce input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);
        return () => clearTimeout(handler);
    }, [value]);

    const { data, isFetching } = useQuery({
        queryKey: ["posts", debouncedValue],
        queryFn: () =>
            get(
                `posts?filters[Tytul][$startsWithi]=${encodeURIComponent(
                    debouncedValue
                )}`
            ),
        enabled: debouncedValue.length >= 3,
    });

    const searchResults = debouncedValue.length >= 3 ? (data?.data || []) : [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="w-screen h-screen overflow-hidden fixed inset-0 z-[1000] flex justify-center items-center bg-black/70
        [background-image:radial-gradient(transparent_1px,#000_1px)]
        [background-size:4px_4px]
        backdrop-blur-[10px]
        backdrop-brightness-100"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={stopPropagation}
                className="relative flex flex-col lg:max-w-[50vw] md:min-w-[60vw] max-h-[80vh] drop-shadow-2xl -translate-y-30 py-2 rounded-xl bg-white"
            >
                {/* Searchbar */}
                <div className="flex w-full h-15 items-center gap-2 mx-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none" stroke="black">
                            <path d="M21 21l-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </g>
                    </svg>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Szukaj"
                        className="w-full text-xl p-2 outline-none border-none focus:ring-0 focus:border-none"
                    />
                </div>
                <AnimatePresence>
                    {value.length > 1 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden flex h-10 flex-col w-full"
                        >
                            <div className="overflow-y-auto mt-2 border-t" style={{ maxHeight: "50vh" }}>
                                <AnimatePresence>
                                    {searchResults.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeOut",
                                                delay: index * 0.05,
                                            }}
                                            className="w-full px-4 py-4 hover:bg-gray-50 cursor-pointer"
                                        >
                                            <p>{item.attributes?.Tytul || item.Tytul}</p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
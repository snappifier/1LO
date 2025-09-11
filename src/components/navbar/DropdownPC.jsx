import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AccordionSection } from "./AccordionSection.jsx";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const DropdownPC = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [activeNested, setActiveNested] = useState(null);
    const closeTimeoutRef = useRef(null);
    const closeDelay = 250;

    useEffect(() => {
        if (!openMenu) setActiveNested(null);
    }, [openMenu]);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    const handleNestedToggle = (value) => {
        setActiveNested((prev) => (prev === value ? null : value));
    };

    const szkolaSections = [
        {
            title: "Informacje ogólne",
            links: [
                { name: "O szkole", path: "/o-szkole" },
                { name: "Historia szkoły", path: "/historia-szkoly" },
                { name: "Patron", path: "/patron" },
                { name: "Hymn", path: "/hymn" },
                { name: "Osiągnięcia", path: "/osiagniecia" },
                { name: "Akademia Zamojska", path: "/akademia-zamojska" },
                { name: "Kalendarium", path: "/kalendarium" },
                { name: "Lokalizacja", path: "/lokalizacja" },
            ],
        },
        {
            title: "Społeczność szkolna",
            links: [
                { name: "Dyrekcja", path: "/dyrekcja" },
                { name: "Nauczyciele", path: "/nauczyciele" },
                { name: "Rada Rodziców", path: "/rada-rodzicow" },
                { name: "Laureaci", path: "/laureaci" },
            ],
        },
        {
            title: "Dokumenty i organizacja",
            links: [
                { name: "Statut", path: "/statut" },
                { name: "Program wychowawczo-profilaktyczny", path: "/program-wychowawczo-profilaktyczny" },
                { name: "RODO", path: "/rodo" },
                { name: "Deklaracja dostępności", path: "/deklaracja-dostepnosci" },
                { name: "Standardy ochrony małoletnich", path: "/standardy-ochrony-maloletnich" },
                { name: "Procedury w I LO", path: "/procedury" },
            ],
        },
    ];

    const uczenSections = [
        {
            title: "Nauka i organizacja",
            links: [
                { name: "Klasy", path: "/klasy" },
                { name: "Plan lekcji", path: "/plan-lekcji" },
                { name: "Harmonogram dostępności nauczycieli", path: "/harmonogram-nauczycieli" },
                { name: "Dzwonki", path: "/dzwonki" },
                { name: "Podręczniki 2024/2025", path: "/podreczniki" },
                { name: "Biblioteka", path: "/biblioteka" },
                { name: "Zajęcia pozalekcyjne", path: "/zajecia-pozalekcyjne" },
                { name: "Stypendia", path: "/stypendia" },
            ],
        },
        {
            title: "Certyfikaty i osiągnięcia",
            links: [{ name: "Certyfikaty", path: "/certyfikaty" }],
        },
        {
            title: "Działalność i rozwój",
            links: [
                { name: "Erasmus+", path: "/erasmus" },
                { name: "Wymiana z Freiburgiem", path: "/wymiana-freiburg" },
            ],
        },
    ];

    const menuItems = [
        { title: "Szkoła", key: "szkola", sections: szkolaSections },
        { title: "Uczeń", key: "uczen", sections: uczenSections },
        { title: "RekrutacjaHome", key: "rekrutacja", path: "/rekrutacja" },
        { title: "Kontakt", key: "kontakt", path: "/kontakt" },
    ];

    const handleEnter = (key) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setOpenMenu(key);
    };

    const handleLeave = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
            closeTimeoutRef.current = null;
        }, closeDelay);
    };

    return (
        <nav className="text-white font-[Montserrat] z-[70]">
            {/*/!* tło – sięga od miejsca startu aż po prawą krawędź *!/*/}
            {/*<div className="absolute top-1/4 right-0 w-165 h-20 bg-[#3077BA] rounded-l-3xl" />*/}

            {/* zawartość */}
            <div className="relative flex justify-end items-center gap-15 px-6 py-3 text-lg w-full z-[100] ">
                {menuItems.map((item) => {
                    const isDropdown = !!item.sections;
                    const isOpen = openMenu === item.key;

                    return (
                        <div
                            key={item.key}
                            className="relative group"
                            onMouseEnter={isDropdown ? () => handleEnter(item.key) : undefined}
                            onMouseLeave={isDropdown ? handleLeave : undefined}
                        >
                            {isDropdown ? (
                                <button
                                    aria-expanded={isOpen}
                                    aria-controls={isOpen ? `${item.key}-dropdown` : undefined}
                                    className="flex items-center gap-1 hover:underline focus:outline-none"
                                >
                                    <span>{item.title}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "group-hover:rotate-90"}`}
                                        aria-hidden
                                    />
                                </button>
                            ) : (
                                <Link to={item.path} className="hover:underline">
                                    {item.title}
                                </Link>
                            )}

                            <AnimatePresence>
                                {isDropdown && isOpen && (
                                    <motion.div
                                        id={`${item.key}-dropdown`}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#3077BA] rounded-xl shadow-lg p-3 text-sm w-80 z-[120]"
                                    >
                                        <div className="flex flex-col">
                                            {item.sections.map((section, idx) => (
                                                <AccordionSection
                                                    key={`${item.key}-${idx}`}
                                                    value={`${item.key}-${idx}`}
                                                    activeValue={activeNested}
                                                    onToggle={handleNestedToggle}
                                                    title={section.title}
                                                    sections={section.links}
                                                    onLinkClick={() => setOpenMenu(null)}
                                                    isNested={true}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </nav>
    );

};

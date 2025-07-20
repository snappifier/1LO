import {AnimatePresence, motion} from "motion/react"
import {useState, useEffect} from "react";
import logo from "../../assets/logo.png";
import {AccordionSection} from "./AccordionSection.jsx";
import {Link} from "react-router-dom";

export const DropdownMobile = ({isOpen, setNavOpen}) => {
    const [activeTopLevel, setActiveTopLevel] = useState(null);
    const [activeNested, setActiveNested] = useState(null);

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
            ]
        },
        {
            title: "Społeczność szkolna",
            links: [
                { name: "Dyrekcja", path: "/dyrekcja" },
                { name: "Nauczyciele", path: "/nauczyciele" },
                { name: "Rada Rodziców", path: "/rada-rodzicow" },
                { name: "Laureaci", path: "/laureaci" },
            ]
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
            ]
        }
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
            ]
        },
        {
            title: "Certyfikaty i osiągnięcia",
            links: [
                { name: "Certyfikaty", path: "/certyfikaty" },
            ]
        },
        {
            title: "Działalność i rozwój",
            links: [
                { name: "Erasmus+", path: "/erasmus" },
                { name: "Wymiana z Freiburgiem", path: "/wymiana-freiburg" },
            ]
        }
    ];

    const otherLinks = [
        {name: "Rekrutacja", path: "/rekrutacja"},
        {name: "E-Dziennik", path: "/e-dziennik"},
        {name: "Panel nauczyciela", path: "/panel-nauczyciela"},
    ]

    const handleTopLevelToggle = (value) => {
        setActiveTopLevel(prev => (prev === value ? null : value));
        if (activeTopLevel !== value) {
            setActiveNested(null);
        }
    };

    const handleNestedToggle = (value) => {
        setActiveNested(prev => (prev === value ? null : value));
    };

    useEffect(() => {
        if (!isOpen) {
            setActiveTopLevel(null);
            setActiveNested(null);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen &&
                <motion.div
                    className="absolut top-0 w-full h-full bg-[#3077BA] z-60 flex flex-col items-center justify-start gap-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                >
                    {/*<motion.div*/}
                    {/*    className="top-0 w-full h-40 bg-[#3077BA] z-60 flex items-center justify-start text-white font-[Montserrat] leading-none text-sm"*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    animate={{opacity: 1}}*/}
                    {/*    exit={{opacity: 0}}*/}
                    {/*    transition={{duration: 0.1}}*/}
                    {/*>*/}
                    {/*    <motion.img*/}
                    {/*        src={logo}*/}
                    {/*        alt="Logo"*/}
                    {/*        className="drop-shadow-md m-5 h-20 md:h-25"*/}
                    {/*    />*/}
                    {/*    <div className="w-2/5 md:w-1/2 text-wrap text-xs md:text-base">*/}
                    {/*        <p>I Liceum Ogólnokształcące<br/> im. Jana Zamoyskiego</p>*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}

                    <motion.nav className="w-full flex flex-col items-start justify-start z-60">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
                            className="w-full"
                        >
                            <AccordionSection
                                value="szkola"
                                activeValue={activeTopLevel}
                                onToggle={handleTopLevelToggle}
                                title="Szkoła"
                                onLinkClick={() => setNavOpen(false)}
                            >
                                {szkolaSections.map((section, index) => (
                                    <AccordionSection
                                        key={`szkola-${index}`}
                                        value={`szkola-${index}`}
                                        activeValue={activeNested}
                                        onToggle={handleNestedToggle}
                                        title={section.title}
                                        sections={section.links}
                                        onLinkClick={() => setNavOpen(false)}
                                        isNested={true}
                                    />
                                ))}
                            </AccordionSection>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            className="w-full"
                        >
                            <AccordionSection
                                value="uczen"
                                activeValue={activeTopLevel}
                                onToggle={handleTopLevelToggle}
                                title="Uczeń"
                                onLinkClick={() => setNavOpen(false)}
                            >
                                {uczenSections.map((section, index) => (
                                    <AccordionSection
                                        key={`uczen-${index}`}
                                        value={`uczen-${index}`}
                                        activeValue={activeNested}
                                        onToggle={handleNestedToggle}
                                        title={section.title}
                                        sections={section.links}
                                        onLinkClick={() => setNavOpen(false)}
                                        isNested={true}
                                    />
                                ))}
                            </AccordionSection>
                            {otherLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.2 + (index * 0.05),
                                        ease: "easeOut"
                                    }}
                                    className="w-full"
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setNavOpen(false)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left text-xl font-[golos_text] text-white border-b border-white pl-10"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.nav>

                    <motion.div
                        className="pb-10 text-3xl font-[meow_script] text-white mt-15"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.4, delay: 0.3}}
                    >
                        <p>Miłego dnia!</p>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
import * as Accordion from '@radix-ui/react-accordion'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionContent = motion(Accordion.Content)

export function AccordionSection({value, activeValue, onToggle, title, sections, onLinkClick, isNested = false, children}) {
    const isOpen = activeValue === value;

    const variants = {
        open: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        collapsed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
    }

    return (
        <Accordion.Root
            className={`w-full ${isNested ? '' : 'border-b border-white'}`}
            type="single"
            collapsible
            value={isOpen ? value : undefined}
        >
            <Accordion.Item value={value} className="overflow-hidden">
                <Accordion.Header>
                    <Accordion.Trigger
                        onClick={() => onToggle(value)}
                        className={`group w-full flex items-center justify-between px-6 py-4 text-left font-[Montserrat] text-white ${
                            isNested ? 'pl-12 text-lg' : 'pl-10 text-xl'
                        }`}
                    >
                        {title}
                        <ChevronDown
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            aria-hidden
                        />
                    </Accordion.Trigger>
                </Accordion.Header>

                <MotionContent
                    forceMount
                    animate={isOpen ? 'open' : 'collapsed'}
                    initial="collapsed"
                    variants={variants}
                    className={`bg-[#3077BA] text-white ${isNested ? 'pl-8' : 'pl-10'}`}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="flex flex-col py-2 pr-2">
                        {children || sections.map((section, index) => {
                            if (section.links && section.links.length > 0) {
                                return (
                                    <AccordionSection
                                        key={`${value}-${index}`}
                                        value={`${value}-${index}`}
                                        activeValue={activeValue}
                                        onToggle={onToggle}
                                        title={section.title}
                                        sections={section.links}
                                        onLinkClick={onLinkClick}
                                        isNested={true}
                                    />
                                )
                            } else {
                                return (
                                    <Link
                                        key={section.name}
                                        to={section.path}
                                        onClick={onLinkClick}
                                        className="pl-10 py-2 hover:underline"
                                    >
                                        {section.name}
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </MotionContent>
            </Accordion.Item>
        </Accordion.Root>
    )
}
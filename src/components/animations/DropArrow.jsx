import {motion} from "motion/react";


export const DropArrow = ({isOpen}) => {
    return (
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            animate={{ rotate: isOpen ? -90 : 0 }}
            transition={{ duration: 0.2 }}
        >
            <polyline points="6 9 12 15 18 9" />
        </motion.svg>
    );
}
import { useEffect, useRef } from 'react';

export const useScrollBlock = () => {
    const scrollPosition = useRef(0);

    useEffect(() => {
        scrollPosition.current = window.scrollY;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition.current}px`;
        document.body.style.width = '100%';

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            window.scrollTo(0, scrollPosition.current);
        };
    }, []);
};
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {fetchAndOrganizeStrapiImages} from "./strapiImages.jsx";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    return null;
};

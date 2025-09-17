import {Routes, Route} from "react-router";
import {useEffect} from "react";
import {ScrollToTop} from "./features/ScrollToTop.jsx";
import Home from "./sections/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import {BannerNew} from "./components/navbar/BannerNew.jsx";

import {Maintenance} from "./components/Maintenance.jsx";
import {Aktualnosci} from "./sections/Informacje/Aktualnosci.jsx";
import {Post} from "./components/Post.jsx";
import {Navigate} from "react-router-dom";

const RedirectHome = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return <Navigate to="/" replace />;
};

export const AppRoutes = () => {
    return (<>

            <BannerNew/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aktualnosci" element={<Aktualnosci/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="*" element={<Maintenance/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
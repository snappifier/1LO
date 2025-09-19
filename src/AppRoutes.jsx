import { Routes, Route } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { ScrollToTop } from "./features/ScrollToTop.jsx";
import Home from "./sections/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BannerNew } from "./components/navbar/BannerNew.jsx";
import { Maintenance } from "./components/Maintenance.jsx";
import { Navigate } from "react-router-dom";
import { Loader } from "./components/animations/Loader.jsx";
import Kadra from "./sections/Szkoła/Kadra.jsx";

const Aktualnosci = lazy(() => import("./sections/Aktualności/Aktualnosci.jsx"));
const Post = lazy(() => import("./components/Post.jsx"));

const RedirectHome = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return <Navigate to="/" replace />;
};

export const AppRoutes = () => {
    return (
        <>

            <Suspense fallback={<Loader />}>
                <BannerNew />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aktualnosci" element={<Aktualnosci />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/kadra" element={<Kadra />} />
                    <Route path="*" element={<Maintenance />} />
                </Routes>
                <Footer />
            </Suspense>

        </>
    );
};
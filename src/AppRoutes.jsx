import { Routes, Route } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { ScrollToTop } from "./features/ScrollToTop.jsx";
import Home from "./sections/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BannerNew } from "./components/navbar/BannerNew.jsx";
import { Maintenance } from "./components/Maintenance.jsx";
import { Navigate } from "react-router-dom";
import { Loader } from "./components/animations/Loader.jsx";

const Aktualnosci = lazy(() => import("./sections/Informacje/Aktualnosci.jsx"));
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

            {/*<Suspense fallback={<Loader />}>*/}
                <BannerNew />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aktualnosci" element={<Aktualnosci />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="*" element={<Maintenance />} />
                </Routes>
                <Footer />
            {/*</Suspense>*/}

        </>
    );
};
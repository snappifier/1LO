import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { ScrollToTop } from "./features/ScrollToTop.jsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {Template} from "./components/template-1.jsx";
import {get} from "./features/fetcher.jsx";


import Home from "./sections/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import { NavbarNew } from "./components/navbar/NavbarNew.jsx";
import { Maintenance } from "./components/Maintenance.jsx";
import { Loader } from "./components/animations/Loader.jsx";
import Kadra from "./sections/Szkoła/Kadra.jsx";
import Dyrektorzy from "./sections/Szkoła/Dyrektorzy.jsx";
import Statut from "./sections/Dokumenty/Statut.jsx"



const Aktualnosci = lazy(() => import("./sections/Aktualności/Aktualnosci.jsx"));
const Post = lazy(() => import("./components/Post.jsx"));

export const AppRoutes = () => {
    const uczen = useSuspenseQuery({
        queryKey: ["uczen"],
        queryFn: () =>
            get(
                "menu-uczens?populate=*&sort=rank:asc"
            ),
    });
    const uczniowieLinks = uczen.data?.data || [];

    return (
        <>
            <Suspense fallback={<Loader />}>
                <NavbarNew />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aktualnosci" element={<Aktualnosci />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/kadra" element={<Kadra />} />
                    <Route path="/dyrektorzy" element={<Dyrektorzy />} />
                    <Route path="/statut" element={<Statut />} />
                    {uczniowieLinks.map((item) => {
                        if(item["Template"] === "Main"){
                            return <Route path={item["Link"]} element={<Template />} />;
                        }
                        return null
                    })}
                    <Route path="*" element={<Maintenance />} />
                </Routes>
                <Footer />
            </Suspense>

        </>
    );
};
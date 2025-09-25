import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { ScrollToTop } from "./features/ScrollToTop.jsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Template } from "./components/template-1.jsx";
import { get } from "./features/fetcher.jsx";

import Home from "./sections/Home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import { NavbarNew } from "./components/navbar/NavbarNew.jsx";
import { Maintenance } from "./components/Maintenance.jsx";
import { Loader } from "./components/animations/Loader.jsx";
import Kadra from "./sections/Szkoła/Kadra.jsx";
import Dyrektorzy from "./sections/Szkoła/Dyrektorzy.jsx";
import TemplateSameLinki from "./sections/Templates/TemplateSameLinki.jsx";

const Aktualnosci = lazy(() => import("./sections/Aktualności/Aktualnosci.jsx"));
const Post = lazy(() => import("./components/Post.jsx"));

export const AppRoutes = () => {
    const menu_dokumenty = useSuspenseQuery({
        queryKey: ["dokumenty"],
        queryFn: () => get("menu-dokumenties?populate=*&sort=rank:asc"),
    });


    const dokumentyLinks = menu_dokumenty.data?.data || [];
    console.log(dokumentyLinks)
    const singleTypeApi = (uid) => `${uid}`;

    return (
        <Suspense fallback={<Loader />}>
            <NavbarNew />
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aktualnosci" element={<Aktualnosci />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/kadra" element={<Kadra />} />
                <Route path="/dyrektorzy" element={<Dyrektorzy />} />

                {dokumentyLinks
                    .filter((item) => item["Template"] === "Same linki" && item["Link"])
                    .map((item) => {

                        const api =
                            item["apiPath"]
                                ? item["apiPath"]
                                : item["singleTypeUid"]
                                    ? singleTypeApi(item["singleTypeUid"])
                                    : null;

                        if (!api) return null;
                        return (
                            <Route
                                key={item.id}
                                path={item["Link"]}
                                element={<TemplateSameLinki api={api} />}
                            />
                        );
                    })}

                <Route path="*" element={<Maintenance />} />
            </Routes>

            <Footer />
        </Suspense>
    );
};

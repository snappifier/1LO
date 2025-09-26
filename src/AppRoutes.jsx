import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import { ScrollToTop } from "./features/ScrollToTop.jsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./features/fetcher.jsx";

import Home from "./sections/Home/Home.jsx";
import { NavbarNew } from "./components/navbar/NavbarNew.jsx";
import { Maintenance } from "./components/Maintenance.jsx";
import { Loader } from "./components/animations/Loader.jsx";
import Kadra from "./sections/Szkoła/Kadra.jsx";
import Dyrektorzy from "./sections/Szkoła/Dyrektorzy.jsx";
import TemplateSameLinki from "./sections/Templates/TemplateSameLinki.jsx";
import FooterNew from "./components/footer/FooterNew.jsx";

const Aktualnosci = lazy(() => import("./sections/Aktualności/Aktualnosci.jsx"));
const Post = lazy(() => import("./components/Post.jsx"));

export const AppRoutes = () => {
    const menu_uczen = useSuspenseQuery({
        queryKey: ["uczen"],
        queryFn: () =>
            get(
                "menu-uczens?populate=*&sort=rank:asc"
            ),
    });
    const menu = useSuspenseQuery({
        queryKey: ["menu"],
        queryFn: () =>
            get("menu", {
                params: {
                    "populate[Kategoria][populate]": "*",

                },
            }),
    });
    const menu_szkola = useSuspenseQuery({
        queryKey: ["szkola"],
        queryFn: () =>
            get(
                "menu-szkolas?populate=*&sort=rank:asc"
            ),
    });
    const menu_aktualnosci = useSuspenseQuery({
        queryKey: ["aktualnosci"],
        queryFn: () =>
            get(
                "menu-aktualnoscis?populate=*&sort=rank:asc"
            ),
    });
    const menu_dokumenty = useSuspenseQuery({
        queryKey: ["dokumenty"],
        queryFn: () =>
            get(
                "menu-dokumenties?populate=*&sort=rank:asc"
            ),
    });
    console.log(menu.data)
    const kategorie = menu?.data?.data?.["Kategoria"]

    const uczniowieLinks = menu_uczen.data?.data || [];
    const oSzkoleLinks = menu_szkola.data?.data || [];
    const aktualnosciLinks = menu_aktualnosci.data?.data || [];
    const dokumentyLinks = menu_dokumenty.data?.data || [];
    const allLinks = [...uczniowieLinks, ...oSzkoleLinks, ...aktualnosciLinks, ...dokumentyLinks];
    const singleTypeApi = (uid) => `${uid}`;

    return (
        <Suspense fallback={<Loader />}>
            <NavbarNew menu={{kategorie}}/>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aktualnosci" element={<Aktualnosci />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/kadra" element={<Kadra />} />
                <Route path="/dyrektorzy" element={<Dyrektorzy />} />


                {kategorie.map((kategoria) => {
                    return (kategoria["Podstrona"].filter((item) => item["Szablon"] === "Automatyczny" && item["Link"]).map((item) => {
                        console.log(singleTypeApi(item["Link"].slice(1)));
                        return (
                            <Route
                                key={item.id}
                                path={item["Link"]}
                                element={<TemplateSameLinki api={singleTypeApi(item["Link"])} />}
                            />
                        );
                    }))
                })}

                <Route path="*" element={<Maintenance />} />
            </Routes>

            <FooterNew />
        </Suspense>

    );
};

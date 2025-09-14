import {Routes, Route} from "react-router";
import Home from "./sections/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import {NavbarHome} from "./components/NavbarHome.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Maintenance} from "./components/Maintenance.jsx";
import {Aktualnosci} from "./sections/Informacje/Aktualnosci.jsx";
import {Post} from "./components/Post.jsx";

export const AppRoutes = () => {
    return (<>
            <Routes>
                <Route path="/" element={<><NavbarHome/><Home /></>} />
            </Routes>
        <Navbar/>
        <Routes >
            <Route path="/aktualnosci" element={<Aktualnosci />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/rekrutacja" element={<Maintenance/>} />
            <Route path="/kontakt" element={<Maintenance/>} />
            <Route path="/certyfikaty" element={<Maintenance/>} />
            <Route path="/deklaracja-dostepnosci" element={<Maintenance/>} />
            <Route path="/procedury" element={<Maintenance/>} />
            <Route path="/program-wychowawczo-profilaktyczny" element={<Maintenance/>} />
            <Route path="/rodo" element={<Maintenance/>} />
            <Route path="/standardy-ochrony-maloletnich" element={<Maintenance/>} />
            <Route path="/statut" element={<Maintenance/>} />
            <Route path="/erasmus" element={<Maintenance/>} />
            <Route path="/wymiana-freiburg" element={<Maintenance/>} />
            <Route path="/akademia-zamojska" element={<Maintenance/>} />
            <Route path="/historia-szkoly" element={<Maintenance/>} />
            <Route path="/hymny" element={<Maintenance/>} />
            <Route path="/kalendarium" element={<Maintenance/>} />
            <Route path="/lokalizacja" element={<Maintenance/>} />
            <Route path="/osiagniecia" element={<Maintenance/>} />
            <Route path="/o-szkole" element={<Maintenance/>} />
            <Route path="/patron" element={<Maintenance/>} />
            <Route path="/biblioteka" element={<Maintenance/>} />
            <Route path="/dzwonki" element={<Maintenance/>} />
            <Route path="/harmonogram-nauczycieli" element={<Maintenance/>} />
            <Route path="/klasy" element={<Maintenance/>} />
            <Route path="/plan-lekcji" element={<Maintenance/>} />
            <Route path="/podreczniki" element={<Maintenance/>} />
            <Route path="/stypendia" element={<Maintenance/>} />
            <Route path="/zajecia-pozalekcyjne" element={<Maintenance/>} />
            <Route path="/dyrekcja" element={<Maintenance/>} />
            <Route path="/laureaci" element={<Maintenance/>} />
            <Route path="/nauczyciele" element={<Maintenance/>} />
            <Route path="/rada-rodzicow" element={<Maintenance/>} />
        </Routes>
            <Footer/>
        </>
    );
}
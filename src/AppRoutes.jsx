import {Routes, Route} from "react-router";
import Home from "./sections/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Loader} from "./components/animations/Loader.jsx";

export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
            <Route path="/kontakt" element={<><Loader/></>} />
        </Routes>
    );
}
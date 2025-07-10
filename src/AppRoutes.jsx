import {Routes, Route} from "react-router";
import {Navbar} from "./components/Navbar";

export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Navbar/>} />

        </Routes>
    );
}
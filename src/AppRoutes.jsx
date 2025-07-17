import {Routes, Route} from "react-router";
import Home from "./sections/Home/Home.jsx";

export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
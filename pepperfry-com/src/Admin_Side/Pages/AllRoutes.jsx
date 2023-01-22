import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route to="/" element={<Home />} />
                <Route to="/sofas" element={<ProductPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;
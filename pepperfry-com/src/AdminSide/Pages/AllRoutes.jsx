import { Route, Routes } from "react-router-dom"
import ProductPage from "./ProductPage";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/sofas" element={<ProductPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;
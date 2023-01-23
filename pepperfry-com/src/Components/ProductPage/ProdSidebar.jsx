import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./ProdSide.module.css";

const ProdSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initBrand = searchParams.getAll("brand");
    const initOrder = searchParams.getAll("order");
    const [brand, setBrand] = useState(initBrand || []);
    const [order, setOrder] = useState(initOrder[0] || "");

    const handleFilter = (e) => {
        let newBrand = [...brand];

        if (newBrand.includes(e.target.value)) {
            newBrand.splice(newBrand.indexOf(e.target.value), 1);
        } else {
            newBrand.push(e.target.value);
        }
        setBrand(newBrand);
    }

    const handleSort = (e) => {
        setOrder(e.target.value);
    }

    useEffect(() => {
        let params = {
            brand
        }
        order && (params.order = order);
        setSearchParams(params);
    }, [brand, order])

    return (
        <div className={styles.product_sidebar_container}>
            {/* sorting functionality starts from here */}
            <h2>Sort By</h2>
            <div onChange={handleSort}>
                <input
                    type="radio"
                    name="sort_by"
                    value={"reset"}
                    defaultChecked={order === "reset"}
                />
                <label>Relevance</label>
                <br />
                <input
                    type="radio"
                    name="sort_by"
                    value={"desc"}
                    defaultChecked={order === "desc"}
                />
                <label>Highest Price First</label>
                <br />
                <input
                    type="radio"
                    name="sort_by"
                    value={"asc"}
                    defaultChecked={order === "asc"}
                />
                <label>Lowest Price First</label>
                <br />

                {/* <input
                 type="radio"
                />
                <label>Highest Rating First</label>
                <br />
                <input
                 type="radio"
                />
                <label>Lowest Rating First</label> */}
            </div>

            {/* filtering functionality starts from here */}
            <h2>Brand</h2>
            <div>
                <input
                    type="checkbox"
                    value="CasaCraft"
                    onChange={handleFilter}
                    checked={brand.includes("CasaCraft")}
                />
                <label>CasaCraft</label>
                <br />
                <input
                    type="checkbox"
                    value="Febonic"
                    onChange={handleFilter}
                    checked={brand.includes("Febonic")}
                />
                <label>Febonic</label>
                <br />
                <input
                    type="checkbox"
                    value="Woodsworth"
                    onChange={handleFilter}
                    checked={brand.includes("Woodsworth")}
                />
                <label>Woodswordth</label>
                <br />
                <input
                    type="checkbox"
                    value="Urban_Living"
                    onChange={handleFilter}
                    checked={brand.includes("Urban_Living")}
                />
                <label>Urban Living</label>
                <br />
                <input
                    type="checkbox"
                    value="Durian"
                    onChange={handleFilter}
                    checked={brand.includes("Durian")}
                />
                <label>Durian</label>
                <br />
                <input
                    type="checkbox"
                    value="Trevi_Furniture"
                    onChange={handleFilter}
                    checked={brand.includes("Trevi_Furniture")}
                />
                <label>Trevi Furniture</label>
            </div>
        </div>
    )
}

export default ProdSidebar;
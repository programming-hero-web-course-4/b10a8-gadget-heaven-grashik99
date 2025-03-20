import { createContext, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";


export const ProductsContext = createContext(null);
const Root = () => {

        const [rawProducts, setRawProducts] = useState([]);
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch('./products.json')
                .then(res => res.json())
                .then(data => {
                    setRawProducts(data)
                    setProducts(data)
                })
        }, [setProducts]);

    return (
        <div className="sora-font max-w-screen-2xl mx-auto">
            <ProductsContext.Provider value={{products, setProducts, rawProducts}}>
                <Navigation></Navigation>
                <Outlet></Outlet>
                <Footer></Footer>
                </ProductsContext.Provider>
        </div>
    );
};

export default Root;
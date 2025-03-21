import { createContext, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";


// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext(null);
const Root = () => {

        const [rawProducts, setRawProducts] = useState([]);
        const [products, setProducts] = useState([]);
        const [cart, setCart] = useState([]);
        const [wish, setWish] = useState([]);
     
        useEffect(() => {
            fetch('./products.json')
                .then(res => res.json())
                .then(data => {
                    setRawProducts(data)
                    setProducts(data)
                })
        }, []);

    return (
        <div className="sora-font max-w-screen-2xl mx-auto">
            <ProductsContext.Provider value={{products, setProducts, rawProducts, cart, setCart, wish, setWish}}>
                <Navigation></Navigation>
                <Outlet></Outlet>
                <Footer></Footer>
            </ProductsContext.Provider>
        </div>
    );
};

export default Root;
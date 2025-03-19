
import { createContext, useEffect, useState } from "react";
import Category from "../Category/Category";
import Product from "../Product/Product";
import NoProduct from "../NoProduct/NoProduct";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext(null);


const Products = () => {

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
    <div className="bg-[#F6F6F6] my-6 py-4 pr-4">
        <ProductsContext.Provider value={{products, setProducts, rawProducts}}>
            <div className="grid grid-cols-[350px_1fr]">
                <div className="w-auto mx-auto mt-4">
                    <Category></Category>
                </div>
                <div className={products.length >= 1 ? "grid grid-cols-3 gap-4" : ""}>
                    { products.length >= 1 ? products.map(product => <Product key={product.product_id} product={product}></Product>) : <NoProduct></NoProduct>}
                </div>
            </div>
        </ProductsContext.Provider>
    </div>
);
};

export default Products;
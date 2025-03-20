
import Category from "../Category/Category";
import Product from "../Product/Product";
import NoProduct from "../NoProduct/NoProduct";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";





const Products = () => {

const {products} = useContext(ProductsContext);


return (
    <div className="bg-[#F6F6F6] my-6 py-4 pr-4">
        
            <div className="grid grid-cols-[350px_1fr]">
                <div className="w-auto mx-auto mt-4">
                    <Category></Category>
                </div>
                <div className={products.length >= 1 ? "grid grid-cols-3 gap-4" : ""}>
                    { products.length >= 1 ? products.map(product => <Product key={product.product_id} product={product}></Product>) : <NoProduct></NoProduct>}
                </div>
            </div>
            
    </div>
);
};

export default Products;
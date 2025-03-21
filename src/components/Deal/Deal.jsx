import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Root/Root";
import Product from "../Product/Product";
import { RxMoon } from "react-icons/rx";
const Deal = () => {

    const { products, setProducts } = useContext(ProductsContext);

    const [deal, setDeal] = useState([]);

    useEffect(() => {
        fetch('deal.json')
            .then(res => res.json())
            .then(data => setDeal(data))
    }, []);

    setProducts(deal);

    return (
        <div>
            <div className="bg-[#9538E2] h-[30vh] flex items-center justify-center">
                <h1 className="text-7xl text-yellow-200 italic flex"><RxMoon />&nbsp; Ramadan Deal &nbsp; <RxMoon /></h1>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-4 gap-3 mt-8">
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Deal;
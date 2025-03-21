import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
const Wishlist = () => {
    const {wish} = useContext(ProductsContext);
    return (
        <div>
            {
                wish.length >= 1 ? wish.map((p, index) =><h1 key={index} >hello</h1>) : <h1>There is no product in wish.</h1>
            }         
        </div>
    );
};

export default Wishlist;
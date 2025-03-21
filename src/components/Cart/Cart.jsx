import { useContext } from "react";
import { ProductsContext } from "../Root/Root";

const Cart = () => {
    const {cart} = useContext(ProductsContext);
    return (
        <div>
            {
                cart.length >= 1 ? cart.map((p, index) =><h1 key={index} >hello</h1>) : <h1>There is no product.</h1>
            }       
        </div>
    );
};

export default Cart;
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import CartCard from "../CartCard/CartCard";
import cartPic from "../../assets/empty-cart.png"
import { Link } from "react-router-dom";
import ok from "../../assets/Group.png"
import { toast } from "react-toastify";

const Cart = () => {
    const { cart, cPrice, setCart, setCartNumber, setCPrice } = useContext(ProductsContext);

    const sortBy = () => {
        const cartList = [...cart].sort((a, b) => b.price - a.price);
        setCart(cartList);
    }

    const shop = () => {
        if (cart.length >= 1) {
            document.getElementById('my_modal_3').showModal()
            setCart([])
            setCartNumber(0)
            setCPrice(0)
        } else {
            toast.warn('Please add Product.')
        }
    }

    return (
        <div className="w-[80%] mx-auto mt-4">
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex gap-4 items-center">
                    <h1 className="text-xl font-bold">Total Cost: {cPrice.toFixed(2.)}</h1>
                    <button onClick={() => sortBy()} className="btn rounded-full">Sort by Price</button>
                    <button onClick={() => shop()} className="btn rounded-full">Purchase</button>
                </div>
            </div>

            {
                cart.length >= 1 ? cart.map((p, index) => <CartCard key={index} p={p}></CartCard>) : <Link to="/"><img src={cartPic} className="w-72 mx-auto" /></Link>
            }
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box text-center">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <img className="w-16 mx-auto mb-8" src={ok} />
                    <h3 className="font-bold text-xl">Payment Successful</h3>
                    <p className="py-4">Thanks for purchasing</p>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
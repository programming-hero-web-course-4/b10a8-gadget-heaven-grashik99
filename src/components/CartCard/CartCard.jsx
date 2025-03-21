import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import { toast } from 'react-toastify';


// eslint-disable-next-line react/prop-types
const CartCard = ({ p }) => {
    // eslint-disable-next-line react/prop-types
    const { description, product_image, product_title, price, product_id } = p;

    const { cart, setCart, products, cPrice, setCPrice, cartNumber, setCartNumber } = useContext(ProductsContext);

    const removeFromCart = (x) => {
        const oldCart = [...cart];
        const newCart = oldCart.filter(c => c.product_id !== x)
        setCart(newCart)
        const z = products.find(y => y.product_id === x)
        setCPrice(cPrice - z.price);
        setCartNumber(cartNumber - 1)
        toast.warn('Item has been Removed!')
    }

    return (
        <div className=" flex gap-2 p-4 shadow-lg rounded-xl mb-2 border">
            <div>
                <img className="w-40 rounded-xl" src={product_image} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-medium mb-1">{product_title}</h1>
                <p className="text-[#989595]">{description}</p>
                <h2 className="font-bold">Price: {price} $</h2>
                <button onClick={() => removeFromCart(product_id)} className="px-2 bg-red-400 rounded-full text-white">Remove from cart</button>
            </div>
        </div>
    );
};

export default CartCard;
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import Ratings from "../Ratings/Ratings";
import SpList from "../spList/spList";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { toast } from 'react-toastify';

const ProductDetails = () => {


    const { id } = useParams();
    const { products, cart, setCart, wish, setWish, cPrice, setCPrice, cartNumber, setCartNumber, wishNumber, setWishNumber} = useContext(ProductsContext);
    const product = products.find(product => product.product_id == id)
    const { product_title, product_image, price, description, Specification, availability, rating, brand } = product;

    const addToCart = (product) => {
        if(product.availability){
            if (cart.length === 0) {
                setCart([product]);
                setCPrice(product.price)
                setCartNumber(cartNumber + 1)
                toast.success('Successfully added to cart')
    
            } else {
                const exist = cart.find(x => x.product_id === product.product_id)
    
                if (exist) {
                    toast.warn('This Item already added.')
                } else {
                    const newCarts = [...cart, product];
                    setCart(newCarts)
                    setCPrice(cPrice + product.price)
                    setCartNumber(cartNumber + 1)
                    toast.success('Successfully added to cart')
                };
    
            };
        }else{
            toast.error('This item not Available Now.')
        }
    };

    const addToWish = (product) => {
        if (wish.length === 0) {
            setWish([product]);
            setWishNumber(wishNumber + 1)
            toast.success('This item successfully add to Wishlist')
        } else {
            const exist = wish.find(x => x.product_id === product.product_id)

            if (exist) {
                toast.warn('This Product already added.')
            } else {
                const newWish = [...wish, product];
                setWish(newWish)
                setWishNumber(wishNumber + 1)
                toast.success('This item successfully add to Wishlist')
            };
        }
    };

    return (
        <div>
            <div className="bg-[#9538E2] text-center p-6 pb-40">
                <h1 className="text-3xl font-bold text-[#fff] mb-4">Product Details</h1>
                <p className="text-[#ffffffc0] mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            {/* Dynamic */}
            <div className="bg-[#fbf5f5] rounded-xl p-8 shadow-xl w-[60%] mx-auto my-6 relative -mt-36 md:flex gap-8 justify-evenly">
                <div className="mb-4 md:mb-0">
                    <Link to="/"><img src={product_image} alt={product_title} className="w-96 rounded-xl bg-white p-4" /></Link>
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl font-bold mb-6">{product_title} ({brand})</h1>
                    <p className="text-xl font-semibold text-[#241d1d] mb-4">Price:{price}$</p>
                    <button className="btn btn-sm bg-green-500 border border-green-900 hover:bg-green-300 text-white hover:text-black rounded-full mb-4">{availability ? `In Stock` : `Out of Stock`}</button>
                    <p className="font-medium text-[#0000003f] mb-2">{description}</p>
                    <h3 className="font-bold text-xl">Specification:</h3>
                    <ul className="mb-2">
                        {
                            Specification.map((s, index) => <SpList key={index} index={index} s={s}></SpList>)
                        }
                    </ul>
                    <h4 className="mb-2">{<Ratings rating={rating}></Ratings>}</h4>
                    <div className="flex items-center">
                        <button onClick={() => addToCart(product)} className="btn mr-2 rounded-3xl">Add to Card <span className="text-xl"><MdOutlineAddShoppingCart /></span></button>
                        <button onClick={() => addToWish(product)} className="btn rounded-3xl text-xl"><GiEternalLove /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import WishlistCard from "../WishlistCard/WishlistCard";
import wishImage from "../../assets/empty-wishlist.png"
import { Link } from "react-router-dom";
const Wishlist = () => {
    const {wish} = useContext(ProductsContext);
    return (
        <div className="w-[80%] mx-auto my-2">
            {
                wish.length >= 1 ? wish.map((p, index) =><WishlistCard key={index}p={p}></WishlistCard>) : <Link to="/"><img src={wishImage} className="w-96 mx-auto" /></Link>
            }         
        </div>
    );
};

export default Wishlist;
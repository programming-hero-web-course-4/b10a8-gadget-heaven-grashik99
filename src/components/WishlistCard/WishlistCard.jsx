import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const WishlistCard = ({ p }) => {
    // eslint-disable-next-line react/prop-types
    const { product_title, product_image, description, product_id } = p

    const { wish, setWish, wishNumber, setWishNumber } = useContext(ProductsContext);


    const removeFromWish = (product_id) => {
        if (wish.length === 1) {
            setWish([])
            setWishNumber(wishNumber - 1)
            toast.success('This item remove successfully')
        }
        else {
            const newWish = wish.filter(x => x.product_id !== product_id)
            setWish(newWish);
            setWishNumber(wishNumber - 1)
            toast.success('This item remove successfully')
        }
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl border mb-2">
            <figure>
                <img className="w-36 rounded-xl m-4" src={product_image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => removeFromWish(product_id)} className="btn btn-primary">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
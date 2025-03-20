import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import Ratings from "../Ratings/Ratings";
import SpList from "../spList/spList";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find(product => product.product_id == id)
    const { product_title, product_image, price, description, Specification, availability, rating, brand } = product;
    return (
        <div>
            <div className="bg-[#9538E2] text-center p-6 pb-40">
                <h1 className="text-3xl font-bold text-[#fff] mb-4">Product Details</h1>
                <p className="text-[#ffffffc0] mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br/> the coolest accessories, we have it all!</p>
            </div>
            {/* Dynamic */}
            <div className="bg-[#fbf5f5] rounded-xl p-8 shadow-xl w-[60%] mx-auto my-6 relative -mt-36 flex gap-8 justify-evenly">
                <div>
                    <img src={product_image} alt={product_title} className="w-96 rounded-xl bg-white p-4" />
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl font-bold mb-6">{product_title} ({brand})</h1>
                    <p className="text-xl font-semibold text-[#241d1d] mb-4">Price: {price} $</p>
                    <button className="btn btn-sm bg-green-500 border border-green-900 hover:bg-green-300 text-white hover:text-black rounded-full mb-4">{availability ? `In Stock` : `Out of Stock`}</button>
                    <p className="font-medium text-[#0000003f] mb-2">{description}</p>
                    <h3 className="font-bold text-xl">Specification:</h3>
                    <ul className="mb-2">
                        {
                            Specification.map((s, index) => <SpList key={index} index={index} s={s}></SpList>)
                        }
                    </ul>
                    <h4 className="mb-2">{<Ratings rating={rating}></Ratings>}</h4>
                    <div>
                        <button className="btn mr-2">Add to Card</button>
                        <button className="btn mr-2">HH</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
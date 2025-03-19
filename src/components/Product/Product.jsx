import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { product_title, product_image, price, category, product_id } = product;

    // const viewDetails = (product) => {
    //     console.log(product)
    // };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product_image} alt={category} className="rounded-xl h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link to={`/details/${product_id}`}><button className="btn bg-white border-2 border-solid border-black rounded-full hover:bg-blue-600 hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { product_title, product_image, price, category, product_id, discount_price } = product;

    // const viewDetails = (product) => {
    //     console.log(product)
    // };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 md:min-h-52">
                    <img src={product_image} alt={category} className="rounded-xl max-w-40 max-h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product_title}</h2>
                    {
                        discount_price ? <><del className="text-red-500">{price}</del> <ins className="text-green-500">{discount_price}</ins></>  : <p>{price}</p>
                    }
                    <div className="card-actions">
                        <Link to={`/details/${product_id}`}><button className="btn bg-white border-2 border-solid border-black rounded-full hover:bg-blue-600 hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default ProductDetails;
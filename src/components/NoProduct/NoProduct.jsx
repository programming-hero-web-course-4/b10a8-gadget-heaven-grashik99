import noProduct from "../../assets/comming soon.jpg"
const NoProduct = () => {
    return (
        <div className="text-center mt-12">
            <div className="inline-block bg-white border border-solid border-rose-600 p-4 m-4 rounded-md shadow-lg">
            <h1 className="text-3xl font-bold italic">Products Coming Soon</h1>  
            <img src={noProduct} className="w-60 inline-block rounded-md pt-6 m-2" alt="Product coming soon" />       
            </div>
        </div>
    );
};

export default NoProduct;
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <div className="text-center bg-[#9538E2] mx-4 rounded-b-2xl">
                <div>
                    <h1 className="text-5xl font-bold text-white mb-8 pt-8">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <hr className="w-[10%] mx-auto mb-8" />
                    <p className="text-xl mb-4 text-[#e3e3e3] w-[50%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn rounded-full mb-72 mt-4"><Link to="/dashboard/">Shop Now</Link></button>
                </div>
            </div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;
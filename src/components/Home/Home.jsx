import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <div className="text-center bg-[#9538E2] mx-4 rounded-b-2xl">
                <div>
                    <h1 className="text-3xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn rounded-full mb-64">Shop Now</button>
                </div>
            </div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;
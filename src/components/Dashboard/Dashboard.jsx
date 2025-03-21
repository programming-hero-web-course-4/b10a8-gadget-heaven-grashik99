import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] text-center py-8">
                <h1 className="text-2xl font-bold mb-2 text-white">Dashboard</h1>
                <p className="font-light mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center gap-3">
                    <NavLink className="btn" to="/dashboard">Cart</NavLink>
                    <NavLink className="btn" to="/dashboard/wishlist">Wishlist</NavLink>
                </div>
            </div>
            <Outlet></Outlet>   
        </div>
    );
};

export default Dashboard;
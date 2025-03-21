import {Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] text-center py-8">
                <h1 className="text-2xl font-bold mb-2 text-white">Dashboard</h1>
                <p className="font-light mb-4 text-[#cec9c9]">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br/>the coolest accessories, we have it all!</p>
                <div className="menu menu-horizontal px-1">
                    <li ><Link className="mr-2 border-2 rounded-full text-white" to="/dashboard">Cart</Link></li>
                    <li><Link className="border-2 rounded-full text-white" to="/dashboard/wishlist">Wishlist</Link></li>
                </div>
            </div>
            <Outlet></Outlet>   
        </div>
    );
};

export default Dashboard;
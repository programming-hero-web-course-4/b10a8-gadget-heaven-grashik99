import { TiShoppingCart } from "react-icons/ti";
import { FaBucket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className=" bg-[#9538E2] mt-4 mx-4 rounded-t-2xl">
            <div className="w-[80%] mx-auto">
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <a className="text-xl font-bold" href="/">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mr-2"><NavLink to="/details">Statistics</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2">
                        <button className="btn rounded-full text-xl px-3 inline-block ml-2"><TiShoppingCart /></button>
                        <button className="btn rounded-full text-xl px-3"><FaBucket /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
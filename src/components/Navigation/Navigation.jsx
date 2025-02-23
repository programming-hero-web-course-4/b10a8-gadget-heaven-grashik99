import { TiShoppingCart } from "react-icons/ti";
import { FaBucket } from "react-icons/fa6";

const Navigation = () => {
    return (
        <div className="w-[80%] mx-auto">
            <div className="navbar bg-base-100 text-black">
                <div className="navbar-start">
                    <a className="text-xl font-bold" href="#">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Statistics</a></li>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <button className="btn rounded-full text-xl px-3 inline-block ml-2"><TiShoppingCart /></button>
                    <button className="btn rounded-full text-xl px-3"><FaBucket /></button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
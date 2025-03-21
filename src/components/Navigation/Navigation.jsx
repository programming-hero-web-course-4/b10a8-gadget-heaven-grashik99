import { TiShoppingCart } from "react-icons/ti";
import { GiEternalLove } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import { ToastContainer} from "react-toastify";

const Navigation = () => {

    const { cartNumber, wishNumber } = useContext(ProductsContext);

    const location = useLocation();

    const color = () => {
        switch (location.pathname) {
            case '/': return 'bg-[#9538E2]';
            default: return ''
        }
    }

    const textColor = () => {
        switch (location.pathname) {
            case '/': return 'text-white'
            default: return 'text-black'
        }
    }

    return (
        <div className={`${color()} mt-4 mx-4 rounded-t-2xl`}>
            <ToastContainer></ToastContainer>
            <div className="w-[80%] mx-auto">
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <a className={`text-3xl font-bold ${textColor()}`} href="/">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className={`${textColor()} menu menu-horizontal px-1 font-semibold text-[16px]`}>
                            <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mr-2"><NavLink to="/statistics">Statistics</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to='/deal'>Deal</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2 relative">
                        <Link to="/dashboard/"><button className="btn rounded-full text-xl px-3 inline-block ml-2"><TiShoppingCart /></button> <p className="absolute top-0 bg-[#2c8beb94] px-1 rounded-full text-white font-bold">{cartNumber}</p></Link>
                        <Link to="/dashboard/wishlist"><button className="btn rounded-full text-xl px-3"><GiEternalLove /></button> <p className="absolute top-0 bg-[#de757584] px-1 rounded-full text-white font-bold">{wishNumber}</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
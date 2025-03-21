import { TiShoppingCart } from "react-icons/ti";
import { GiEternalLove } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {

    const location = useLocation();

    const color = () => {
        switch (location.pathname){
            case '/': return 'bg-[#9538E2]';
            default: return ''
        }
    }

    return (
        <div className={`${color()} mt-4 mx-4 rounded-t-2xl`}>
            <div className="w-[80%] mx-auto">
                <div className="navbar text-black">
                    <div className="navbar-start">
                        <a className="text-xl font-bold" href="/">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mr-2"><NavLink to="/product">Statistics</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2">
                        <button className="btn rounded-full text-xl px-3 inline-block ml-2"><TiShoppingCart /></button>
                        <button className="btn rounded-full text-xl px-3"><GiEternalLove /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
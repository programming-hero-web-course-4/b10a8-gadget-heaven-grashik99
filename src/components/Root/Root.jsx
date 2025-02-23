import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="sora-font">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default Root;
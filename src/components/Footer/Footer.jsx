const Footer = () => {
    return (
        <div className="py-12">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Gadget Heaven</h1>
                <p className="text-[#989797] mb-8">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className=" w-8/12 mx-auto flex justify-evenly text-center">
                <ul className="text-left font-bold">
                    <li>Services</li>
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery</li>
                    <li>Returns</li>
                </ul>
                <ul className="text-left font-bold">
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <ul className="text-left font-bold">
                    <li>Legal</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>          
        </div>
    );
};

export default Footer;
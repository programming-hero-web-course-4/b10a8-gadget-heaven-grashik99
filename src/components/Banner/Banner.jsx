import bannerImage from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="relative">
            <div className="w-[60%] mx-auto rounded-2xl bg-[#ffffff50] border-2 relative -mt-60">
                <div className="p-4">
                    <img className="rounded-2xl" src={bannerImage} alt="banner-image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
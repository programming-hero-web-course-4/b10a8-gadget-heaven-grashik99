import StarRatings from "react-star-ratings";

// eslint-disable-next-line react/prop-types
const Ratings = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={rating} // Rounded for better display
                starRatedColor="gold"
                starEmptyColor="gray"
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={5}
                name="rating"
            />
        </div>
    );
};

export default Ratings;

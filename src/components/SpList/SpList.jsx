// eslint-disable-next-line react/prop-types
const SpList = ({ s, index }) => {
    console.log(index)
    return (
        <div>
            <li>{index + 1}. {s}</li>
        </div>
    );
};

export default SpList;
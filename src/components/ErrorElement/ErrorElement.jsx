import { Link } from 'react-router-dom';
import error from'../../assets/error.jpg'
const ErrorElement = () => {
    return (
        <div>
            <Link><img className='w-[80%] mx-auto' src={error}/></Link>            
        </div>
    );
};

export default ErrorElement;
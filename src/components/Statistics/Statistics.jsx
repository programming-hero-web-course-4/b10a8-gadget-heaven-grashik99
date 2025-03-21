import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { ProductsContext } from '../Root/Root';


const Statistics = () => {

    const {products} = useContext(ProductsContext);

    return (
        <div className='w-[1200px] mx-auto py-8'>
            <BarChart width={1200} height={500} data={products}>
                <XAxis dataKey="product_title" stroke="#8884d8" />
                <YAxis dataKey="price"/>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#9538E2' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#9538E2" strokeDasharray="5 5" />
                <Bar dataKey="price" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statistics;
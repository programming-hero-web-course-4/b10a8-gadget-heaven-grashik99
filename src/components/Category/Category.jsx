import { useContext, useEffect, useState} from "react";
import { ProductsContext } from "../Products/Products";


const Category = () => {

    const {setProducts, rawProducts} = useContext(ProductsContext);

    const [categories, setCategories] = useState([]);


        
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);

    const heddleCategory = (cateName) => {
        const filteredProducts = rawProducts.filter(product => product.category === cateName)
        if(cateName === "All Products"){
            setProducts(rawProducts)
        }else{
            setProducts(filteredProducts)
        }
        
    }

    return (
        <div className="flex flex-col">
            {
                categories.map(category => <button key={category} onClick={()=> heddleCategory(category)} className="btn btn-success text-white block mb-2">{category}</button>)
            }
        </div>
    );
};

export default Category;
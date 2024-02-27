
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const Product = () => {
    const[products,setProducts] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1>Total Produt :{products?.length}</h1>
           <div className="grid grid-cols-1 sx:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 my-10 " >
           {
                products?. map(product=><ProductCard
                key={product.id}
                product={product}

                ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Product;
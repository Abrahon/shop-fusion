import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {_id,name, image, price} = product;
    return (
        <div>
             <div className="container mx-auto">
           
           <div className="shadow-2xl p-2  w-full rounded-lg"   >
              <Link to={`/productdetails/${_id}`}>
              <div className="object-cover h-72 w-full">
               <img className="h-full" src={image} alt="image" />
               </div>
               <div>
                   <h1>{name}</h1>
                   
                   <p className="text-xl text-blue-600"> <span className="font-bold">${price}</span></p>

               </div>
              </Link>
           </div>
       </div>
        </div>
    );
};

export default ProductCard;
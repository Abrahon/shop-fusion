// import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ProductCard = ({ product }) => {
    const { _id, name, image, price } = product;

    useEffect(() => {
        AOS.init({ duration: "3000" });
    }, [])
    return (
        <div>
            <div className="container mx-auto">

                <div className="shadow-2xl p-2  w-full rounded-lg" data-aos="flip-up" >
                    <Link to={`/productdetails/${_id}`}>
                        <div className="object-cover h-72 w-full">
                            <img className="h-full" src={image} alt="image" />
                        </div>
                        <div className="mt-2">
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
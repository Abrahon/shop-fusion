import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";


const ProductDetails = () => {
    const load = useLoaderData()
    const { name, image, price, description, _id } = load;
    console.log(load.name)
    const [, refetch] = useCart()

    const handleAddToCart = id => {
        console.log(id)
        const cartItem = {
            productId: _id,
            name,
            image,
            price
        }
        axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }


    return (
        <div>
            <div className='grid lg:grid-cols-2 w-full p-10 '>
                <div className='m-10'>
                    <img src={image} alt="" className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className="mt-20">
                    <h2 className='text-3xl font-semibold  mb-5 mt-5'>{name}</h2>
                    <p>{description}</p>
                    <p className='text-2xl text-red-600 font-semibold'> ${price}</p>
                    <button onClick={() => handleAddToCart(load)} className=" btn btn-warning rounded-full mt-10">Add To Cart</button>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
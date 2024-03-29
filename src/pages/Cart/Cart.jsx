import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";


const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    // how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You would like to delete this cart item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your cart item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div >
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Items: {cart.length}</h3>
            <h3 className="text-3xl">Total Price: ${total}</h3>
           
        </div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart?.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
           <div className="flex justify-center items-center mb-10">
           <Link to="/checkout">
                <button className="btn btn-warning btn-wide  rounded-full font-bold">Proceed To Checkout</button>
            </Link>
           </div>
        </div>
    </div>
    );
};

export default Cart;
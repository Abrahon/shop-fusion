
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Cart from "../../pages/Cart/Cart";
import Checkout from "../../pages/Checkout/Checkout";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/product',
                element:<Product></Product>
            },
            {
                path:'/productdetails/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            }
        ]
    }
])
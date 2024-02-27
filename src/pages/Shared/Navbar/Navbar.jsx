import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";



const Navbar = () => {
  const[carts] = useCart()
  const NavSection = <>
  <li><Link to='/'>Home</Link> </li>
  <li><Link to='/product'>Product</Link></li>
  <li><Link to='cart'><FaShoppingCart></FaShoppingCart> +{carts.length}</Link></li>
  
  </>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {NavSection}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Shop Fusion</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavSection}
          </ul>
        </div>

        <div className='navbar-end '>
          {/* <span>{user.displayName}</span> */}
          {/* <img className='h-12 w-12 rounded-full ms-2' src={user.photoURL} alt="" /> */}
        </div>


      </div>
    </div>
  );
};

export default Navbar;
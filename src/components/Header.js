import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

 const Header = () => {
  const [btnName, setBtnName] = useState('Login');
 const data =  useContext(UserContext)

  useEffect(() => {
    console.log("useEffect called");
  },[btnName])


  const cartItems = useSelector((store) => store.cart.items)
  console.log("cartitems:", cartItems);

    return (
      <div className="header flex justify-between py-4 px-2 bg-slate-500 m-4 shadow-2xl items-center">
        <div className="logo ">
          <h1>Logo</h1>
        </div>
        <div className="nav-items">
          <ul className="flex">
            <li className="px-4">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about" className="link">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact" className="link">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery" className="link">Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="/cart" className="link">Cart ({cartItems.length} items)</Link>
            </li>
            <button className="login px-4 " onClick={() => {
              btnName === "Login"? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
            <li className="px-4 font-bold">
             {data.loggedinUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
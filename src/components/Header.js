import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

 const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  useEffect(() => {
    console.log("useEffect called");
  },[btnName])

    return (
      <div className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="link">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName === "Login"? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
import { useEffect, useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
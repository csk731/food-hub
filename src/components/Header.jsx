import appLogo from "../../assets/images/logo.jpg";
import React, {useState} from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo} alt="FoodHub"/>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{setBtnName((btnName==="Login") ? "Logout" : "Login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
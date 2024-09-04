import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [Clickbtn, setclickBtn] = useState("Click");
  const [btnName, setbtnName] = useState("ClickMe");


    return (
      <div className="header">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName==="ClickMe" ? setbtnName("❤️"): setbtnName("ClickMe");
            }}>{btnName}</button>

            <button className="login" onClick={()=>{
              btnNameReact==="Login" ? setbtnNameReact("Logout"): setbtnNameReact("Login");
            }}>{btnNameReact}</button>

            <button className="login" onClick={()=>{
              Clickbtn==="Click" ? setclickBtn("Clicked"): setclickBtn("Click");
            }}>{Clickbtn}</button>
          </ul>
        </div>
      </div>
    );
  };

// 1:32:00 min

  export default Header;

import React from "react";
import logo from "./assets/new.png";
import bg from "./assets/BG.png";
import "./Login.css";

export const Login = () => {
  return (
    <div className="center">
      <form action="">
        <img className="logo" src={logo} alt="ubix" />
        <div className="title">Electronic Daily Sales Report</div>
        <div className="txt_field">
          <input type="text" id="user" name="user" required />
          <span></span>
          <label>Username</label>
        </div>
        <div name="password" type="VARCHAR" className="txt_field">
          <input type="password" id="pass" name="pass" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" id="btn" value="Login" name="login"></input>
      </form>
    </div>
  );
};

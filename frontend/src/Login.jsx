import React, { useState } from "react";
import logo from "./assets/new.png";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Success") {
          navigate("/home");
        } else {
          alert("No user exists");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="center">
        <form action="" onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="ubix" />
          <div className="title">Electronic Daily Sales Report</div>
          <div className="txt_field">
            <input
              type="text"
              id="user"
              name="email"
              required
              onChange={handleInput}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              id="pass"
              name="password"
              required
              onChange={handleInput}
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" id="btn" value="Login" name="login"></input>
        </form>
      </div>
    </div>
  );
};

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./conponents/NavBar";
import { SideBar } from "./conponents/SideBar";
import { Login } from "./Login";

function App() {
  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;

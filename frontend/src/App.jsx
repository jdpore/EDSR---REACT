import "./App.css";
import { Login } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./conponents/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

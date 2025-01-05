import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Layout/Home";
import ResponsiveLayout from "./Tasks/Layout/ResponsiveLayout";
import Layout from "./Task2/Layout/Layout";
import Detail from "./Task3/Detail";
import ShoppingCart from "./Task4/cart/ShoppingCart";
import Order from "./Task4/cart/Order";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/responsive" element={<ResponsiveLayout />}></Route>
        <Route path="/grid" element={<Layout />}></Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
  
    </>
  );
}

export default App;

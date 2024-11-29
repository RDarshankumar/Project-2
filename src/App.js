import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Layout/Home";
import ResponsiveLayout from "./Tasks/Layout/ResponsiveLayout";
import Layout from "./Task2/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/responsive" element={<ResponsiveLayout />}></Route>
      <Route path="/grid" element={<Layout />}></Route>
    </Routes>
    
  );
}

export default App;

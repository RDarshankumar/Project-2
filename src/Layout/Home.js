import React from "react";
import Navbar from "../Components/Navbar";
import Menubar from "../Components/Menubar";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import { HomeOutdoorSection } from "../Components/HomeOutdoorSection";
import ElectronicsSection from "../Components/ElectronicsSection";
import Cloths from "../Components/Cloths";
import ExtraService from "../Components/ExtraService";
import Country from "../Components/Country";
import Search from "../Components/Search";
import Footer from "../Components/Footer";

import Layout from "../Task2/Layout/Layout";



const Home = () => {
  return (
    <div>
     
      
      <Navbar />
      <Menubar />
      <Hero />
      <Product />
      <HomeOutdoorSection />
      <ElectronicsSection />
      <Cloths />
      <ExtraService />
      <Country />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;

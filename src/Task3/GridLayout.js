import React from "react";
import NavigationTabs from "./navigation/NavigationTabs";
import ProductDetails from "./ProductDetails/ProductDetails";

import { RecommendationList } from "./productrecemdation/RecommendationList.js";
import { RelatedProducts } from "./relatedProduct/RelatedProducts.js";
import PromotionBanner from "./Banner/PromotionBanner.js";
import Footer from '../Components/Footer.js'
import Navbar from "../Components/Navbar.js";


const GridLayout = () => {
  return (
    
    <>
   
 
      <NavigationTabs />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-screen">
        {/* Column 1: Takes full width on small screens, 9/12 on medium+ screens */}
        <div className="col-span-12 md:col-span-9  ">
          <ProductDetails />
        </div>

        {/* Column 2: Takes full width on small screens, 3/12 on medium+ screens */}
        <div className="col-span-12 md:col-span-3 ">
          <RecommendationList />
        </div>
        
      </div>
      <RelatedProducts />
      <PromotionBanner />
      <Footer />
    </>
  );
};

export default GridLayout;

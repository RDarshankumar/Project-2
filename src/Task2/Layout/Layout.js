import React from "react";

import Navbar from "../../Components/Navbar";
import Menubar from "../../Components/Menubar";
import Search from "../../Components/Search";
import Footer from "../../Components/Footer";
import Gridpage from "../Gridpage";
import Breadcrumb from "../../Tasks/Breadcrumb";
import FilterSection from "../../Tasks/FilterSection";
import { MobileAccessoryHeader } from "../../mobileAccessory/MobileAccessoryHeader";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Menubar />
      <header className="text-white p-4 text-center">
        <Breadcrumb />
      </header>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center bg-gray-100">
        {/* Centered Container */}
        <div className="bg-white rounded-lg shadow-md w-full max-w-screen-lg p-6">
          <div className="flex">
            {/* Sidebar */}
            <aside className="bg-gray-200 w-64 p-4 hidden lg:block">
              <FilterSection />
            </aside>

            {/* Right Content */}
            <main className="flex-1 p-6">
              <MobileAccessoryHeader />
              <Gridpage />
            </main>
          </div>
        </div>
      </div>
      <Search />
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="bg-gray-50 p-4 rounded">
      <ol className="flex text-sm text-gray-500 space-x-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Home
          </a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Clothing
          </a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Men's Wear
          </a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li className="text-gray-500">Summer Clothing</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

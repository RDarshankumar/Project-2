import * as React from "react";

function NavigationTab({ label, isActive }) {
  return (
    <button
      className={`px-5 py-4 whitespace-nowrap ${
        isActive 
          ? "text-blue-600 border-b-2 border-solid border-b-blue-600" 
          : "border-b border-solid border-b-zinc-200"
      } ${label === "About seller" ? "px-8 max-md:px-5" : "px-5"}`}
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
    >
      {label}
    </button>
  );
}

export default NavigationTab;
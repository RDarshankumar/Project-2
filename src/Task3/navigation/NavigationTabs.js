import * as React from "react";
import NavigationTab from "./NavigationTab";

const tabs = [
  { label: "Description", isActive: true },
  { label: "Reviews", isActive: false },
  { label: "Shipping", isActive: false },
  { label: "About seller", isActive: false }
];

function NavigationTabs() {
  return (
    <nav className="flex flex-wrap pr-20 pl-2 text-base font-medium text-center text-gray-400 border-b border-solid border-b-zinc-200 max-md:pr-5" role="navigation">
      {tabs.map((tab, index) => (
        <NavigationTab
          key={index}
          label={tab.label}
          isActive={tab.isActive}
        />
      ))}
    </nav>
  );
}

export default NavigationTabs;
import * as React from "react";

const features = [
  "Metallic",
  "Plastic cover",
  "8GB Ram",
  "Super power",
  "Large Memory",
];

function FeatureList() {
  // State to track the selected features
  const [selectedFeatures, setSelectedFeatures] = React.useState({});

  // Handler to toggle checkbox state
  const handleCheckboxChange = (feature) => {
    setSelectedFeatures((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  return (
    <section>
      {/* Header */}
      <header className="flex gap-10 justify-center self-stretch py-3 mt-7 text-base font-semibold whitespace-nowrap border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Features</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d6a64b2abc63e2fe59fdf239b323de764929c65c91b90ec48612cfa8fbecaf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>

      {/* Feature List */}
      {features.map((feature, index) => (
        <div key={index} className="flex items-center py-1.5 pr-3 max-w-full">
          {/* Checkbox */}
          <input
            type="checkbox"
            id={`feature-${index}`}
            className="w-5 h-5 rounded-md border-2 border-solid border-stone-300 focus:ring-2 focus:ring-blue-500"
            checked={!!selectedFeatures[feature]}
            onChange={() => handleCheckboxChange(feature)}
          />
          {/* Label */}
          <label
            htmlFor={`feature-${index}`}
            className="ml-3 text-base text-zinc-900 cursor-pointer"
          >
            {feature}
          </label>
        </div>
      ))}

      {/* Button */}
      <button className="mt-2.5 text-base text-blue-600 hover:underline">
        See all
      </button>
    </section>
  );
}

export default FeatureList;

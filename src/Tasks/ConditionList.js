import * as React from "react";

const conditions = [
  { label: "Any", imageNum: "5" },
  { label: "Refurbished", imageNum: "6" },
  { label: "Brand new", imageNum: "6" },
  { label: "Old items", imageNum: "6" },
];

function ConditionList() {
  // State to track which conditions are checked
  const [selectedConditions, setSelectedConditions] = React.useState({});

  const handleCheckboxChange = (label) => {
    setSelectedConditions((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <section>
      <header className="flex gap-10 justify-center self-stretch py-3 mt-5 text-base font-semibold whitespace-nowrap border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Condition</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a88a26ee66acd1ef1abde6d4751f0a910f7f426a9fae9595ce61414dbfbcd433?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>
      {conditions.map((condition, index) => (
        <div
          key={index}
          className="flex items-center py-1.5 pr-4 text-base text-zinc-900"
        >
          {/* Checkbox on the left side */}
          <input
            type="checkbox"
            checked={selectedConditions[condition.label] || false}
            onChange={() => handleCheckboxChange(condition.label)}
            className="mr-3 w-5 h-5"
          />
          <img
            loading="lazy"
            src={`http://b.io/ext_${condition.imageNum}-`}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[34px]"
          />
          <span className="self-stretch my-auto">{condition.label}</span>
        </div>
      ))}
    </section>
  );
}

export default ConditionList;

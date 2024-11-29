import * as React from "react";
import { useNavigate } from "react-router-dom";

export function ViewToggle() {
  const [toggle, setToggle] = React.useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle); // Correct state update logic
    if (toggle) {
      navigate("/grid"); // Navigate conditionally based on the state
    } else {
      navigate("/responsive"); // Example: another route for toggle
    }
  };

  return (
    <button
      className="object-contain shrink-0 aspect-[1.9] w-[76px]"
      aria-label="Toggle view mode"
      onClick={handleToggle} // Attach click event to button
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08e6f2cb9f7815de2ee2b12b1f154bc03f8f48033d8672a0d49e8296c3b23f88?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
        className="w-full h-full"
        alt="Toggle View"
      />
    </button>
  );
}

import { useState } from "react";

function LightOn() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2
        style={{
          color: isOn ? "green" : "red"
        }}
      >
        Light {isOn ? "ON" : "OFF"}
      </h2>

      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}

export default LightOn 


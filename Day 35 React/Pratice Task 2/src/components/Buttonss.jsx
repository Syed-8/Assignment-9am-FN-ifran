import { useState } from "react";

function Buttonss() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h2 style={{ color: color }}>Color Changer</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

export default Buttonss;

import { useState } from "react";

export default function Player() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  function handleName() {
    if (input.trim() !== "") {
      setName(input);
      setInput("");
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name || "unknown user"}</h2>
      <p>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}

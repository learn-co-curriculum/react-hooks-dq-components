import React, { useRef, useState } from "react";
import dogs from "../data/dogs.mp3";

function Logo() {
  const [playing, setPlaying] = useState(false);

  const dogsOut = useRef(new Audio(dogs));

  function handleLogoClick() {
    if (!playing) {
      dogsOut.current.play();
      dogsOut.current.loop = true;
      document.body.classList.add("party-time");
    } else {
      dogsOut.current.pause();
      document.body.classList.remove("party-time");
    }
    setPlaying(!playing);
  }

  return (
    <h1 className="logo">
      <span onClick={handleLogoClick} role="img" aria-label="paw">
        🐾
      </span>
      Spawtify
    </h1>
  );
}

export default Logo;

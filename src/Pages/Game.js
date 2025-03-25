import React, { useState } from "react";
import Character from "../Components/Character";
import Clothes from "../Components/Clothes";

const Game = () => {
  const [outfit, setOutfit] = useState({});

  const handleSelectClothing = (type, image) => {
    setOutfit((prevOutfit) => ({
      ...prevOutfit,
      [type]: image,  // Dynamically add the item based on its type (hair, face, shirt)
    }));
  };

  return (
    <div className="App">
      {/* Character on the Left */}
      <div className="character-container">
        <Character outfit={outfit} />
      </div>

      {/* Clothing Items on the Right */}
      <div className="clothing-container">
        <Clothes image="/images/black Cape.png" type="shirt" onSelect={handleSelectClothing} />
        <Clothes image="/images/Purple Cape.png" type="shirt" onSelect={handleSelectClothing} />
        <Clothes image="/images/red Cape.png" type="shirt" onSelect={handleSelectClothing} />
        <Clothes image="/images/blond hair (1).png" type="hair" onSelect={handleSelectClothing} />
        <Clothes image="/images/brown hair.png" type="hair" onSelect={handleSelectClothing} />
        <Clothes image="/images/flower crown.png" type="hair" onSelect={handleSelectClothing} />
        <Clothes image="/images/face 1.png" type="face" onSelect={handleSelectClothing} />
        <Clothes image="/images/face 2.png" type="face" onSelect={handleSelectClothing} />
        <Clothes image="/images/face 3.png" type="face" onSelect={handleSelectClothing} />
      </div>
    </div>
  );
};

export default Game;

import React, { useState } from "react";
import Character from "../Components/Character";
import Faces from "../Components/Faces";  
import Bodies from "../Components/Body";  

const Game = () => {
  const [outfit, setOutfit] = useState({
    body: null,
    face: null,
  });

  const handleSelectItem = (type, image) => {
    setOutfit((prevOutfit) => ({
      ...prevOutfit,
      [type]: image,  // Ensure body and face don't overwrite each other
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
        <Bodies image="/images/body 1.png" type="body" onSelect={handleSelectItem} />
        <Bodies image="/images/body 2.png" type="body" onSelect={handleSelectItem} />
        <Bodies image="/images/body 3.png" type="body" onSelect={handleSelectItem} />
        <Bodies image="/images/body 4.png" type="body" onSelect={handleSelectItem} />
        <Bodies image="/images/head 1.png" type="face" onSelect={handleSelectItem} />
        <Faces image="/images/head 2.png" type="face" onSelect={handleSelectItem} />
        <Faces image="/images/head 3.png" type="face" onSelect={handleSelectItem} />
        <Faces image="/images/head 4.png" type="face" onSelect={handleSelectItem} />
        <Faces image="/images/head 5.png" type="face" onSelect={handleSelectItem} />
      </div>
    </div>
  );
};

export default Game;

const Character = ({ outfit }) => {
  return (
    <div className="character-container">
      {/* Base Character */}
      <img src="/images/character_base.png" alt="Character Base" className="character" />

      {/* Render Hair, Face, and Shirt */}
      {outfit.hair && <img src={outfit.hair} alt="Hair" className="outfit-item hair" />}
      {outfit.face && <img src={outfit.face} alt="Face" className="outfit-item face" />}
      {outfit.shirt && <img src={outfit.shirt} alt="Shirt" className="outfit-item shirt" />}
    </div>
  );
};

export default Character;

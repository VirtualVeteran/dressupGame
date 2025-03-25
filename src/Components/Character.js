const Character = ({ outfit }) => {
  return (
    <div className="character-container">
      <img className="character-base" src="/images/Character_base.png" alt="Character Base" />
      {outfit.body && <img className="body-type" src={outfit.body} alt="Body" />}
      {outfit.face && <img className="face-type" src={outfit.face} alt="Face" />}
    </div>
  );
};

export default Character;
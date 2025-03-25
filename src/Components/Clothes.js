const Clothes = ({ image, type, onSelect }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("clothingType", type);
    event.dataTransfer.setData("clothingImage", image);
  };

  return (
    <img
      src={image}
      alt={type}
      className="clothing-item"
      draggable="true"
      onDragStart={handleDragStart}
      onClick={() => onSelect(type, image)} // Clicking also selects the item
    />
  );
};

export default Clothes;

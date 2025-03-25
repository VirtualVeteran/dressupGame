const Faces = ({ image, type, onSelect }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("faceType", type);
    event.dataTransfer.setData("faceImage", image);
  };

  return (
    <img
      src={image}
      alt={type}
      className="face-item"
      draggable="true"
      onDragStart={handleDragStart}
      onClick={() => onSelect(type, image)} // Clicking also selects the item
    />
  );
};

export default Faces;

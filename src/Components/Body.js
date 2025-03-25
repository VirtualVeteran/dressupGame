const Bodies = ({ image, type, onSelect }) => {
    const handleDragStart = (event) => {
      event.dataTransfer.setData("bodyType", type);
      event.dataTransfer.setData("bodyImage", image);
    };
  
    return (
      <img
        src={image}
        alt={type}
        className="body-type"
        draggable="true"
        onDragStart={handleDragStart}
        onClick={() => onSelect(type, image)} // Clicking also selects the item
      />
    );
  };
  
  export default Bodies;
  
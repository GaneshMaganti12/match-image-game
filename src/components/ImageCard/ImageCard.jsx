import React from "react";
import "./ImageCard.css";

function ImageCard({ imagesList, activeImage }) {
  const { id, imageUrl, tab } = imagesList;

  const selectImage = () => {
    activeImage(id);
  };

  return (
    <li className="image-card" onClick={selectImage}>
      <img className="image-thumbnail" src={imageUrl} alt={tab} />
    </li>
  );
}

export default ImageCard;

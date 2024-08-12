import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import style from "./index.module.css";

const FlipCard = ({ imageUrl, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={style.carCard}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <img src={imageUrl} alt={name} className={carCardImg} />
        </div>
        {/* Back side */}
        <div className={style.carBack} onClick={handleClick}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;

import React from "react";

function AlbumCard({ name, image, genre }) {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button className="library">
          <span role="img" aria-label="heart">
            ♥
          </span>
        </button>
      </div>
      <div className="details">
        <h4 className="title">{name}</h4>
        <p>{genre}</p>
        <button className="play">
          <span role="img" aria-label="play">
            ▶
          </span>
        </button>
      </div>
    </div>
  );
}

export default AlbumCard;

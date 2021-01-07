import React from "react";

function MenuLinks() {
  return (
    <div className="side-menu">
      <ul>
        <li className="active">
          <span role="img" aria-label="home">
            🏚
          </span>
          Home
        </li>
        <li>
          <span role="img" aria-label="heart">
            ♥️
          </span>
          Favorites
        </li>
        <li>
          <span role="img" aria-label="plus">
            ➕
          </span>
          New Album
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;

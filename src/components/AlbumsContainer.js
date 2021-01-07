import React from "react";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";

function AlbumsContainer() {
  return (
    <main>
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default AlbumsContainer;

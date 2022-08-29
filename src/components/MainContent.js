import React from "react";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";

function MainContent() {
  return (
    <main>
      <GenrePicker />

      <AlbumList />
    </main>
  );
}

export default MainContent;

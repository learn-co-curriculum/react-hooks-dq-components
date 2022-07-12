import React from "react";
import GenrePicker from "./GenrePicker";
import AlbumLists from "./AlbumList";

function MainContent() {
  return <main>
            <GenrePicker /> 
            <AlbumLists />
          </main>;
}

export default MainContent;

import React from "react";
import Album from "./Album";
import { albums } from "../data/albums";

function AlbumList() {
  const albumItems = albums.map((album) => {
    return (
      <Album
        key={album.id}
        name={album.name}
        image={album.image}
        genre={album.genre}
      />
    );
  });

  return <section className="albums">{albumItems}</section>;
}

export default AlbumList;

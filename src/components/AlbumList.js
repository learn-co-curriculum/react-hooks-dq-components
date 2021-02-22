import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">
      <AlbumCard
        name="Classic Tuna Cans Being Opened"
        image="https://target.scene7.com/is/image/Target/GUEST_360eeed2-1747-4b15-8394-a22c7cd12230?wid=488&hei=488&fmt=pjpeg"
        genre="Cats"
      />
      <AlbumCard
        name="Delicious Birds"
        image="https://i.redd.it/6wq3pboygwg31.jpg"
        genre="Cats"
      />
      <AlbumCard
        name="Birds Are Friends, Not Food"
        image="https://www.thoughtco.com/thmb/ycJrhH6sAuWzS756yJXwBYKQiOE=/1414x1414/smart/filters:no_upscale()/GettyImages-531312698-0f7bfd887e6e4902abab0bf8475312e3.jpg"
        genre="Birds"
      />
      <AlbumCard
        name="Aloha K.K."
        image="https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Album_Cover-Aloha_K.K..png/revision/latest?cb=20200502231742"
        genre="Dogs"
      />
    </section>
  );
}

export default AlbumList;

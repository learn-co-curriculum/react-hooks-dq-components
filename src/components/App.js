import React from "react";
import AlbumsContainer from "./AlbumsContainer";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <AlbumsContainer />
    </div>
  );
}

export default App;

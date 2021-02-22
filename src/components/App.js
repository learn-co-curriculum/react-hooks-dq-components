import React from "react";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default App;

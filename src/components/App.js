import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
// import GenrePicker from "./GenrePicker";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      {/* <GenrePicker /> */}
      <MainContent />
      <SideMenu />
    </div>);
}

export default App;

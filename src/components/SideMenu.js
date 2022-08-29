import React from "react";
import Logo from "./Logo";
import MenuLink from "./MenuLinks";
import Search from "./Search";
function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLink />
      <Search />
    </aside>
  );
}

export default SideMenu;

import React from "react";
import Logo from "./Logo";
import MenuLink from "./MenuLinks";
function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLink />
    </aside>
  );
}

export default SideMenu;

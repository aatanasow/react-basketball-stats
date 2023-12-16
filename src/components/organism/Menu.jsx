import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/"}>General</NavLink>
          </li>
          <li>
            <NavLink to={"/point-per-game"}>Points per game</NavLink>
          </li>
          <li>
            <NavLink to={"/points-by-player"}>Points by player</NavLink>
          </li>
          <li>
            <NavLink to={"/points-per-minutes"}>Points per minutes</NavLink>
          </li>
          <li>
            <NavLink to={"/points-by-team"}>Points by team</NavLink>
          </li>
          <li>
            <NavLink to={"/top-player-by-team"}>Top player by team</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Menu;

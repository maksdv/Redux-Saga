import React from "react";
import { ligaCoockie } from "../../App";
import { useCookies } from "react-cookie";

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies([ligaCoockie]);
  const handleLogout = () => {
    removeCookie(ligaCoockie);
  };
  return (
    <header>
      <h2>Header</h2>
      {cookies[ligaCoockie] ? (
        <p onClick={() => handleLogout()}>logout</p>
      ) : (
        <p></p>
      )}
    </header>
  );
};

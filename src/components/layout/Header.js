import React from "react";
import { useUserList } from "../../customHooks/useUserList";

export const Header = () => {
  const { data, loading } = useUserList();
  console.log(data);
  return (
    <header>
      <h2>Header</h2>
    </header>
  );
};

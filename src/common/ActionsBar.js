import React from "react";

export const ActionsBar = ({ del, edit }) => {
  return (
    <div>
      <span onClick={() => del()}>Delete</span>
      <span onClick={() => edit()}>Save</span>
    </div>
  );
};

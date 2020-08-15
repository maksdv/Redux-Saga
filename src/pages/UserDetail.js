import React from "react";
import { useHistory } from "react-router-dom";
export const UserDetail = ({ auth }) => {
  const history = useHistory();
  console.log(history.location.state.data);
  if (!auth) {
    history.replace("/");
  }
  return (
    <div>
      <div onClick={() => history.goBack()}>
        <p>goback</p>
      </div>
      <p>detail</p>
    </div>
  );
};

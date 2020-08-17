import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserInfo } from "../components/user/UserInfo";
import { ActionsBar } from "../common/ActionsBar";
import { deleteUser } from "../api/delete";

export const UserDetail = ({ auth }) => {
  const history = useHistory();
  const userInfo = history.location.state.data;
  const [deleted, setDeleted] = useState(false);

  if (!auth) {
    history.replace("/");
  }

  const handleDelete = () => {
    try {
      deleteUser(userInfo.id).then(resp => console.log(resp));
    } catch (error) {
      console.log("errr", error);
    }
  };
  return (
    <div>
      <div onClick={() => history.goBack()}>
        <p>goback</p>
      </div>

      {!deleted ? (
        <div>
          <UserInfo userInfo={userInfo} />
          <ActionsBar del={handleDelete} edit={handleDelete} />
        </div>
      ) : (
        <p>El usuario ha sido eliminado</p>
      )}
    </div>
  );
};

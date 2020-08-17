import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserInfo } from "../components/user/UserInfo";
import { ActionsBar } from "../components/common/ActionsBar";
import { putDelete, update } from "../stores/functions";
import { connect } from "react-redux";

let UserDetail = (props) => {
  const { auth, putDelete, update } = props;
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(history.location.state.data);

  if (!auth) {
    history.replace("/");
  }

  const handleDelete = () => {
    try {
      putDelete(userInfo.id);
    } catch (error) {
      console.log("errr", error);
    }
  };

  const handleSave = () => {
    update(userInfo);
  };
  return (
    <div>
      <div>
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        <ActionsBar del={handleDelete} edit={handleSave} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  update: update,
  putDelete: putDelete,
};

UserDetail = connect(null, mapDispatchToProps)(UserDetail);
export default UserDetail;

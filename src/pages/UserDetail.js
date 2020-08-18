import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserInfo } from "../components/user/UserInfo";
import { ActionsBar } from "../components/common/ActionsBar";
import { putDelete, update } from "../stores/functions";
import { connect } from "react-redux";
import Succes from "../components/common/Succes";

let UserDetail = (props) => {
  const { state, putDelete, update } = props;
  const [deleted, setDelete] = useState(false);
  const history = useHistory();

  const [userInfo, setUserInfo] = useState(
    history.location.state ? history.location.state.data : null
  );

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
      {state.deleted !== userInfo.id ? (
        <div>
          <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
          <ActionsBar del={handleDelete} edit={handleSave} />
        </div>
      ) : (
        <Succes text={"User successfully deleted!"} />
      )}
    </div>
  );
};

const mapDispatchToProps = {
  update: update,
  putDelete: putDelete,
};

const mapStatetoProps = (state) => ({
  state: state,
});

UserDetail = connect(mapStatetoProps, mapDispatchToProps)(UserDetail);
export default UserDetail;

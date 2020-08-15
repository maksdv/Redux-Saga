import React from "react";
import { useHistory } from "react-router-dom";
import { StyledUserDetail } from "../styles/styled";
import EdiText from "react-editext";

export const UserDetail = ({ auth }) => {
  const history = useHistory();
  const userInfo = history.location.state.data;

  if (!auth) {
    history.replace("/");
  }
  return (
    <div>
      <div onClick={() => history.goBack()}>
        <p>goback</p>
      </div>
      <StyledUserDetail className="detailContainer">
        <img src={userInfo.avatar} />
        <div className="infoContainer flex">
          <div>
            <p>Name:</p>
            <p>Surname:</p>
            <p>Email:</p>
          </div>
          <div>
            <EdiText
              type="text"
              value={userInfo.first_name}
              onSave={() => console.log("..")}
            />
            <EdiText
              type="text"
              value={userInfo.last_name}
              onSave={() => console.log("..")}
            />
            <EdiText
              type="text"
              value={userInfo.email}
              onSave={() => console.log("..")}
            />
          </div>
        </div>
      </StyledUserDetail>
    </div>
  );
};

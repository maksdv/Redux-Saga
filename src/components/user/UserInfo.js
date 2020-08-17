import React from "react";
import { StyledUserDetail } from "../../styles/styled";
import EdiText from "react-editext";

export const UserInfo = ({ userInfo }) => {
  return (
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
  );
};

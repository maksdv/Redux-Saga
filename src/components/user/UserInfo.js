import React from "react";
import { StyledUserDetail } from "../../styles/styled";
import EdiText from "react-editext";

export const UserInfo = ({ userInfo, setUserInfo }) => {
  let user = userInfo;
  const handleSave = (field, value) => {
    user[field] = value;
    setUserInfo(user);
  };
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
            onSave={(a) => handleSave("first_name", a)}
            className="editText"
          />
          <EdiText
            type="text"
            value={userInfo.last_name}
            onSave={(a) => handleSave("last_name", a)}
            className="editText"
          />
          <EdiText
            type="text"
            value={userInfo.email}
            onSave={(a) => handleSave("email", a)}
            className="editText"
          />
        </div>
      </div>
    </StyledUserDetail>
  );
};

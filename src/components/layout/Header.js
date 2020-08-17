import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogout } from "../../stores/functions";
import { Button } from "../common/Button";
import { WelcomeComponent } from "../common/WelcomeComponents";
import { StyledContainer } from "../../styles/styled";
import { useHistory } from "react-router-dom";

let Header = (props) => {
  const history = useHistory();
  const { doLogout, setLogued, logued, usersList } = props;
  const handleLogout = () => {
    doLogout();
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) setLogued(false);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const getOwnUser = () => {
    if (!usersList) return {};
    const loguedMail = sessionStorage.getItem("mailLogued");
    return usersList.filter((user) => user.email === loguedMail);
  };

  return (
    <header>
      {logued && (
        <div>
          <StyledContainer>
            <Button
              action={handleGoBack}
              label="Back"
              color="green"
              id="headerButton"
            />

            <Button
              action={handleLogout}
              label="LogOut"
              color="red"
              id="headerButton"
            />
          </StyledContainer>
          <WelcomeComponent user={getOwnUser()[0]} />
        </div>
      )}
    </header>
  );
};

const mapDispatchToProps = {
  doLogout: doLogout,
};

const mapStateToProps = (state) => ({
  usersList: state.users,
});

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;

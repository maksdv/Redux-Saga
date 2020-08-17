import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { getLogin, persistLogin } from "../../stores/functions";
import { StyledForm, StyledInput, StyledButton } from "../../styles/styled";

let Login = (props) => {
  const [email, setEmail] = useState("janet.weaver@reqres.in");
  const [password, setPass] = useState("");

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (userToken) {
      props.persistLogin(userToken);
      props.setLogued(true);
    }
  }, [props.loggedIn]);

  const handleLogin = () => {
    try {
      props.getLogin({ email: email, password: password });
      sessionStorage.setItem("mailLogued", email);
    } catch (error) {
      // Here we can send an email for register the error log
      console.log(error);
    }
  };

  return (
    <StyledForm>
      <div className="inputsContainer">
        <StyledInput
          type="text"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StyledInput
          type="text"
          name="pass"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <StyledButton
          onClick={() => handleLogin()}
          className="blue"
          disabled={!email || !password}
        >
          <span>Login</span>
        </StyledButton>
      </div>
    </StyledForm>
  );
};
const mapDispatchToProps = {
  getLogin: getLogin,
  persistLogin: persistLogin,
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

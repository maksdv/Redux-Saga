import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { getLogin, persistLogin } from "../../stores/functions";

let Login = props => {
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
    } catch (error) {
      // Here we can send an email for register the error log
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            name="name"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="pass"
            value={password}
            onChange={e => setPass(e.target.value)}
          />
        </label>
        <div onClick={() => handleLogin()}>okkok</div>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  getLogin: getLogin,
  persistLogin: persistLogin
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

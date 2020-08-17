import React, { useState } from "react";
import { login } from "../../api/login";
import { useCookies } from "react-cookie";
import { StyledForm, StyledInput, StyledButton } from "../../styles/styled";

export const Login = () => {
  const [email, setEmail] = useState("janet.weaver@reqres.in");
  const [pass, setPass] = useState("");
  const [cookies, setCookie] = useCookies(["ligaLogued"]);
  const handleLogin = () => {
    try {
      login({ email: email, password: pass }).then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else if (resp.token) {
          setCookie("ligaLogued", resp.token);
        }
      });
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <StyledButton
          onClick={() => handleLogin()}
          primary
          disabled={!email || !pass}
        >
          <span>Login</span>
        </StyledButton>
      </div>
    </StyledForm>
  );
};

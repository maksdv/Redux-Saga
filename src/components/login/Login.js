import React, { useState } from "react";
import { login } from "../../api/login";
import { useCookies } from "react-cookie";

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
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <div onClick={() => handleLogin()}>okkok</div>
      </form>
    </div>
  );
};

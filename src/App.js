import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetail } from "./pages/UserDetail";
import { Header } from "./components/layout/Header";
import { Login } from "./components/login/Login";
import { useCookies } from "react-cookie";

export const ligaCoockie = "ligaLogued";

const App = () => {
  const [cookies, setCookie] = useCookies([ligaCoockie]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            !!cookies[ligaCoockie] ? <Home {...props} /> : <Login />
          }
        />
        <Route
          path="/user-detail"
          exact
          render={(props) => (
            <UserDetail auth={!!cookies[ligaCoockie]} {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;

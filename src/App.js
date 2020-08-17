import React from "react";
import { useEffect, useState } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import { persistLogin } from "./stores/functions";

export const ligaCoockie = "ligaLogued";

const App = () => {
  const [logued, setLogued] = useState(false);

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (userToken) {
      persistLogin(userToken);
      setLogued(true);
    }
  }, []);

  return (
    <Router>
      <Header setLogued={setLogued} logued={logued} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            logued ? <Home {...props} /> : <Login setLogued={setLogued} />
          }
        />
        <Route
          path="/user-detail"
          exact
          render={(props) => <UserDetail auth={logued} {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;

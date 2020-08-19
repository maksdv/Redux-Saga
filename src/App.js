import React from "react";
import { useEffect, useState } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import { persistLogin } from "./stores/functions";
import { PrivateRoute } from "./components/utils/PrivateRoute";

const App = () => {
  const [logued, setLogued] = useState(false);
  const userToken = sessionStorage.getItem("userToken");

  useEffect(() => {
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
        <PrivateRoute
          path="/user-detail"
          token={userToken}
          component={UserDetail}
        />
      </Switch>
    </Router>
  );
};

export default App;

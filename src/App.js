import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetail } from "./pages/UserDetail";
import { Header } from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home auth={true} {...props} />}
        />
        <Route
          path="/user-detail"
          exact
          render={(props) => <UserDetail auth={true} {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetail } from "./pages/UserDetail";
import { Header } from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user-detail" exact>
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

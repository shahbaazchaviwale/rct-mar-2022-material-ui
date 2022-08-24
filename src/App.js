import React, { Fragment } from "react";
import Maincontainer from "./components/UI/main-container";
import Topbar from "./components/UI/topbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Pages/Login";

function App() {
  return (
    <Fragment>
      <Topbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Fragment>
  );
}

export default App;

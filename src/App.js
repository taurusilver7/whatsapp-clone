import React, { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./context/reducer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route exact path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route exact path="/">
                <Sidebar />
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;

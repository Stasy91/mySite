import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavList from "./components/NavList/NavList";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="container">
      <div className="appwrapper">
        <Header />
        <NavList />
        <Profile />
      </div>
    </div>
  );
};

export default App;

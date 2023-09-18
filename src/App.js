import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import NavList from "./components/NavList/NavList";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appwrapper}>
        <Header />
        <NavList />
        <div className={s.appwrapper_content}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import NavList from "./components/NavList/NavList";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import USERS_INFO from "./stores/USERS_INFO/USERS_INFO";
import PROFILE_INFO from "./stores/PROFILE_INFO/PROFILE_INFO";
import POSTS_DATA from "./stores/POSTS_DATA/POSTS_DATA";

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appwrapper}>
        <Header />
        <NavList profileInfo={PROFILE_INFO} />
        <div className={s.appwrapper_content}>
          <Routes>
            <Route
              path="/dialogs/:id"
              element={<Dialogs usersInfo={USERS_INFO} />}
            />
            <Route
              path="/dialogs/"
              element={<Dialogs usersInfo={USERS_INFO} />}
            />
            <Route
              path="/profile"
              element={
                <Profile posts={POSTS_DATA} profileInfo={PROFILE_INFO} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

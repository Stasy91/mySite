import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import NavList from "./components/NavList/NavList";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DIALOG_DATA from "./stores/DialogData/DIALOG_DATA";
import PROFILE_INFO from "./stores/PROFILE_INFO/PROFILE_INFO";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appwrapper}>
        <Header />
        <NavList profileInfo={PROFILE_INFO} />
        <div className={s.appwrapper_content}>
          <Routes>
            <Route
              path="/dialogs/:id"
              element={<Dialogs dataDialog={DIALOG_DATA} />}
            />
            <Route
              path="/dialogs/"
              element={<Dialogs dataDialog={DIALOG_DATA} />}
            />
            <Route
              path="/profile"
              element={
                <Profile posts={props.posts} profileInfo={PROFILE_INFO} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

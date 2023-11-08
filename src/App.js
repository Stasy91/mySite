import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import NavList from "./components/NavList/NavList";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appwrapper}>
        <Header />
        <NavList profileInfo={props.state.profileInfo} />
        <div className={s.appwrapper_content}>
          <Routes>
            <Route
              path="/dialogs/:id"
              element={<Dialogs usersInfo={props.state.usersInfo} />}
            />
            <Route
              path="/dialogs/"
              element={<Dialogs usersInfo={props.state.usersInfo} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.posts}
                  profileInfo={props.state.profileInfo}
<<<<<<< HEAD
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                  newTextPost={props.state.profilePage.newTextPost}
=======
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

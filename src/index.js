import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import state, { subscribe } from "./redux/state";
import { addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);

export default renderEntireTree;




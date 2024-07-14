// src/App.jsx
import React from "react";
import UserInfo from "./components/UserInfo";

const App = ({ username }) => {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <UserInfo username={username} />
    </div>
  );
};

export default App;

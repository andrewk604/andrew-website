/* eslint-disable */
import React, { useEffect } from "react";
import UserApi from "../../api/user-api";

let RouterApp = () => {
  return (
    <div>
      <button onClick={UserApi.getCurrentUser}>Get Current User Test</button>
      <button
        onClick={() => {
          UserApi.login({ username: "user", password: "password" });
        }}
      >
        Login Test
      </button>
    </div>
  );
};

export default RouterApp;

/* eslint-enable */

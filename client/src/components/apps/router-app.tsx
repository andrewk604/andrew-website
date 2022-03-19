/* eslint-disable */
import React, { useEffect } from "react";
import UserApi from "../../api/user-api";
import AdminApp from "./admin-app";
import GuestApp from "./guest-app";
import UserApp from "./user-app";
import { getStorage, putStorage } from "../hooks/useStorage";

let RouterApp = () => {
  let userRole = getStorage(`role`);

  useEffect(async () => {
    await UserApi.getCurrentUser();
    userRole = getStorage(`role`);
    console.log(userRole);
  }, []);

  let route = GuestApp;

  switch (userRole) {
    case "GUEST":
      route = GuestApp;
      break;
    case "USER":
      route = UserApp;
      break;
    case "ADMIN":
      route = AdminApp;
      break;
    default:
      route = GuestApp;
      break;
  }

  return <>Router app</>;
};

export default RouterApp;

/* eslint-enable */

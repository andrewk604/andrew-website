/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserApi from "../../api/user-api";
import AdminApp from "./admin-app";
import GuestApp from "./guest-app";
import UserApp from "./user-app";
import Alerts from "../templates/alerts";

import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";

import { getStorage, putStorage } from "../../hooks/useStorage";

import styled from "styled-components";
import { Frame } from "../templates/styled-templates";

let RouterApp = () => {
  let [userRole, setUserRole] = useState(getStorage(`role`));

  useEffect(() => {
    const getUser = async () => {
      await UserApi.getCurrentUser();
    };
    getUser();
  }, []);

  window.addEventListener(`storage`, async (event) => {
    if (event.key == "auth_token" || event.key == "role") {
      await UserApi.getCurrentUser();
      setUserRole(getStorage(`role`));
    }
  });

  let route = {
    USER: <UserApp />,
    GUEST: <GuestApp />,
    ADMIN: <AdminApp />
  }?.[userRole ?? `GUEST`];

  return (
    <BrowserRouter>
      <Wrapper>
        <Alerts />
        <Routes>
          <Route path="/" element={route} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
`;

export default RouterApp;

/* eslint-enable */

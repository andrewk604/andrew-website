/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserApi from "../../api/user-api";
import AdminApp from "./admin-app";
import GuestApp from "./guest-app";
import UserApp from "./user-app";
import { getStorage, putStorage } from "../../hooks/useStorage";

import styled from "styled-components";
import { Frame } from "../../components/templates/styled-templates";

let RouterApp = () => {
  let [userRole, setUserRole] = useState(getStorage(`role`));
  let [route, setRoute] = useState(GuestApp);

  useEffect(async () => {
    await UserApi.getCurrentUser();
  }, []);

  window.addEventListener(`update storage`, () => {
    setUserRole(getStorage(`role`));
  });

  let route: any = GuestApp;

  switch (userRole) {
    case "GUEST":
      setRoute(GuestApp);
      break;
    case "USER":
      setRoute(UserApp);
      break;
    case "ADMIN":
      setRoute(AdminApp);
      break;
    default:
      setRoute(GuestApp);
      break;
  }

  console.log(route);

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={route} />
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
  background: blue;
`;

export default RouterApp;

/* eslint-enable */

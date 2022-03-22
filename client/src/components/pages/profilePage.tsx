/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Redirect, useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  Frame,
  Workspace,
  Input,
  Form,
  Text,
  H1,
  Button,
  StyledLink
} from "../templates/styled-templates";

import UserApi from "../../api/user-api";
import {
  getStorage,
  getComplicatedStorage,
  putStorage
} from "../../hooks/useStorage";
import AlertsService from "../../services/alerts-service";

import Header from "../templates/header";

let ProfilePage = () => {
  const user = getComplicatedStorage(`user`);

  return (
    <Wrapper>
      <Header />
      <AppInfo column>
        <Avatar></Avatar>
        <Frame
          extra={`font-size: 2.5ren; font-weight: 700; letter-spacing: 2px;`}
        >
          {user.username}
        </Frame>
      </AppInfo>
      <Button onClick={UserApi.logout}>Logout</Button>
      <Workspace>Profile page</Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)``;

const AppInfo = styled(Frame)`
  width: 100vw;
  background: #f3f3f3;
  height: 230px;
  justify-content: space-evenly;
`;

const Avatar = styled(Frame)`
  background: url("https://api.realworld.io/images/smiley-cyrus.jpeg");
  border-radius: 50%;
  width: 125px;
  height: 125px;
`;

export default ProfilePage;

/* eslint-enable */

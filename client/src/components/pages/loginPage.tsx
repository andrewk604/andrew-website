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
import { getStorage } from "../../hooks/useStorage";
import AlertsService from "../../services/alerts-service";

import Header from "../templates/header";

let LoginPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let loginCheck = () => {
    if (username == "" || password.length < 8) return false;
    return true;
  };

  return (
    <Wrapper>
      <Header />
      <Workspace extra={`justify-content: center;`}>
        <H1 extra={`margin-bottom: 2rem;`}>Log in</H1>
        <Text extra={`margin-bottom: 25px; border-bottom: 1px solid #5cb85c;`}>
          <StyledLink style={{ color: `#5cb85c` }} to="/signup">
            Need an account?
          </StyledLink>
        </Text>
        <Form>
          <Input
            type="text"
            placeholder="enter your nickname"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button
          extra={`width: 200px; height: 50px;`}
          onClick={async (e) => {
            if (loginCheck()) {
              console.log(`before req`);
              await UserApi.login({
                username: username,
                password: password
              });
              console.log(getStorage(`initialized`));
              if (getStorage(`initialized`) == `true`) {
                navigate("/");
              }
              if (getStorage(`initialized`) == `false`) {
                AlertsService.showError(
                  `Username or password are not correct, try again...`
                );
              }
            }
          }}
        >
          Log in
        </Button>
      </Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)`
  height: 100vh;
  position: relative;
`;

export default LoginPage;

/* eslint-enable */

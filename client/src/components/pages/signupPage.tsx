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

import Header from "../templates/header";

let SignupPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();

  let registerCheck = () => {
    if (username == "" || password.length < 8 || rePassword !== password)
      return false;
    return true;
  };

  return (
    <Wrapper>
      <Header />
      <Workspace extra={`justify-content: center;`}>
        <H1 extra={`margin-bottom: 2rem;`}>Sign up</H1>
        <Text extra={`margin-bottom: 25px; border-bottom: 1px solid #5cb85c;`}>
          <StyledLink style={{ color: `#5cb85c` }} to="/login">
            Already have an account?
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
          <Input
            type="password"
            placeholder="re-enter your password"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Form>
        <Button
          extra={`width: 200px; height: 50px;`}
          onClick={async (e) => {
            if (registerCheck()) {
              await UserApi.register({
                username: username,
                password: password
              });
            }
            if (getStorage(`initialized`) == "true") {
              navigate("/");
            }
            // if (getStorage(`intialized`) == `false`)
          }}
        >
          Sign up
        </Button>
      </Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)`
  height: 100vh;
  position: relative;
`;

export default SignupPage;

/* eslint-enable */

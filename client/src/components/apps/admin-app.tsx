/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame, Workspace } from "../templates/styled-templates";
import Header from "../templates/header";

let AdminApp = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <AppInfo column>
        <Frame
          extra={`font-weight: 700; font-size: 3.5rem; color: #fff; letter-spacing: 5px;`}
        >
          blog app
        </Frame>
        <Frame
          extra={`font-size: 18px; color: #fff; font-weight: 300; letter-spacing: 5px;`}
        >
          A place to share knowledge
        </Frame>
      </AppInfo>
      <Workspace>
        <Title>Admin app</Title>
      </Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)``;
const Title = styled(Frame)``;
const AppInfo = styled(Frame)`
  width: 100vw;
  background: #5cb85c;
  height: 180px;
  justify-content: space-evenly;
`;

export default AdminApp;

/* eslint-enable */

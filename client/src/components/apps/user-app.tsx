/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame } from "../templates/styled-templates";
import Header from "../templates/header";

let UserApp = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <Title>User app app</Title>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)``;
const Title = styled(Frame)``;

export default UserApp;

/* eslint-enable */

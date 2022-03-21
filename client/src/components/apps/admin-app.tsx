/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame } from "../templates/styled-templates";
import Header from "../templates/header";

let AdminApp = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <Title>Admin admin app</Title>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)``;
const Title = styled(Frame)``;

export default AdminApp;

/* eslint-enable */

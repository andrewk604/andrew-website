import React from "react";
import styled, { css } from "styled-components";

export const Frame = styled.div.attrs((props) => ({
  ...props
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? `row` : `column`)};
  transition: 0.2s;
  font-size: 18px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 4vw;
  }
  ${(props) => props.extra}
`;

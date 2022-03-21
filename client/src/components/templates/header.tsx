/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Frame,
  Workspace,
  StyledLink
} from "../../components/templates/styled-templates";
import { getStorage, putStorage } from "../../hooks/useStorage";

let Header = (props) => {
  let [tab, setTab] = useState("home");
  let [role, setRole] = useState(getStorage(`role`));

  let path = useLocation().pathname.split("/").slice(1);

  const LinkProperties = {
    textDecoration: `none`,
    color: `black`
  };

  const HeaderTabs = [
    {
      name: `HomeTab`,
      title: "Home",
      to: "/"
    },
    {
      name: `LoginTab`,
      title: "Log in",
      to: "/login",
      role: "GUEST"
    },
    {
      name: `RegisterTab`,
      title: "Sign up",
      to: "/singup",
      role: "GUEST"
    }
  ];

  let HeaderItems = [];

  switch (role) {
    case "GUEST":
      HeaderItems = [
        {
          name: `HomeTab`,
          title: "Home",
          to: "/"
        },
        {
          name: `LoginTab`,
          title: "Log in",
          to: "/login",
          role: "GUEST"
        },
        {
          name: `RegisterTab`,
          title: "Sign up",
          to: "/signup",
          role: "GUEST"
        }
      ];
      break;
    case "USER":
      HeaderItems = [
        {
          name: `HomeTab`,
          title: "Home",
          to: "/"
        }
      ];
      break;
    case "ADMIN":
      HeaderItems = [
        {
          name: `HomeTab`,
          title: "Home",
          to: "/"
        }
      ];
      break;
    default:
      HeaderItems = [
        {
          name: `HomeTab`,
          title: "Home",
          to: "/"
        },
        {
          name: `LoginTab`,
          title: "Log in",
          to: "/login",
          role: "GUEST"
        },
        {
          name: `RegisterTab`,
          title: "Sign up",
          to: "/signup",
          role: "GUEST"
        }
      ];
      break;
  }

  return (
    <Wrapper>
      <Workspace>
        <Frame
          row
          extra={`justify-content: space-between; align-items: center; width: 100%; height: 100%; `}
        >
          <Frame>
            <Link to="/" style={LinkProperties}>
              <Logo>Blog app</Logo>
            </Link>
          </Frame>
          <Tabs row>
            {HeaderItems.map((i, id) => {
              return (
                <HeaderTab key={i.name}>
                  <StyledLink to={i.to}>{i.title}</StyledLink>
                </HeaderTab>
              );
            })}
          </Tabs>
        </Frame>
      </Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)`
  width: 100%;
  height: 72px;
`;

const Logo = styled(Frame)`
  align-items: center;
  height: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  color: #5cb85c;
  :hover {
    cursor: pointer;
  }
`;

const Tabs = styled(Frame)`
  height: 100%;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const HeaderTab = styled(Frame)`
  :hover {
    cursor: pointer;
  }
`;

export default Header;

/* eslint-enable */

/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame, Workspace, Text, Title } from "../templates/styled-templates";
import Header from "../templates/header";

const posts = [
  {
    title: "post1",
    date: "March 21, 2022",
    author: "author0",
    description: "post1 description",
    tags: [`tag1`, `tag2`],
    likes: 1000
  },
  {
    title: "post1",
    date: "March 21, 2022",
    author: "author1",
    description: "post1 description",
    tags: [`tag1`, `tag2`],
    likes: 100
  },
  {
    title: "post1",
    date: "March 21, 2022",
    author: "author2",
    description: "post1 description",
    tags: [`tag1`, `tag3`],
    likes: 500
  },
  {
    title: "post1",
    date: "March 21, 2022",
    author: "author3",
    description: "post1 description",
    tags: [`tag1`, `tag4`],
    likes: 600
  }
];

let FeedComponent = () => {
  return (
    <Feed row>
      <LeftBar column>
        <Text extra={`border-bottom: 2px solid #5CB85C`}>Global Feed</Text>
        <Posts column>
          {posts.map((i, id) => {
            return (
              <Post key={id} column>
                <Frame row extra={`height: 100%; padding-bottom: 30px;`}>
                  <Avatar></Avatar>
                  <Frame
                    extra={`align-items: flex-start; margin-left: 10px;`}
                    column
                  >
                    <Frame extra={`color: #5CB85C;`}>{i.author}</Frame>
                    <Frame extra={`color: #bbb;`}>{i.date}</Frame>
                  </Frame>
                </Frame>
                <Frame>{i.title}</Frame>
                <Frame extra={`color: #bbb;`}>{i.description}</Frame>
              </Post>
            );
          })}
        </Posts>
      </LeftBar>
      <SideBar>SideBar</SideBar>
    </Feed>
  );
};

const Feed = styled(Frame)`
  max-width: 1200px;
  width: 85vw;
  justify-content: flex-start;
  margin-top: 50px;
  color: #5cb85c;
  cursor: pointer;
`;

const LeftBar = styled(Frame)`
  width: 75%;
  align-items: flex-start;
`;
const SideBar = styled(Frame)``;
const Posts = styled(Frame)`
  align-items: flex-start;
  width: 100%;
`;
const Post = styled(Frame)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 85%;
  align-items: flex-start;
  padding-top: 50px;
  padding-bottom: 20px;
`;
const Avatar = styled(Frame)`
  width: 32px;
  height: 32px;
  background: url("https://api.realworld.io/images/demo-avatar.png");
  border-radius: 50%;
`;

export default FeedComponent;

/* eslint-disable */

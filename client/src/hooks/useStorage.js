/* eslint-disable */
import React, { useState, useEffect } from "react";
import { eventDispatch } from "./useEvents";

export let putStorage = (path, value) => {
  localStorage.setItem(
    path,
    path == `auth_token` ? value : JSON.stringify(value)
  );
  eventDispatch(`local-storage`, {});
};

export let getStorage = (path) => {
  let item = localStorage.getItem(path);
  return item;
};

export let getComplicatedStorage = (path) => {
  return JSON.parse(localStorage.getItem(path));
};

/* eslint-enable */

/* eslint-disable */
import React, { useState, useEffect } from "react";
import { eventDispatch } from "./useEvents";

export let putStorage = (path, value) => {
  localStorage.setItem(path, value);
  eventDispatch(`update storage`, {});
};

export let getStorage = (path) => {
  let item = localStorage.getItem(path);
  return item;
};

/* eslint-enable */

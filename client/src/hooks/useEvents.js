/* eslint-disable */
import React, { useState, useEffect } from "react";

export let useEventListener = (key, handler) => {
  useEffect(() => {
    window.addEventListener(key, handler);
    return () => {
      window.removeEventListener(key, handler);
    };
  });
};

export let eventDispatch = (key, detail) => {
  window.dispatchEvent(new CustomEvent(key, { detail }));
};

/* eslint-enable */

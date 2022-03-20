/* eslint-disable */
import React, { useState, useEffect } from "react";

export let useEventListener = (key, handler, options) => {
  useEffect(() => {
    window.addEventListener(key, handler, options);
    return () => {
      window.removeEventListener(key, handler, options);
    };
  });
};

export let eventDispatch = (key, detail) => {
  window.dispatchEvent(new CustomEvent(key, { detail }));
};

/* eslint-enable */

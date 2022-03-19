/* eslint-disable */
import React, { useState, useEffect } from "react";

export let eventDispatch = (key, detail) => {
  window.dispatchEvent(new CustomEvent(key, { detail }));
};

/* eslint-enable */

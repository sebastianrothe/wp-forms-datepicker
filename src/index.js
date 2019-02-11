let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import React, { Fragment } from 'react'
React.Fragment = 'x-fragment'

import App from "./components/app";

let _habitat = habitat(App);

_habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true
});

import * as React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { routes } from "routes/index";

const mountNode = document.querySelector("#root");
const router = <Router history={browserHistory} routes={routes} />;
render(router, mountNode);
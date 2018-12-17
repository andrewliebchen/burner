import { BrowserRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/App";
import React from "react";

import "../imports/startup/accounts-config.js";

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("render-target")
  );
});

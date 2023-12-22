// App.js
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import { UserProvider } from "../src/userID/userID";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <UserProvider>
    <HomePage />
  </UserProvider>,
  rootElement
);

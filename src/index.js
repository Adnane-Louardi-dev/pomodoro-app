import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import History from "./History";
import "./index.css";
import Circle from "./Circle.js";
import GoalSettings from "./GoalSettings";
import Navbar from "./navbar/Navbar";

const Index = () => {
   return (
      <>
         {/* <Navbar /> */}
         <Circle />
      </>
   );
};
ReactDOM.render(<Index />, document.getElementById("root"));

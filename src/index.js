import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import History from "./History";
import "./index.css";
import Circle from "./Circle.js";
import GoalSettings from "./GoalSettings";
// import Navbar from "./navbar/Navbar";

const Index = () => {
   return (
      <>
         {/* <Navbar /> */}
         <Router history={History}>
            <Route path="/goalsettings">
               <GoalSettings />
            </Route>
            <Route path="/home">
               <Circle />
            </Route>
         </Router>
      </>
   );
};
ReactDOM.render(<Index />, document.getElementById("root"));

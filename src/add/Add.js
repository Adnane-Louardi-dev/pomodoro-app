import React from "react";
import History from "../History";
import "./add.css";
const Add = () => {
   return (
      <div
         className="float-right m-3 fixed-bottom  "
         onClick={(e) => {
            e.preventDefault();
            History.push("/goalsettings");
         }}
      >
         <a href="/" className="float">
            <i className="fa fa-plus my-float"></i>
         </a>
      </div>
   );
};

export default Add;

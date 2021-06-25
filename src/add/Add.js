import React from "react";
import { Link } from "react-router-dom";
import "./add.css";
const Add = () => {
   return (
      <Link to="/goalsettings">
         <div className="float-right m-3 fixed-bottom  ">
            <div className="float">
               <i className="fa fa-plus my-float"></i>
            </div>
         </div>
      </Link>
   );
};

export default Add;

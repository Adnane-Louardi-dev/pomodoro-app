import React from "react";

export const Success = ({ className }) => {
   return (
      <div
         className={`alert float-left m-3 fixed-bottom  ${className}`}
         role="alert"
      >
         <strong>So productive !</strong>
         <br />A simple success alert with.
      </div>
   );
};

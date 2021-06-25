import React, { useState, useRef, useEffect } from "react";

import Add from "./add/Add.js";
import "./add/add.css";
import { Success } from "./Success";
function Circle({ timervm, title, description }) {
   const ref = useRef(null);
   const [TimeM, setTimeM] = useState(timervm || 1);
   const [TimeS, setTimeS] = useState(0);
   const [Time, setTime] = useState(TimeM * 60 + TimeS);
   const [dashOffSet, setdashOffSet] = useState(0);
   const [circleDashArray, setCircleDashArray] = useState(942);
   const [pause, setPause] = useState(false);
   const [success, setSuccess] = useState(false);

   const Succ = () => {
      setSuccess(true);
   };
   // CountDown system
   if (!pause) {
      const CountDown = setTimeout(() => {
         if (TimeS > 0) {
            setTimeS(TimeS - 1);
         }
         if (TimeS === 0) {
            setTimeS(59);
            setTimeM(TimeM - 1);
         }
      }, 1000);
      if (TimeS <= 0 && TimeM <= 0) {
         clearTimeout(CountDown);
      }
      if (pause || success) {
         clearTimeout(CountDown);
      }
   }

   // useEffect function to re-render the component after a change
   useEffect(() => {
      const circleR = ref.current.getAttribute("r");
      const circleCircumference = Math.round(circleR * 2 * Math.PI);
      const circleDashoffset =
         circleDashArray - ((TimeM * 60 + TimeS) * circleCircumference) / Time;
      setdashOffSet(circleDashoffset);
      if (TimeM * 60 + TimeS === 0) {
         Succ();
      }
   }, [Time, TimeM, TimeS, circleDashArray, dashOffSet]);

   return (
      <>
         <div
            onTransitionEnd={() => {
               setTimeout(() => {
                  setSuccess(false);
               }, 1500);
            }}
         >
            <Success className={success ? "alert-shown" : "alert-hidden"} />
         </div>

         <div className="container ">
            <div className="row gx-1 px-2">
               <div className="taskInfo h-25 mt-5 mb-3 p-3 text-left col-xs-8 col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto">
                  <h1 className="mb-3">{title || "Task"}</h1>
                  <h6 className="">
                     {description ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, molestiae!"}
                  </h6>
               </div>
               <div className="counterContainer text-center col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto my-5">
                  <svg
                     id="svg"
                     height="400px"
                     width="100%"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                     <circle
                        className="text-center "
                        id="circle"
                        cx="50%"
                        cy="50%"
                        r="130"
                        stroke="#d1d1d1"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeDasharray="942"
                        strokeDashoffset="0"
                        fill="none"
                     ></circle>
                     <circle
                        style={{ transition: ".8s" }}
                        ref={ref}
                        id="circle"
                        cx="50%"
                        cy="50%"
                        r="130"
                        stroke="url(#gradient)"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeDasharray={circleDashArray}
                        strokeDashoffset={dashOffSet}
                        fill="none"
                     ></circle>
                     <defs>
                        <linearGradient id="gradient" x="0%" y="100%">
                           <stop offset="0%" stopColor="#D83A56" />
                           <stop offset="100%" stopColor="#FF616D" />
                        </linearGradient>
                     </defs>

                     <text
                        id="timerVal"
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy=".3em"
                        style={{ fontSize: "2.5rem" }}
                     >
                        {TimeM}:{TimeS}
                     </text>
                  </svg>
                  <button
                     style={{ position: "relative ", top: "-150px" }}
                     type="button"
                     className="button text-center"
                     onClick={() => setPause(!pause)}
                  >
                     {pause ? (
                        <i
                           className="fas fa-play"
                           style={{
                              fontSize: "18px",
                              lineHeight: " 2.9",
                              letterSpacing: "-0.16em",
                              color: "white",
                           }}
                        ></i>
                     ) : (
                        <i
                           className="fas fa-pause "
                           style={{ color: "white" }}
                        ></i>
                     )}
                  </button>
               </div>
            </div>
         </div>
         <Add />
      </>
   );
}

export default Circle;

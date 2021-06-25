import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import History from "./History";
import Circle from "./Circle";
import "./range.css";

function GoalSettings() {
   const Ref = useRef(null);
   const TitleRef = useRef(null);
   const DescriptionRef = useRef(null);
   const [TimerVal, setTimerVal] = useState(15);
   const [Data, setData] = useState({});
   const [Rerender, setRerender] = useState(false);
   const Changed = () => {
      setTimerVal(Ref.current.value);
   };

   const StartWorking = (e) => {
      e.preventDefault();
      if (TitleRef.current.value && TimerVal) {
         const data = {
            title: TitleRef.current.value,
            timervm: TimerVal,
            description: DescriptionRef.current.value,
         };
         setData(data);
         setRerender(true);
      }
   };

   const Cancel = () => {
      setRerender(true);
   };
   useEffect(() => {
      console.log(Data);
   }, [Data]);
   return (
      <>
         {Rerender ? (
            <Circle {...Data} />
         ) : (
            <div className="container">
               <div className="row mx-auto ">
                  <div className="GoalSettings_Container col-sm-12 col-md-8 col-lg-6 col-xl-6 mx-auto my-5">
                     <span>
                        <h2 className="GoalSettings_Title mt-3 my-1">
                           Goal settings:
                        </h2>
                     </span>
                     <form>
                        <input
                           className="GoalSettings_Title_Input w-100 my-3"
                           type="text"
                           placeholder="Title"
                           ref={TitleRef}
                        />
                     </form>
                     <div className="range_input">
                        <h6 className="text-left m-2 mt-5">
                           Timer set on: <strong>{TimerVal}</strong> Min
                        </h6>
                        <input
                           ref={Ref}
                           onChange={Changed}
                           type="range"
                           className="form-range Range_Input"
                           min="5"
                           max="60"
                           step="5"
                           id="customRange3"
                        ></input>
                     </div>
                     {/* <ul className="Colors mt-5">
                        <li>
                           <h6>Priority colors:</h6>{" "}
                        </li>
                        <li className="color bg-danger"></li>
                        <li className="color bg-warning"></li>
                        <li className="color bg-info"></li>
                        <li className="color bg-success"></li>
                     </ul> */}
                     <div className="text-center">
                        <textarea
                           name="Description"
                           ref={DescriptionRef}
                           placeholder="give a description to your session"
                           className="Text_Aria w-100  mt-5"
                           cols="50"
                           rows="5"
                        ></textarea>
                     </div>

                     <form className="Submit_Form text-end">
                        <button
                           type="submit"
                           className="btn cancel mt-5 mb-3 mx-2"
                           onClick={Cancel}
                        >
                           cancel
                        </button>
                        <button
                           type="submit"
                           className="btn Start_Working mt-5 mb-3 "
                           onClick={StartWorking}
                        >
                           Start working
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default GoalSettings;

import React, { useEffect } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  //formatting time
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  //set Timer
  useEffect(
    function () {
      const id = setInterval(function () {
        // console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      //to stop the timer
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {secs < 10 && "0"} {secs}
    </div>
  );
}

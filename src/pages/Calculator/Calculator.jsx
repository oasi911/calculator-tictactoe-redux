import { Display } from "../../components/calc/Display/Display";
import { Buttons } from "../../components/calc/Buttons/Buttons";
import { History } from "../../components/calc/History/History";
// import { useState, useEffect } from "react";

export function Calculator() {
  // const [history, setHistory] = useState(() => {
  //   const storedHistory = localStorage.getItem("calculatorHistory");
  //   return storedHistory ? JSON.parse(storedHistory) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("calculatorHistory", JSON.stringify(history));
  // }, [history]);

  // function clearHistory() {
  //   setHistory([]);
  //   localStorage.clear();
  // }

  return (
    <>
      <Display />
      <Buttons />
      <History />
    </>
  );
}

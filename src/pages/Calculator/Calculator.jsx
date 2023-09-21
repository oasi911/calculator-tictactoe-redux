import { Display } from "../../components/calc/Display/Display";
import { Buttons } from "../../components/calc/Buttons/Buttons";
import { History } from "../../components/calc/History/History";
import { useState, useEffect } from "react";

export function Calculator() {
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("");
  const [secInput, setSecInput] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem("calculatorHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  function inputHandler(e) {
    const digit = e.target.innerText;
    setInput((prevDigit) => prevDigit + digit);
  }

  function operationHandler(e) {
    const opDigit = e.target.innerText;
    setOperation(opDigit);
    setResult(input);
    setInput("");
    setSecInput(input + " " + opDigit);
  }

  function ceHandler() {
    setInput("");
  }

  function cHandler() {
    setInput("");
    setOperation(null);
    setResult("");
  }

  function backspaceHandler() {
    setInput(input.slice(0, -1));
  }

  function toggleHandler() {
    setInput(input * -1);
  }

  function dotHandler() {
    setInput(input + ".");
  }

  function equalHandler() {
    if (operation && input !== "") {
      const num1 = parseFloat(result);
      const num2 = parseFloat(input);

      let total;
      switch (operation) {
        case "+":
          total = num1 + num2;
          break;
        case "-":
          total = num1 - num2;
          break;
        case "x":
          total = num1 * num2;
          break;
        case "/":
          total = num1 / num2;
          break;
        default:
          break;
      }
      const operationString = `${result} ${operation} ${input} = ${total}`;
      setHistory([...history, operationString]);

      setInput(total.toString());
      setSecInput("");
    }
  }

  function historyHandler() {
    setToggleHistory(!toggleHistory);
  }

  function clearHistory() {
    setHistory([]);
    localStorage.clear();
  }

  return (
    <>
      <Display
        input={input}
        secInput={secInput}
        historyHandler={historyHandler}
      ></Display>
      <Buttons
        inputHandler={inputHandler}
        operationHandler={operationHandler}
        equalHandler={equalHandler}
        ceHandler={ceHandler}
        cHandler={cHandler}
        backspaceHandler={backspaceHandler}
        toggleHandler={toggleHandler}
        dotHandler={dotHandler}
        toggleHistory={toggleHistory}
      ></Buttons>
      <History
        toggleHistory={toggleHistory}
        history={history}
        clearHistory={clearHistory}
      ></History>
    </>
  );
}

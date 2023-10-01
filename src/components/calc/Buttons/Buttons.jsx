import css from "./Buttons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../../../redux/actions";
import { handleOperation } from "../../../redux/actions";
import { handleEqual } from "../../../redux/actions";
import { input } from "../../../redux/selectors";
import { operation } from "../../../redux/selectors";
import { result } from "../../../redux/selectors";
import { useIsHistoryOpen } from "../../useIsHistoryOpen";

export function Buttons({
  ceHandler,
  cHandler,
  backspaceHandler,
  toggleHandler,
  dotHandler,
}) {
  const dispatch = useDispatch();
  const inputValue = useSelector(input);
  const operationValue = useSelector(operation);
  const resultValue = useSelector(result);

  const isOpen = useIsHistoryOpen();
  const buttonsStyle = isOpen ? css.hiddenButtons : css.buttons;

  const inputHandler = (e) => {
    const digit = e.target.innerText;
    dispatch(handleInput(digit));
  };

  const operationHandler = (e) => {
    const digit = e.target.innerText;
    dispatch(handleOperation(digit));
  };

  const equalHandler = () => {
    if (operationValue && inputValue !== "") {
      const num1 = parseFloat(resultValue);
      const num2 = parseFloat(inputValue);

      let total;
      switch (operationValue) {
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
      dispatch(handleEqual(total));
    }
  };

  return (
    <div className={buttonsStyle}>
      <button className={css.calcBtn} onClick={ceHandler}>
        CE
      </button>
      <button className={css.calcBtn} onClick={cHandler}>
        C
      </button>
      <button className={css.calcBtn} onClick={backspaceHandler}>
        ⌫
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        /
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        7
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        8
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        9
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        x
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        4
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        5
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        6
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        -
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        1
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        2
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        3
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        +
      </button>
      <button className={css.calcBtn} onClick={toggleHandler}>
        ±
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        0
      </button>
      <button className={css.calcBtn} onClick={dotHandler}>
        .
      </button>
      <button className={css.mathBtn} onClick={equalHandler}>
        =
      </button>
    </div>
  );
}

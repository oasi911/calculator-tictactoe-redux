import css from "./Buttons.module.css";
import { useDispatch } from "react-redux";
import { handleInput } from "../../../redux/actions";
import { useIsHistoryOpen } from "../../useIsHistoryOpen";

export function Buttons({
  operationHandler,
  equalHandler,
  ceHandler,
  cHandler,
  backspaceHandler,
  toggleHandler,
  dotHandler,
}) {
  const dispatch = useDispatch();
  const isOpen = useIsHistoryOpen();
  const buttonsStyle = isOpen ? css.hiddenButtons : css.buttons;

  const inputHandler = (e) => {
    const digit = e.target.innerText;
    dispatch(handleInput(digit));
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

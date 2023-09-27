import css from "./Display.module.css";
import { useDispatch } from "react-redux";
import { toggleHistory } from "../../../redux/actions";

export function Display({ input, secInput }) {
  const dispatch = useDispatch();

  const handleHistoryBtn = () => {
    dispatch(toggleHistory());
  };

  return (
    <div className={css.display}>
      <input
        className={css.secondaryInput}
        type="text"
        maxLength={14}
        autoComplete="off"
        value={secInput}
        readOnly
      ></input>
      <button className={css.history} type="button" onClick={handleHistoryBtn}>
        ⟳
      </button>
      <input
        className={css.input}
        placeholder="0"
        type="text"
        maxLength={14}
        autoComplete="off"
        value={input}
        readOnly
      ></input>
    </div>
  );
}

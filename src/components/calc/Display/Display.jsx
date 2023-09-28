import css from "./Display.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleHistory } from "../../../redux/actions";
import { input } from "../../../redux/selectors";

export function Display({ secInput }) {
  const dispatch = useDispatch();
  const inputValue = useSelector(input)

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
        value={inputValue}
        readOnly
      ></input>
    </div>
  );
}

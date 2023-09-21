import css from "./Display.module.css";

export function Display({ input, secInput, historyHandler }) {
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
      <button className={css.history} type="button" onClick={historyHandler}>
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

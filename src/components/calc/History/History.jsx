import css from "./History.module.css";
import { Scrollbars } from "react-custom-scrollbars";
import { useIsHistoryOpen } from "../useIsHistoryOpen";

export function History({ history, clearHistory }) {
  const isOpen = useIsHistoryOpen();
  const historyClassName = isOpen ? css.historyOpen : css.historyClose;
  const historySecClassName = isOpen ? css.historySecOpen : css.historySecClose;

  return (
    <div className={historyClassName}>
      <div className={historySecClassName}>
        <Scrollbars
          renderThumbVertical={(props) => (
            <div {...props} style={{ backgroundColor: "#ea6800" }} />
          )}
        >
          {history.length === 0 ? (
            <p className={css.noHistory}>No history yet</p>
          ) : (
            <ul className={css.list}>
              {history.map((item, index) => (
                <li key={index} className={css.item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Scrollbars>
        <button type="button" className={css.clearBtn} onClick={clearHistory}>
          🗑
        </button>
      </div>
    </div>
  );
}

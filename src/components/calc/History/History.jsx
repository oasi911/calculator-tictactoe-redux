import css from "./History.module.css";
import { Scrollbars } from "react-custom-scrollbars";
import { useIsHistoryOpen } from "../useIsHistoryOpen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearHistory,
  loadHistory,
} from "../../../redux/calculator/historySlice";
import { history } from "../../../redux/selectors";

export function History() {
  const dispatch = useDispatch();

  const historyValue = useSelector(history);

  const isOpen = useIsHistoryOpen();

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  const historyClassName = isOpen ? css.historyOpen : css.historyClose;
  const historySecClassName = isOpen ? css.historySecOpen : css.historySecClose;

  function removeHistory() {
    dispatch(clearHistory());
    localStorage.clear();
  }

  return (
    <div className={historyClassName}>
      <div className={historySecClassName}>
        <Scrollbars
          renderThumbVertical={(props) => (
            <div {...props} style={{ backgroundColor: "#ea6800" }} />
          )}
        >
          {historyValue.length === 0 ? (
            <p className={css.noHistory}>No history yet</p>
          ) : (
            <ul className={css.list}>
              {historyValue.map((item, index) => (
                <li key={index} className={css.item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Scrollbars>
        <button type="button" className={css.clearBtn} onClick={removeHistory}>
          🗑
        </button>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import { isHistoryOpen } from "../../redux/selectors";

export const useIsHistoryOpen = () => {
  return useSelector(isHistoryOpen);
};

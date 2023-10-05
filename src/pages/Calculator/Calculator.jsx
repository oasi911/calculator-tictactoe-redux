import { Display } from "../../components/calc/Display/Display";
import { Buttons } from "../../components/calc/Buttons/Buttons";
import { History } from "../../components/calc/History/History";

export function Calculator() {
  return (
    <>
      <Display />
      <Buttons />
      <History />
    </>
  );
}

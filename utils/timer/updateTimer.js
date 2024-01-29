import timerData from "../../assets/data/timerData";
import { setTimer } from "./setTimer";

const updateTimer = (setLockedCallback, time, setUITimer) => {
  timerData[0].time_left = time * 60 * 1000;
  setUITimer(time);
  if (time > 0) {
    setLockedCallback(false);
    setTimer(setLockedCallback);
  } else {
    setLockedCallback(true);
  }
};

export { updateTimer };

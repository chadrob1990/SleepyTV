import timerData from "../../assets/data/timerData";

const activeTimers = [];

const setTimer = (setLockedCallback, setUITimerCallback) => {
  let updateTime, timeout;
  clearTimers();

  if (timerData[0].time_left > 0) {
    setLockedCallback(false);
    timeout = setTimeout(() => {
      setLockedCallback(true);
      timerData[0].time_left = 0;
    }, timerData[0].time_left);

    updateTime = setInterval(() => {
      timerData[0].time_left -= 1000;
      setUITimerCallback(Math.ceil(timerData[0].time_left / 1000 / 60));
      if (timerData[0].time_left <= 0) {
        handleTimeout(updateTime, timeout, setLockedCallback);
      }
    }, 1000);
  } else {
    setLockedCallback(true);
    setUITimerCallback(0);
  }
  activeTimers.push(updateTime, timeout);
};

const handleTimeout = (updateTime, timeout, setLockedCallback) => {
  setLockedCallback(true);
  clearInterval(updateTime);
  clearTimeout(timeout);
};

const clearTimers = () => {
  activeTimers.forEach((timerId) => {
    clearInterval(timerId);
    clearTimeout(timerId);
  });

  activeTimers.length = 0;
};

export { setTimer, clearTimers };

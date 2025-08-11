import { useEffect, useRef, useState } from 'react';

import SPLASH_TIME from 'constants/splash-time';

/**
 * The maximum steps to be completed by the progress bar
 */
const MAX_PROGRESS_STEP = 3;
/**
 * The step size of progress, since maximum step size can be 1 so 1 / max steps can give us the step size of each progress
 * 0.001 is added to adjust the size of the bar
 */
const PROGRESS_STEP_SIZE = 1 / MAX_PROGRESS_STEP + 0.001;

/**
 * The total splash time is divide by each step in the progress bar to get the interval time for each step
 * 100 substract in order to compensate the delay
 */
const INTERVAL_TIME = SPLASH_TIME / MAX_PROGRESS_STEP - 100;

type UseProgressOptions = {
  onComplete?: () => void;
};

const defaultOptions: Required<UseProgressOptions> = {
  onComplete: () => {},
};

const useProgress = (options?: UseProgressOptions) => {
  const { onComplete } = { ...defaultOptions, ...(options ?? {}) };

  const [progressValue, setProgressValue] = useState(0);
  const progressStepRef = useRef(MAX_PROGRESS_STEP);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progressStepRef.current === 0) {
        onComplete();
        clearInterval(intervalId);
        return;
      }
      setProgressValue((value) => value + PROGRESS_STEP_SIZE);
      progressStepRef.current -= 1;
    }, INTERVAL_TIME);

    return () => {
      clearInterval(intervalId);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  return { progress: progressValue };
};

export default useProgress;

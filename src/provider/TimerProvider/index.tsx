// import react hook
import { useEffect, useState } from 'react';

// import initial values
import { initTimerState } from '../../contexts/TimerContext/initTimerState';

// import component context
import { TimerContext } from '../../contexts/TimerContext';

type TimerContextProviderProps = {
  children: React.ReactNode;
};

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [state, setState] = useState(initTimerState);

  useEffect(() => {
    console.log(state);

    // Count Down logic
    if (!state.isActive) return;

    const interval = window.setInterval(() => {
      setState((prevState) => {
        if (!prevState.isActive) return prevState;

        const currentSeconds = Math.max(prevState.secondsRemaining - 1, 0);

        return {
          ...prevState,
          secondsRemaining: currentSeconds,
          isActive: currentSeconds === 0 ? false : prevState.isActive,
        };
      });
    }, 1000);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isActive, setState]);

  return (
    <TimerContext.Provider value={{ state, setState }}>{children}</TimerContext.Provider>
  );
}

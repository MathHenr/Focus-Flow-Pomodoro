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
  }, [state]);

  return (
    <TimerContext.Provider value={{ state, setState }}>{children}</TimerContext.Provider>
  );
}

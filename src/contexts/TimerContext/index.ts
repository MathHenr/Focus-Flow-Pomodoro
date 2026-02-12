// import context
import { createContext } from 'react';

// import type and state
import { initTimerState } from './initTimerState';
import type { TimerStateModel } from '../../models/TimerStateModel';
import type { TimerActionModel } from '../../models/TimerActionModel';

const initialContextState = {
  state: initTimerState,
  dispatch: () => {},
};

export interface TimerContextProps {
  state: TimerStateModel;
  dispatch: React.Dispatch<TimerActionModel>;
}

export const TimerContext = createContext<TimerContextProps>(initialContextState);

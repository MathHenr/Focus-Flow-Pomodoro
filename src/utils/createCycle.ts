// import type
import type { TimerModel } from '../models/TimerModel';
import type { TimerContextProps } from '../contexts/TimerContext';

// import function
import { getCycle } from './getCycle';
import { getCycleType } from './getCycleType';
import { TimerActionType } from '../models/TimerActionModel';

export function createCycle({ state, dispatch }: TimerContextProps) {
  const cycle = getCycle(state.cycle);
  const type = getCycleType(cycle);

  const newCycle: TimerModel = {
    id: Date.now().toString(),
    duration: state.config[type],
    type,
  };

  dispatch({ type: TimerActionType.START_TIME, payload: newCycle });

  return;
}

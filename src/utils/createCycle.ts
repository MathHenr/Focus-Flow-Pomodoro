// import type
import type { TimerModel } from '../models/TimerModel';
import type { TimerContextProps } from '../contexts/TimerContext';

// import function
import { getCycle } from './getCycle';
import { getCycleType } from './getCycleType';

export function createCycle({ state, setState }: TimerContextProps) {
  const cycle = getCycle(state.cycle);
  const type = getCycleType(cycle);

  const newCycle: TimerModel = {
    id: Date.now().toString(),
    duration: state.config[type],
    type,
  };

  const secondsRemaining = newCycle.duration * 60;

  setState((prevState) => {
    return {
      ...prevState,
      secondsRemaining,
      cycle,
      isActive: true,
      tasks: [newCycle],
    };
  });
}

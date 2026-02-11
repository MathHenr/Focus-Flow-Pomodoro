// import type
import type { TimerModel } from '../models/TimerModel';

export const getCycleType = (cycle: number): TimerModel['type'] => {
  if (cycle === 8) return 'longBreak';
  if (cycle % 2 === 0) return 'shortBreak';
  return 'work';
};

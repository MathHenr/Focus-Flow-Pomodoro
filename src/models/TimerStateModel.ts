// import type
import type { TimerModel } from './TimerModel';

export interface TimerStateModel {
  tasks: TimerModel[];
  secondsRemaining: number;
  isActive: boolean;
  formattedSecondsRemaining: string;
  cycle: number;
  config: {
    work: number;
    shortBreak: number;
    longBreak: number;
  };
}

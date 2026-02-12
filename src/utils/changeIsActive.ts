// import type
import type { TimerContextProps } from '../contexts/TimerContext';
import { TimerActionType } from '../models/TimerActionModel';

export function changeIsActive({ dispatch }: Pick<TimerContextProps, 'dispatch'>) {
  dispatch({ type: TimerActionType.PAUSE_TIME });
  return;
}

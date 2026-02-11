// import type
import type { TimerContextProps } from '../contexts/TimerContext';

export function changeIsActive({ setState }: Pick<TimerContextProps, 'setState'>) {
  return setState((prevState) => {
    return {
      ...prevState,
      isActive: !prevState.isActive,
    };
  });
}

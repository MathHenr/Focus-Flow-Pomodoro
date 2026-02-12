// import timer hook
import { useTimerContext } from '../../hooks/useTimerContext';

// style import
import style from './style.module.css';

// Lucide import
import { BrainIcon, CoffeeIcon } from 'lucide-react';

export function StatusDisplay() {
  const { state } = useTimerContext();
  return (
    <>
      {state.tasks.length === 0 ? (
        <></>
      ) : (
        <div className={style.content}>
          {state.tasks[0].type === 'work' && (
            <>
              <BrainIcon />
              <p>Focus</p>
            </>
          )}
          {state.tasks[0].type === 'shortBreak' && (
            <>
              <CoffeeIcon />
              <p>Short Break</p>
            </>
          )}
          {state.tasks[0].type === 'longBreak' && (
            <>
              <CoffeeIcon />
              <p>Long Break</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

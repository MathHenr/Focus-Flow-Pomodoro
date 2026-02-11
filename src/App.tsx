// style import
import './styles/global.css';
import './styles/theme.css';

// Main template import
import { Main } from './template/Main';

// import context
import { TimerContextProvider } from './provider/TimerProvider';

export function App() {
  return (
    <TimerContextProvider>
      <Main />
    </TimerContextProvider>
  );
}

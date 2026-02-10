// style import
import './styles/global.css';
import './styles/theme.css';

// component import
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export function App() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

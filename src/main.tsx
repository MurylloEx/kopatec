import ReactDOM from 'react-dom/client';
import { PresentationProvider } from 'src/presentation';

function bootstrap() {
  const root = document.getElementById('root') as HTMLElement;
  ReactDOM.createRoot(root).render(<PresentationProvider />);
}

bootstrap();

import { createRoot } from 'react-dom/client';
// import { renderToString } from 'react-dom/server'; // for SSR
import App from './App';

// export const html = renderToString(<App />); // for SSR
const container = document.getElementById('app-root')!;
createRoot(container).render(<App />);

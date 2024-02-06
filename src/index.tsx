import { createRoot } from 'react-dom/client';
import { App } from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const rootContainer = createRoot(root);
rootContainer.render(<App />);

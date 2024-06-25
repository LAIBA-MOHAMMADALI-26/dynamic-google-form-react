import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Make sure this is correctly imported

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('No element with ID root found.');
}

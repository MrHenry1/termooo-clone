import React from 'react';
import { createRoot } from 'react-dom';

import App from './src/app.js'

const wrapper = createRoot(document.getElementById('react-app'))

wrapper.render(
  <App />
);

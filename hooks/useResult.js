import React from 'react';

import { ResultContext } from '../src/app.js';

function useResultHook() {
  const context = React.useContext(ResultContext)
  
  return context
}

export { useResultHook }

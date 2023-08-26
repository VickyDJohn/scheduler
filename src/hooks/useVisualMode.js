
git commit -m "addimport { useState } from 'react';

function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);

  return {
    mode
  };
}

export default useVisualMode;
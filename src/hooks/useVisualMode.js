import { useState } from 'react';

function useVisualMode(initialMode) {
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    setHistory(prev => replace ? [...prev.slice(0, prev.length - 1), newMode] : [...prev, newMode]);
  }


  function back() {
    setHistory(prev => {
      if (prev.length <= 1) {
        return prev;
      }
      return prev.slice(0, prev.length - 1);
    });
  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
}

export default useVisualMode;
import { useEffect } from 'react';

export const useTabKeyUp = (ref, callback) => {
  const handleKeyUp = (e) => {
    if (e.key === 'Tab') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyUp);
    };
  });
};

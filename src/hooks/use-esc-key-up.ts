import { useEffect } from 'react';

export const useEscKeyUp = (ref, callback) => {
  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });
};

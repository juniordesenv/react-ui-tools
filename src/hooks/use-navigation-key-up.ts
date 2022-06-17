import { useEffect } from 'react';

export const useNavigationKeyUp = (ref, {
  keyUp,
  keyDown,
}: {
  keyUp: () => void;
  keyDown: () => void;
}) => {
  const handleKeyUp = (e) => {
    if (e.key === 'ArrowUp') {
      keyUp();
    }
    if (e.key === 'ArrowDown') {
      keyDown();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });
};

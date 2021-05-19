import { useTheme } from 'emotion-theming';
import { useState, useEffect } from 'react';
import { Theme } from '@/styles/theme';

const getBreakpoint = (theme: Theme) => {
  const { innerWidth: width } = window;
  const {
    sm, md, lg, xl,
  } = theme.breakpoints;
  if (width > xl) return 'xl';
  if (width > lg) return 'lg';
  if (width > md) return 'md';
  if (width > sm) return 'sm';
  return 'xs';
};

export const useCurrentBreakpoint = () => {
  const theme = useTheme() as Theme;
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(theme));

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint(theme));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

import { Theme } from '@/styles/theme';

const minQ = (theme: Theme) => ({
  xs: `@media (min-width: ${theme.breakpoints.xs}px)`,
  sm: `@media (min-width: ${theme.breakpoints.sm}px)`,
  md: `@media (min-width: ${theme.breakpoints.md}px)`,
  lg: `@media (min-width: ${theme.breakpoints.lg}px)`,
  xl: `@media (min-width: ${theme.breakpoints.xl}px)`,
});

const maxQ = (theme: Theme) => ({
  xs: `@media (max-width: ${theme.breakpoints.xs}px)`,
  sm: `@media (max-width: ${theme.breakpoints.sm}px)`,
  md: `@media (max-width: ${theme.breakpoints.md}px)`,
  lg: `@media (max-width: ${theme.breakpoints.lg}px)`,
  xl: `@media (max-width: ${theme.breakpoints.xl}px)`,
});

export {
  minQ,
  maxQ,
};

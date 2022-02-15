export type VariantColorsLevel = 'main' | 'dark' | 'light' | 'contrastColor';

export type VariantColorsType = 'primary' | 'secondary' | 'white' | 'black' | 'gray' | 'error' | 'warning' | 'info' | 'success' | 'disabled' | 'typography';

export type VariantColors = {
  main: string;
  dark: string;
  light: string;
  contrastColor: string;
};

export interface Theme {
  colors: {
    primary: VariantColors;
    secondary: VariantColors;
    white: VariantColors;
    gray: VariantColors;
    black: VariantColors;
    error: VariantColors;
    warning: VariantColors;
    info: VariantColors;
    success: VariantColors;
    disabled: VariantColors;
    typography: VariantColors;
  },
  breakpoints: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  button: {
    shadow: string;
    shadowHover: string;
    radius: string;
    bgDefault: string;
  },
  card: {
    shadow: string;
    shadowHover: string;
    radius: string;
    bgDefault: string;
  }
  input: {
    labelColor: string;
    bgColor: string;
    shadowColor: string;
  };
}

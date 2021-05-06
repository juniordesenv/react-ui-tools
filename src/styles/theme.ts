export type VariantColorsLevel = 'main' | 'dark' | 'light' | 'contrastColor';

export type VariantColorsType = 'primary' | 'secondary' | 'white' | 'black' | 'gray' | 'error' | 'warning' | 'info' | 'success' | 'disabled';

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
    radius: string;
  }
}

const theme: Theme = {
  colors: null,
  breakpoints: {
    xs: 0,
    sm: 540,
    md: 720,
    lg: 992,
    xl: 1140,
  },
  button: {
    shadow: '',
    radius: '',
  },
};

const whiteTheme = {
  ...theme,
  colors: {
    primary: {
      light: '#f6d46f',
      main: '#f1bd1a',
      dark: '#d8a50e',
      contrastColor: '#454f5b',
    },
    secondary: {
      light: '#637183',
      main: '#454f5b',
      dark: '#373f49',
      contrastColor: '#858788',
    },
    white: {
      light: '#FFFFFF',
      main: '#f2f2f2',
      dark: '#f2f2f2',
      contrastColor: '#000',
    },
    gray: {
      light: '#747474',
      main: '#4d4d4d',
      dark: '#3a3a3a',
      contrastColor: '#f8cb2c',
    },
    black: {
      light: '#C2C2C2',
      main: '#3C3C3C',
      dark: '#3C3C3C',
      contrastColor: '#FFF',
    },
    error: {
      light: '#e57373',
      main: '#fb6340',
      dark: '#d32f2f',
      contrastColor: '#FFF',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastColor: '#FFF',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastColor: '#FFF',
    },
    success: {
      light: '#81c784',
      main: '#009B04',
      dark: '#388e3c',
      contrastColor: '#FFF',
    },
    disabled: {
      light: '#e5e5e5',
      main: '#ccc',
      dark: '#7a7a7a',
      contrastColor: '#fff',
    },
  },
};

const darkTheme = {
  ...theme,
  colors: {
    primary: {
      light: '#f6d46f',
      main: '#f1bd1a',
      dark: '#d8a50e',
      contrastColor: '#454f5b',
    },
    secondary: {
      light: '#637183',
      main: '#454f5b',
      dark: '#373f49',
      contrastColor: '#858788',
    },
    white: {
      light: '#FFFFFF',
      main: '#f2f2f2',
      dark: '#f2f2f2',
      contrastColor: '#000',
    },
    gray: {
      light: '#747474',
      main: '#4d4d4d',
      dark: '#3a3a3a',
      contrastColor: '#f8cb2c',
    },
    black: {
      light: '#C2C2C2',
      main: '#3C3C3C',
      dark: '#3C3C3C',
      contrastColor: '#FFF',
    },
    error: {
      light: '#e57373',
      main: '#fb6340',
      dark: '#d32f2f',
      contrastColor: '#FFF',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastColor: '#FFF',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastColor: '#FFF',
    },
    success: {
      light: '#81c784',
      main: '#009B04',
      dark: '#388e3c',
      contrastColor: '#FFF',
    },
    disabled: {
      light: '#e5e5e5',
      main: '#ccc',
      dark: '#7a7a7a',
      contrastColor: '#fff',
    },
  },
};

export { whiteTheme, darkTheme };

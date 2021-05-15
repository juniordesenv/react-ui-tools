import { Theme } from '@/styles/theme';

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
    shadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    shadowHover: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    radius: '8px',
    bgDefault: 'rgba(81,67,75,.05)',
  },
  card: {
    shadow: '0 0.2px 4px -2px rgb(70 40 93 / 10%), 0 0.5px 5.1px -2px rgb(70 40 93 / 7%), 0 1.4px 5.9px -2px rgb(70 40 93 / 5%), 0 4px 8px -2px rgb(70 40 93 / 4%), 0 0 0 1px rgb(70 40 93 / 3%);',
    shadowHover: '0 0.0625rem 0.125rem -1rem rgb(81 67 75 / 4%), 0 1.5rem 3.75rem rgb(81 67 75 / 5%), 0 0.25rem 0.5rem rgb(81 67 75 / 8%), 0 0 0 1px rgb(81 67 75 / 3%);',
    radius: '12px',
    bgDefault: '#FFF',
  },
  input: {
    labelColor: '#000',
    bgColor: '#f7f7f7',
    shadowColor: 'rgba(50,50,93,.15)',
  },
};

const whiteTheme = {
  ...theme,
  colors: {
    primary: {
      light: '#aa50b5',
      main: '#8c50b9',
      dark: '#46285d',
      contrastColor: '#FFF',
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

import theme from 'styled-theming';

export const colors = {
  white: '#fff',
  black: '#000',
  lightGray: '#eee',
  medGray: '#AAA',
  darkGray: '#4D5656',
  blue: '#212F3C',
  darkBlue: '#17202A',
};

export const navColor: theme.ThemeSet = theme('mode', {
  light: colors.darkGray,
  dark: colors.darkBlue,
});

export const borderColor: theme.ThemeSet = theme('mode', {
  light: colors.black,
  dark: colors.white,
});

export const backgroundColor: theme.ThemeSet = theme('mode', {
  light: colors.lightGray,
  dark: colors.blue,
});

export const textColor: theme.ThemeSet = theme('mode', {
  light: colors.blue,
  dark: colors.lightGray,
});

export const buttonBackgroundColor = theme('mode', {
  light: colors.darkBlue,
  dark: colors.darkGray,
});

export const buttonTextColor = theme('mode', {
  light: colors.lightGray,
  dark: colors.white,
});

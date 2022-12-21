import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  primary: {
    100: '#b9f5df',
    200: '#1de9b6',
    300: '#00e2a4',
    400: '#00e2a4',
    500: '#00da93',
    600: '#09c986',
    700: '#8200c9',
    800: '#11e8bb',
    900: '#05814f',
  },
  secondary: {
    100: '#ffcbbb',
    200: '#ffa98f',
    300: '#fe8663',
    400: '#fe6d40',
    500: '#ff511f',
    600: '#f54c19',
    700: '#e64514',
    800: '#d73d12',
    900: '#bf3007',
  },
  orange: {
    200: '#fe6d40',
    300: '#bb5735',
  },
  gray: {
    300: '#232323',
    400: '#7f8483',
    500: '#3b3e3c',
    600: '#292d2c',
    700: '#1b1d1c',
    800: '#0f0f0f',
    900: '#010101',
  },
  red: {
    200: '#f45532',
    500: '#F45532',
    600: '#FF6E40',
    800: '#3E332E',
  },
  yellow: {
    700: '#F8B900',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

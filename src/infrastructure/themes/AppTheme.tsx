import { DefaultTheme } from 'styled-components';

import {
  BlackPalette,
  BluePalette,
  CyanPalette,
  GreenPalette,
  MagentaPalette,
  RedPalette,
  WhitePalette,
  YellowPalette,
} from 'src/core/domain/types';

// Blue palette
const BlueTheme: BluePalette = {
  h10: '#F1F8FF',
  h20: '#C7E2FF',
  h30: '#94CBFF',
  h40: '#42AAFF',
  h50: '#008BFF',
  h60: '#006FD6',
  h70: '#0059B2',
  h80: '#004C96',
  h90: '#003875',
  h100: '#002759',
}

// Red palette
const RedTheme: RedPalette = {
  h10: '#FFD2D2',
  h20: '#FFA5A5',
  h30: '#FF7F7F',
  h40: '#FF4D4D',
  h50: '#FF1A1A',
  h60: '#E60000',
  h70: '#C40000',
  h80: '#A30000',
  h90: '#800000',
  h100: '#660000',
}

// Yellow palette
const YellowTheme: YellowPalette = {
  h10: '#FFF4CC',
  h20: '#FFE599',
  h30: '#FFD966',
  h40: '#FFC33F',
  h50: '#FFB200',
  h60: '#D4A000',
  h70: '#B38F00',
  h80: '#806600',
  h90: '#664C00',
  h100: '#332800',
}

// Green palette
const GreenTheme: GreenPalette = {
  h10: '#DFF8D6',
  h20: '#B7E7B8',
  h30: '#8EDF96',
  h40: '#5EC768',
  h50: '#33B348',
  h60: '#2C9A2D',
  h70: '#258F24',
  h80: '#1E7D1E',
  h90: '#186C18',
  h100: '#105310',
}

// Magenta palette
const MagentaTheme: MagentaPalette = {
  h10: '#FFD2F2',
  h20: '#FFA5E6',
  h30: '#FF7FD9',
  h40: '#FF4DBE',
  h50: '#FF1AA3',
  h60: '#E6008C',
  h70: '#C40078',
  h80: '#A30064',
  h90: '#800050',
  h100: '#66003D',
}

// Cyan palette
const CyanTheme: CyanPalette = {
  h10: '#DFFFFF',
  h20: '#B8F6FF',
  h30: '#96EDFF',
  h40: '#5AC8FF',
  h50: '#2E9FFF',
  h60: '#2873CC',
  h70: '#215A9B',
  h80: '#1A4766',
  h90: '#133340',
  h100: '#0D1F1A',
}

// Black palette
const BlackTheme: BlackPalette = {
  h10: '#E6E6E6',
  h20: '#CCCCCC',
  h30: '#B3B3B3',
  h40: '#999999',
  h50: '#808080',
  h60: '#666666',
  h70: '#4D4D4D',
  h80: '#333333',
  h90: '#1A1A1A',
  h100: '#000000',
}

// White palette
const WhiteTheme: WhitePalette = {
  h10: '#F9F9F9',
  h20: '#F2F2F2',
  h30: '#E6E6E6',
  h40: '#D9D9D9',
  h50: '#CCCCCC',
  h60: '#BFBFBF',
  h70: '#B3B3B3',
  h80: '#A6A6A6',
  h90: '#999999',
  h100: '#8C8C8C',
}

export const AppTheme: DefaultTheme = {
  name: 'App Theme',
  palette: {
    red: RedTheme,
    blue: BlueTheme,
    yellow: YellowTheme,
    green: GreenTheme,
    magenta: MagentaTheme,
    cyan: CyanTheme,
    black: BlackTheme,
    white: WhiteTheme,
  }
};

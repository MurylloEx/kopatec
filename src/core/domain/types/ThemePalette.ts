export interface IPalette {
  h10: string;
  h20: string;
  h30: string;
  h40: string;
  h50: string;
  h60: string;
  h70: string;
  h80: string;
  h90: string;
  h100: string;
}

export interface RedPalette     extends IPalette {}
export interface BluePalette    extends IPalette {}
export interface YellowPalette  extends IPalette {}
export interface GreenPalette   extends IPalette {}
export interface MagentaPalette extends IPalette {}
export interface CyanPalette    extends IPalette {}
export interface BlackPalette   extends IPalette {}
export interface WhitePalette   extends IPalette {}

export interface ThemePalette {
  red: RedPalette;
  blue: BluePalette;
  yellow: YellowPalette;
  green: GreenPalette;
  magenta: MagentaPalette;
  cyan: CyanPalette;
  black: BlackPalette;
  white: WhitePalette;
}

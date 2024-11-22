export enum BreakPoint {
  lg = 1024,
  xs = 576,
  contentMax = 1600,
}

export enum SliderType {
  imageOnly = 'imageOnly',
  imageCard = 'imageCard',
}

export enum HomePageTabsKey {
  recommended = '1',
  hot = '2',
  daily = '3',
  favorite = '4',
  collection = '5',
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export interface WaterfallItemsPositions {
  height: number;
  width: number;
  xCoordinate: number;
  yCoordinate: number;
}

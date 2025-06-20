// src/theme/theme.ts
import { 
  red, volcano, orange, gold, yellow, lime, 
  green, cyan, blue, geekblue, purple, magenta 
} from '../color/colors';
import { createContext, useContext } from 'react';

// 主题模式类型
export type ThemeMode = 'light' | 'dark';

// 颜色调色板类型
export type ColorPalette = {
  red: typeof red;
  volcano: typeof volcano;
  orange: typeof orange;
  gold: typeof gold;
  yellow: typeof yellow;
  lime: typeof lime;
  green: typeof green;
  cyan: typeof cyan;
  blue: typeof blue;
  geekblue: typeof geekblue;
  purple: typeof purple;
  magenta: typeof magenta;
};

// 主题配置接口
export interface ThemeConfig {
  mode: ThemeMode;
  colors: {
    primary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      default: string;
      paper: string;
    };
    palette: ColorPalette;
  };
}

// 亮色主题配置
export const lightTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: blue[6],
    success: green[6],
    warning: gold[6],
    error: red[6],
    info: cyan[6],
    text: {
      primary: 'rgba(0, 0, 0, 0.88)',
      secondary: 'rgba(0, 0, 0, 0.65)',
      disabled: 'rgba(0, 0, 0, 0.25)',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    palette: {
      red,
      volcano,
      orange,
      gold,
      yellow,
      lime,
      green,
      cyan,
      blue,
      geekblue,
      purple,
      magenta
    }
  }
};

// 暗色主题配置
export const darkTheme: ThemeConfig = {
  mode: 'dark',
  colors: {
    primary: blue[5],
    success: green[5],
    warning: gold[5],
    error: red[5],
    info: cyan[5],
    text: {
      primary: 'rgba(255, 255, 255, 0.85)',
      secondary: 'rgba(255, 255, 255, 0.65)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
    background: {
      default: '#141414',
      paper: '#1f1f1f',
    },
    palette: {
      red: {
        1: '#5c0011',
        2: '#820014',
        3: '#a8071a',
        4: '#cf1322',
        5: '#f5222d',
        6: '#ff4d4f',
        7: '#ff7875',
        8: '#ffa39e',
        9: '#ffccc7',
        10: '#fff1f0'
      },
      volcano:{
        1: '#610b00',
        2: '#871400',
        3: '#ad2102',
        4: '#d4380d',
        5: '#fa541c',
        6: '#ff7a45',
        7: '#ff9c6e',
        8: '#ffbb96',
        9: '#ffd8bf',
        10: '#fff2e8'
      },
      orange:{
        1: '#612500',
        2: '#873800',
        3: '#ad4e00',
        4: '#d46b08',
        5: '#fa8c16',
        6: '#ffa940',
        7: '#ffc069',
        8: '#ffd591',
        9: '#ffe7ba',
        10: '#fff7e6'
      },
      gold:{
        1: '#613400',
        2: '#874d00',
        3: '#ad6800',
        4: '#d48806',
        5: '#faad14',
        6: '#ffc53d',
        7: '#ffd666',
        8: '#ffe58f',
        9: '#fff1b8',
        10: '#fffbe6' 
      },
      yellow:{
        1: '#614700',
        2: '#876800',
        3: '#ad8b00',
        4: '#d4b106',
        5: '#fadb14',
        6: '#ffec3d',
        7: '#fff566',
        8: '#fffb8f',
        9: '#ffffb8',
        10: '#feffe6'
      },
      lime: {
        1: '#254000',
        2: '#3f6600',
        3: '#5b8c00',
        4: '#7cb305',
        5: '#a0d911',
        6: '#bae637',
        7: '#d3f261',
        8: '#eaff8f',
        9: '#f4ffb8',
        10: '#fcffe6'
      },
      green:{
        1: '#092b00',
        2: '#135200',
        3: '#237804',
        4: '#389e0d',
        5: '#52c41a',
        6: '#73d13d',
        7: '#95de64',
        8: '#b7eb8f',
        9: '#d9f7be',
        10: '#f6ffed'
      },
      cyan:{
        1: '#002329',
        2: '#00474f',
        3: '#006d75',
        4: '#08979c',
        5: '#13c2c2',
        6: '#36cfc9',
        7: '#5cdbd3',
        8: '#87e8de',
        9: '#b5f5ec',
        10: '#e6fffb'
      },
      blue:{
        1: '#001d66',
        2: '#002c8c',
        3: '#003eb3',
        4: '#0958d9',
        5: '#1677ff',
        6: '#4096ff',
        7: '#69b1ff',
        8: '#91caff',
        9: '#bae0ff',
        10: '#e6f4ff'
      },
      geekblue:{
        1: '#030852',
        2: '#061178',
        3: '#10239e',
        4: '#1d39c4',
        5: '#2f54eb',
        6: '#597ef7',
        7: '#85a5ff',
        8: '#adc6ff',
        9: '#d6e4ff',
        10: '#f0f5ff'
      },
      purple:{
        1: '#120338',
        2: '#22075e',
        3: '#391085',
        4: '#531dab',
        5: '#722ed1',
        6: '#9254de',
        7: '#b37feb',
        8: '#d3adf7',
        9: '#efdbff',
        10: '#f9f0ff'
      },
      magenta:{
        1: '#520339',
        2: '#780650',
        3: '#9e1068',
        4: '#c41d7f',
        5: '#eb2f96',
        6: '#f759ab',
        7: '#ff85c0',
        8: '#ffadd2',
        9: '#ffd6e7',
        10: '#fff0f6'
      }
    }
  }
};

// 创建主题上下文
const ThemeContext = createContext<ThemeConfig>(lightTheme);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);
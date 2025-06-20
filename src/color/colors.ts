// src/color/colors.ts
type ColorShades = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
};

// 创建颜色对象的辅助函数
const createColor = (shades: string[]): ColorShades => ({
  1: shades[0],
  2: shades[1],
  3: shades[2],
  4: shades[3],
  5: shades[4],
  6: shades[5],
  7: shades[6],
  8: shades[7],
  9: shades[8],
  10: shades[9],
});

export const red = createColor([
  '#fff1f0', // red-1
  '#ffccc7',
  '#ffa39e',
  '#ff7875',
  '#ff4d4f',
  '#f5222d', // red-6 (Primary)
  '#cf1322',
  '#a8071a',
  '#820014',
  '#5c0011',
]);

export const volcano = createColor([
  '#fff2e8', // volcano-1
  '#ffd8bf',
  '#ffbb96',
  '#ff9c6e',
  '#ff7a45',
  '#fa541c', // volcano-6 (Primary)
  '#d4380d',
  '#ad2102',
  '#871400',
  '#610b00',
]);

export const orange = createColor([
  '#fff7e6', // orange-1
  '#ffe7ba',
  '#ffd591',
  '#ffc069',
  '#ffa940',
  '#fa8c16', // orange-6 (Primary)
  '#d46b08',
  '#ad4e00',
  '#873800',
  '#612500',
]);

export const gold = createColor([
  '#fffbe6', // gold-1
  '#fff1b8',
  '#ffe58f',
  '#ffd666',
  '#ffc53d',
  '#faad14', // gold-6 (Primary)
  '#d48806',
  '#ad6800',
  '#874d00',
  '#613400',
]);

export const yellow = createColor([
  '#feffe6', // yellow-1
  '#ffffb8',
  '#fffb8f',
  '#fff566',
  '#ffec3d',
  '#fadb14', // yellow-6 (Primary)
  '#d4b106',
  '#ad8b00',
  '#876800',
  '#614700',
]);

export const lime = createColor([
  '#fcffe6', // lime-1
  '#f4ffb8',
  '#eaff8f',
  '#d3f261',
  '#bae637',
  '#a0d911', // lime-6 (Primary)
  '#7cb305',
  '#5b8c00',
  '#3f6600',
  '#254000',
]);

export const green = createColor([
  '#f6ffed', // green-1
  '#d9f7be',
  '#b7eb8f',
  '#95de64',
  '#73d13d',
  '#52c41a', // green-6 (Primary)
  '#389e0d',
  '#237804',
  '#135200',
  '#092b00',
]);

export const cyan = createColor([
  '#e6fffb', // cyan-1
  '#b5f5ec',
  '#87e8de',
  '#5cdbd3',
  '#36cfc9',
  '#13c2c2', // cyan-6 (Primary)
  '#08979c',
  '#006d75',
  '#00474f',
  '#002329',
]);

export const blue = createColor([
  '#e6f4ff', // blue-1
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff', // blue-6 (Primary)
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
]);

export const geekblue = createColor([
  '#f0f5ff', // geekblue-1
  '#d6e4ff',
  '#adc6ff',
  '#85a5ff',
  '#597ef7',
  '#2f54eb', // geekblue-6 (Primary)
  '#1d39c4',
  '#10239e',
  '#061178',
  '#030852',
]);

export const purple = createColor([
  '#f9f0ff', // purple-1
  '#efdbff',
  '#d3adf7',
  '#b37feb',
  '#9254de',
  '#722ed1', // purple-6 (Primary)
  '#531dab',
  '#391085',
  '#22075e',
  '#120338',
]);

export const magenta = createColor([
  '#fff0f6', // magenta-1
  '#ffd6e7',
  '#ffadd2',
  '#ff85c0',
  '#f759ab',
  '#eb2f96', // magenta-6 (Primary)
  '#c41d7f',
  '#9e1068',
  '#780650',
  '#520339',
]);
import styled, { css } from 'styled-components';
import type { ButtonType, ButtonSize, ColorPalette ,ButtonColor } from './Button.types';


import { 
  red, volcano, orange, gold, yellow, lime, 
  green, cyan, blue, geekblue, purple, magenta 
} from '@/color/colors';

// 颜色映射表
const COLOR_MAP: Record<ColorPalette, string[]> = {
  red:Object.values(red),
  volcano: Object.values(volcano),
  orange: Object.values(orange),
  gold: Object.values(gold),
  yellow: Object.values(yellow),
  lime: Object.values(lime),
  green: Object.values(green),
  cyan: Object.values(cyan),
  blue: Object.values(blue),
  geekblue: Object.values(geekblue),
  purple: Object.values(purple),
  magenta: Object.values(magenta)
};


/**
 * 解析颜色字符串
 * @param color 颜色字符串 (如 "blue[10]" 或 "#ffffff")
 */const parseColor = (color?: ButtonColor): string => {
  if (!color) return blue[6]; // 默认颜色
  
  // 如果是十六进制或rgb颜色
  if (color.startsWith('#') || color.startsWith('rgb')) {
    return color;
  }
  
  // 解析 "palette[shade]" 格式
  const match = color.match(/^([a-zA-Z]+)\[([1-9]|10)\]$/); 
  if (match) {
    const palette = match[1] as ColorPalette;
    const shade = parseInt(match[2]) as keyof typeof blue; // 使用blue的类型作为参考
    
    // 检查 COLOR_MAP 是否包含对应的调色板
    if (!COLOR_MAP[palette]) {
      console.error(`Palette '${palette}' not found in COLOR_MAP`);
      return blue[6];
    }
    
    // 检查 shade 是否为有效索引
    if (shade < 1 || shade > 10 || isNaN(shade)) {
      console.error(`Invalid shade value: ${shade}`);
      return blue[6];
    }
    
    const colorValue = COLOR_MAP[palette][shade - 1];
    if (!colorValue) {
      console.error(`Color not found for ${palette}[${shade}]`);
      return blue[6];
    }
    
    console.log("Matched color:", colorValue);
    return colorValue;
  }

  return blue[6]; // 默认颜色
};

// 根据按钮类型生成样式
export const getButtonTypeStyle = (type: ButtonType, color?: ButtonColor) => {
  const bgColor = parseColor(color);
  const textColor = type === 'primary' ? 'white' : bgColor;
  
  switch (type) {
    case 'primary':
      return css`
        background-color: ${bgColor};
        color: ${textColor};
        border: none;
        &:hover {
          opacity: 0.9;
        }
      `;
    case 'dashed':
      return css`
        background-color: #fff;
        color: ${textColor};
        border: 1px dashed ${bgColor};
        &:hover {
          border-color: ${bgColor};
          background-color: ${bgColor}10; // 添加透明度
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${textColor};
        border: none;
        &:hover {
          background-color: ${bgColor}10;
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${textColor};
        text-decoration: underline;
        border: none;
        padding: 0;
        &:hover {
          opacity: 0.8;
        }
      `;
    default:
      return css`
        background-color: #fff;
        color: ${textColor};
        border: 1px solid ${bgColor};
        &:hover {
          background-color: ${bgColor}10;
        }
      `;
  }
};


// 根据按钮大小生成样式
export const getSizeStyle = (size: ButtonSize) => {
  switch (size) {
    case 'large':
      return css`
        height: 40px;
        padding: 0 16px;
        font-size: 16px;
      `;
    case 'small':
      return css`
        height: 24px;
        padding: 0 8px;
        font-size: 12px;
      `;
    default:
      return css`
        height: 32px;
        padding: 0 12px;
        font-size: 14px;
      `;
  }
};

// 加载动画图标样式
export const LoadingOverlay = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// 最终的按钮样式组件
export const StyledButton = styled.button<{
  $type: ButtonType;
  $size: ButtonSize;
  $color: ButtonColor;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  ${({ $type, $color }) => getButtonTypeStyle($type, $color)}
  ${({ $size }) => getSizeStyle($size)}
  

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
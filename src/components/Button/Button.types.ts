export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'middle' | 'large';
export type ColorPalette = 
  | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' 
  | 'lime' | 'green' | 'cyan' | 'blue' 
  | 'geekblue' | 'purple' | 'magenta';

export type ButtonColor = `${ColorPalette}[${1|2|3|4|5|6|7|8|9|10}]` | string;

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
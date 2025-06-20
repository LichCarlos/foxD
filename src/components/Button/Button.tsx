import React from 'react';
import type { ButtonProps } from './Button.types';
import { StyledButton, LoadingOverlay } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  color = 'blue[6]',
  icon,
  loading = false,
  disabled = false,
  onClick,
  children,
}) => {
  const showIcon = loading ? <LoadingOverlay /> : icon;

  return (
    <StyledButton
      $type={type}
      $size={size}
      $color={color}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {showIcon}
      {children && <span>{children}</span>}
    </StyledButton>
  );
};

export default Button;
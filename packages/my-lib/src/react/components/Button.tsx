import React from 'react';
import { BaseComponentProps, Size, Color } from '../../core';

export interface ButtonProps extends BaseComponentProps {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'md', 
  color = 'primary', 
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${size} btn-${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 
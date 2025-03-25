
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none',
        {
          // Variants
          'bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary': variant === 'secondary',
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-input': variant === 'outline',
          'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
          
          // Sizes
          'text-sm h-8 px-3': size === 'sm',
          'text-base h-10 px-4': size === 'md',
          'text-lg h-12 px-6': size === 'lg',
          
          // Width
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;

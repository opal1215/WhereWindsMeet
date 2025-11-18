import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Base styles
  const baseStyles = 'font-ui font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';

  // Variant styles
  const variantStyles = {
    primary: 'bg-transparent border-2 border-gold-primary text-gold-bright hover:bg-gold-primary hover:text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(212,175,55,0.3)]',
    secondary: 'bg-blue-accent text-white border-2 border-blue-accent hover:bg-transparent hover:text-blue-accent hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-text-secondary text-text-secondary hover:border-gold-bright hover:text-gold-bright hover:-translate-y-0.5',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 text-lg',
    lg: 'px-10 py-4 text-xl',
  };

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : 'cursor-pointer';

  // Combine all styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  // Render as Link if href is provided
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};

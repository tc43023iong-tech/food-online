import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

const RetroButton: React.FC<RetroButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  const baseStyles = "font-retro tracking-wide rounded-xl border-2 border-retro-dark transition-all duration-100 active:translate-y-1 active:shadow-retro-sm disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const variants = {
    primary: "bg-retro-pink text-retro-dark shadow-retro hover:bg-red-300",
    secondary: "bg-retro-mint text-retro-dark shadow-retro hover:bg-green-200",
    accent: "bg-retro-yellow text-retro-dark shadow-retro hover:bg-yellow-200",
    neutral: "bg-white text-retro-dark shadow-retro hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-lg",
    md: "px-6 py-2 text-2xl",
    lg: "px-8 py-4 text-3xl",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RetroButton;
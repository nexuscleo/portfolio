import React from 'react';
import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className,
  size = 'md'
}) => {
  const variants = {
    primary: 'bg-primary/15 text-primary border-primary/30',
    secondary: 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20',
    accent: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    outline: 'bg-transparent text-slate-300 border-white/15',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs md:text-sm px-3 py-1'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};


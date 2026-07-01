import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export function ToffeeButton({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
    const base = "font-bold rounded-full px-6 py-3 transition-transform hover:-translate-y-1 active:translate-y-0 border-[3px] border-[#4a2c11] flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-gradient-to-r from-[#D2691E] to-[#E67E22] text-white shadow-brutal",
        secondary: "bg-white text-[#4a2c11] shadow-brutal",
    };
    
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}

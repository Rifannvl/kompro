import React from 'react';

const Button = ({
    children,
    variant = 'solid',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900";

    const variants = {
        solid: "border-transparent text-white bg-black hover:bg-gray-800",
        outline: "border-black text-black bg-transparent hover:bg-black hover:text-white",
        ghost: "border-transparent text-black hover:bg-gray-100"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

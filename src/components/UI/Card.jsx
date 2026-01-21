import React from 'react';

const Card = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div className={`
      bg-white border border-gray-100 p-8 
      ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;

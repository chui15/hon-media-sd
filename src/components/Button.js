import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="submit"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        border-2
        border-purple-400
        bg-purple-400
        hover:border-purple-300
        rounded-full
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;

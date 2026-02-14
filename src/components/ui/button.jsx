import React from 'react';

export function Button({ 
  className = "", 
  variant = "default", 
  children, 
  asChild = false,
  ...props 
}) {
  const baseStyles = "px-4 py-2 font-medium transition-colors inline-flex items-center";
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-600 text-gray-100 hover:bg-gray-800"
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: buttonClass
    });
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

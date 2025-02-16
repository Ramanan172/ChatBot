import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

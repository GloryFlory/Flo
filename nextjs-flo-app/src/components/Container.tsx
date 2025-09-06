import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`w-full px-4 ${className}`}>
    {children}
  </div>
);

export default Container;

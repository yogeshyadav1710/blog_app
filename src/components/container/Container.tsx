import React, { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
}

const container: React.FC<childrenProps> = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default container;

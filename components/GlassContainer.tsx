import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative 
      bg-white/10 
      backdrop-blur-md 
      border border-white/20 
      shadow-2xl 
      rounded-3xl 
      overflow-hidden
      ${className}
    `}>
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Glossy reflection effect at top */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassContainer;
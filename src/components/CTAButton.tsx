import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href = '#', // Default href - you can change this to your redirect URL
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    // If no onClick handler, the default href will be used
  };

  return (
    <div className="flex justify-center py-0">
      <a
        href={href}
        onClick={handleClick}
        className="
          relative inline-flex items-center gap-3 px-12 py-4 
          bg-gradient-to-r from-pink-500 to-pink-600 
          rounded-full text-white font-semibold text-lg
          transition-all duration-500 ease-out
          hover:from-pink-400 hover:to-pink-500
          transform hover:scale-105 active:scale-95
          overflow-hidden group
        "
        style={{
          boxShadow: isHovered
            ? '0 0 40px rgba(244, 63, 94, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.2)'
            : '0 0 30px rgba(244, 63, 94, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div
          className="
            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            -translate-x-full group-hover:translate-x-full transition-transform duration-1000
          "
        />

        <span className="relative z-10">Get Now</span>
        <ArrowRight
          className={`
            w-5 h-5 relative z-10 transition-transform duration-300
            ${isHovered ? 'translate-x-1' : ''}
          `}
        />
      </a>
    </div>
  );
};

export default CTAButton;

import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconProps = {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  fallback?: string;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  color, 
  size = 24, 
  className = "", 
  fallback = "CircleAlert",
  onClick
}) => {
  // @ts-ignore - we're checking if the icon exists dynamically
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;

import React from "react";
import { LucideProps, icons } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fallback?: keyof typeof icons;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, name, color, size = 24, strokeWidth = 2, fallback = "CircleAlert", ...props }, ref) => {
    const LucideIcon = icons[name] || icons[fallback];

    return (
      <LucideIcon
        ref={ref}
        className={cn("", className)}
        color={color}
        size={size}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;

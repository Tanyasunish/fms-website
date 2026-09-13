import type { ComponentType, SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export type BrandIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface IconProps {
  icon: LucideIcon | BrandIcon;
  size?: number;
  className?: string;
}

export function Icon({ icon: IconComponent, size = 16, className }: IconProps) {
  return <IconComponent width={size} height={size} className={className} aria-hidden="true" />;
}
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'navy' | 'outline' | 'gold' | 'goldDeep' | 'whatsapp';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  small?: boolean;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>, ButtonBaseProps {}

export interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
}

function buildClasses(variant: ButtonVariant, small: boolean, block: boolean, className?: string): string {
  return [styles.btn, styles[variant], small && styles.small, block && styles.block, className]
    .filter(Boolean)
    .join(' ');
}

export function Button({ variant = 'navy', small = false, block = false, className, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={buildClasses(variant, small, block, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'navy', small = false, block = false, className, href, children }: ButtonLinkProps) {
  return (
    <a href={href} className={buildClasses(variant, small, block, className)}>
      {children}
    </a>
  );
}
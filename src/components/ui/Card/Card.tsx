import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

type CardVariant = 'default' | 'centered' | 'row';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'button';
  variant?: CardVariant;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

export function Card({ as: Tag = 'article', variant = 'default', type, className, children, ...rest }: CardProps) {
  const classes = [styles.card, styles[variant], Tag === 'button' && styles.button, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...(Tag === 'button' ? { type: type ?? 'button' } : {})} {...rest}>
      {children}
    </Tag>
  );
}

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function CardImage({ className, ...rest }: CardImageProps) {
  return <img loading="lazy" className={[styles.image, className].filter(Boolean).join(' ')} {...rest} />;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardBody({ className, children, ...rest }: CardBodyProps) {
  return (
    <div className={[styles.body, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

export interface CardEyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function CardEyebrow({ className, children, ...rest }: CardEyebrowProps) {
  return (
    <span className={[styles.eyebrow, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}

type TitleTag = 'h2' | 'h3' | 'h4' | 'h5';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleTag;
  children: ReactNode;
}

export function CardTitle({ as: Tag = 'h4', className, children, ...rest }: CardTitleProps) {
  return (
    <Tag className={[styles.title, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  );
}

type TextTag = 'p' | 'span';

export interface CardTextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: TextTag;
  children: ReactNode;
}

export function CardText({ as: Tag = 'p', className, children, ...rest }: CardTextProps) {
  return (
    <Tag className={[styles.text, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  );
}

export interface CardActionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardAction({ className, children, ...rest }: CardActionProps) {
  return (
    <div className={[styles.action, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

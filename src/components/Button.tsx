import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

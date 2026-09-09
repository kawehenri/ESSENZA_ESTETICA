import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'footer';
};

export function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

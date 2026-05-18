import * as React from 'react';
import styles from './Badge.module.scss';

export interface IBadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export const Badge: React.FC<IBadgeProps> = ({
  text,
  variant = 'primary',
  size = 'medium'
}) => {
  return (
    <span
      className={`${styles.badge} ${styles[variant]} ${styles[size]}`}
      role="status"
      aria-label={text}
    >
      {text}
    </span>
  );
};

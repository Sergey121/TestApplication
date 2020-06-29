import React from 'react';
import styles from './button.module.scss';

type Props = {
  title: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
};
export const Button = (props: Props) => {
  const { title, disabled, color = 'primary', className = '', onClick } = props;
  return (
    <button disabled={disabled} type={'button'} onClick={onClick}
            className={`${styles.btn} ${styles[color]} ${className}`}>{title}</button>
  )
};

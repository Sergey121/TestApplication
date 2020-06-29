import React from 'react';
import styles from './icon.module.scss';

type Props = {
  name: string;
  onPress: () => void;
};

export const Icon = (props: Props) => {
  const { name, onPress } = props;
  return (
    <span className={`material-icons ${styles.icon}`} onClick={onPress}>
      {name}
    </span>
  );
};

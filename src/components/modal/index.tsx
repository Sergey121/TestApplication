import React from 'react';
import styles from './modal.module.scss';

type Props = {
  onClose: () => void;
};

export const Modal = (props: Props) => {
  const { onClose } = props;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
};

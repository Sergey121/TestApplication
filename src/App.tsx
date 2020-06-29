import React, { Component, useCallback, useReducer, useState } from 'react';
import styles from './app.module.scss';
import { initialState, reducer } from './reducer/index';
import { Modal } from './components/modal/index';



export default () => {
  const [records, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal, showModal]);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal, showModal]);

  return (
    <div>
      <button type={'button'} onClick={handleOpenModal}>Add Record</button>
      {showModal && <Modal onClose={handleClose}/>}
    </div>
  );
};

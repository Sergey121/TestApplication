import React, { Component, useCallback, useReducer, useState } from 'react';
import styles from './app.module.scss';
import { addRecord, editRecord, initialState, reducer } from './reducer/index';
import { Modal } from './components/modal/index';
import { Record } from './models/index';


export default () => {
  const [records, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal, showModal]);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal, showModal]);

  const handleSave = (record: Record) => {
    if (record.id) {
      dispatch(editRecord(record));
    } else {
      dispatch(addRecord(record));
    }
    setShowModal(false);
  };

  return (
    <div>
      <button type={'button'} onClick={handleOpenModal}>Add Record</button>
      {showModal && <Modal onSave={handleSave} onClose={handleClose}/>}
    </div>
  );
};

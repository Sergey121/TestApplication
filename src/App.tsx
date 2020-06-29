import React, { useCallback, useReducer, useState } from 'react';
import { addRecord, editRecord, initialState, reducer, removeRecord } from './reducer/index';
import { Modal } from './components/modal/index';
import { Record } from './models/index';
import { Table } from './components/table/index';


export default () => {
  const [records, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelected] = useState(null);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal, showModal]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setSelected(null);
  }, [setShowModal, showModal]);

  const handleSave = (record: Record) => {
    if (record.id) {
      dispatch(editRecord(record));
    } else {
      dispatch(addRecord(record));
    }
    handleClose();
  };

  const handleEdit = useCallback((item: Record) => {
    setSelected(item);
    handleOpenModal();
  }, []);

  const handleDelete = useCallback((item: Record) => {
    dispatch(removeRecord(item));
  }, [dispatch]);

  return (
    <div>
      <button type={'button'} onClick={handleOpenModal}>Add Record</button>
      {showModal && <Modal item={selectedRecord} onSave={handleSave} onClose={handleClose}/>}
      <Table onEdit={handleEdit} onDelete={handleDelete} data={records}/>
    </div>
  );
};

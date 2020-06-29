import React, { useMemo, useState } from 'react';
import styles from './modal.module.scss';
import { Tabs } from '../tabs/index';
import { Input } from '../input/index';
import { Record } from '../../models/index';

type Props = {
  item?: Record;
  onClose: () => void;
};

export const Modal = (props: Props) => {
  const record = props.item;
  const isEdit = !!record;

  const [name, setName] = useState(record?.name || '');
  const [email, setEmail] = useState(record?.email || '');
  const [phone, setPhone] = useState(record?.phone || '');

  const { onClose } = props;

  const tabs = useMemo(() => [
    { id: 'name', title: 'Name', content: <Input value={name} onChange={setName}/> },
    { id: 'phone', title: 'Phone', content: <Input value={phone} onChange={setPhone}/> },
    { id: 'email', title: 'Email', content: <Input value={email} onChange={setEmail}/> },
  ], [name, phone, email]);

  const handleAdd = () => {};

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <Tabs data={tabs}/>
        <div>
          {isEdit ? <button type={'button'}>Edit</button> : <button type={'button'} onClick={handleAdd}>Add</button>}
          <button type={'button'} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
};

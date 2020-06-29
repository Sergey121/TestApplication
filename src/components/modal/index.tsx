import React, { useCallback, useMemo, useState } from 'react';
import styles from './modal.module.scss';
import { Tabs } from '../tabs/index';
import { Input } from '../input/index';
import { Record } from '../../models/index';
import { Button } from '../button/index';

type Props = {
  item?: Record;
  onClose: () => void;
  onSave: (record: Record) => void;
};

export const Modal = (props: Props) => {
  const { onClose, onSave, item: record } = props;
  const isEdit = !!record;

  const [name, setName] = useState(record?.name || '');
  const [email, setEmail] = useState(record?.email || '');
  const [phone, setPhone] = useState(record?.phone || '');


  const tabs = useMemo(() => [
    { id: 'name', title: 'Name', content: <Input value={name} onChange={setName}/> },
    { id: 'phone', title: 'Phone', content: <Input value={phone} onChange={setPhone}/> },
    { id: 'email', title: 'Email', content: <Input value={email} onChange={setEmail}/> },
  ], [name, phone, email]);

  const handleAdd = useCallback(() => {
    onSave({
      ...record,
      name,
      phone,
      email,
    });
  }, [onSave, record, name, phone, email]);

  const disabled = !(name || phone || email);

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <Tabs data={tabs}/>
        <div className={styles.actions}>
          {isEdit ? <Button disabled={disabled} onClick={handleAdd} title={'Edit'}/> :
            <Button disabled={disabled} title={'Add'} onClick={handleAdd}/>}
          <Button className={styles.cancel} color={'secondary'} onClick={onClose} title={'Cancel'}/>
        </div>
      </div>
    </div>
  )
};

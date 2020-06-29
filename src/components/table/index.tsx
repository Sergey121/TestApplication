import React, { useCallback } from 'react';
import { Record } from '../../models/index';
import { Icon } from '../icon/index';
import styles from './table.module.scss';

type Props = {
  data: Record[];
  onEdit: (item: Record) => void;
  onDelete: (item: Record) => void;
};
export const Table = (props: Props) => {
  const { data, onDelete, onEdit } = props;

  if (!data || !data.length) {
    return null;
  }

  const handleEdit = useCallback((item) => {
    return () => {
      onEdit(item);
    };
  }, [onEdit]);

  const handleDelete = useCallback((item) => {
    return () => {
      onDelete(item);
    };
  }, [onDelete]);

  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Phone</th>
        <th className={styles.th}>Email</th>
        <th className={styles.th}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {data.map(item => {
        return (
          <tr className={styles.tr} key={item.id}>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.phone}</td>
            <td className={styles.td}>{item.email}</td>
            <td className={styles.td}>
              <div className={styles.actions}>
                <Icon name={'create'} onPress={handleEdit(item)}/>
                <Icon name={'delete'} onPress={handleDelete(item)}/>
              </div>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
};

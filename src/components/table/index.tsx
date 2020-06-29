import React, { useCallback } from 'react';
import { Record } from '../../models/index';
import { Icon } from '../icon/index';

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
    <table>
      <thead>
      <tr>
        <td>Name</td>
        <td>Phone</td>
        <td>Email</td>
        <td>Actions</td>
      </tr>
      </thead>
      <tbody>
      {data.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              <Icon name={'create'} onPress={handleEdit(item)}/>
              <Icon name={'delete'} onPress={handleDelete(item)}/>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
};

import React from 'react';
import { Record } from '../../models/index';

type Props = {
  data: Record[];
};
export const Table = (props: Props) => {
  const { data } = props;

  if (!data || !data.length) {
    return null;
  }

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
          </tr>
        );
      })}
      </tbody>
    </table>
  )
};

import React from 'react';

export type Record = {
  email: string;
  name: string;
  phone: string;
  id: number;
};

export type TabItem = {
  id: string;
  content: React.ReactNode;
  title: string;
};

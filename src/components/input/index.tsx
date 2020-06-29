import React, { useCallback } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Input = (props: Props) => {
  const { value, onChange } = props;
  const handleChange = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);
  return (
    <input value={value} onChange={handleChange}/>
  )
};

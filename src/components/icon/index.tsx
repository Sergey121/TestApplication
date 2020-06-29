import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
};

export const Icon = (props: Props) => {
  const { name, onPress } = props;
  return (
    <span className="material-icons" onClick={onPress}>
      {name}
    </span>
  );
};

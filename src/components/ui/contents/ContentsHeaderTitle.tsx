import React from 'react';

type PropsType = {
  title?: string;
};

export const ContentsHeaderTitle = ({ title }: PropsType) => {
  return <p className="font-bold">{title}</p>;
};

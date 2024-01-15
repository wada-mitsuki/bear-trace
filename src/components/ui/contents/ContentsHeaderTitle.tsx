import React from 'react';

type PropsType = {
  title?: string;
};

export const ContentsHeaderTitle = ({ title }: PropsType) => {
  return <div className="font-bold">{title}</div>;
};

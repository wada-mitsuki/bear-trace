import React from 'react';

type PropsType = {
  title: string;
};

export const ContentsHeaderTitle = ({ title }: PropsType) => {
  return (
    <>
      {title ? (
        <p className="font-bold">{title}</p>
      ) : (
        <p className="font-bold">ようこそ！</p>
      )}
    </>
  );
};

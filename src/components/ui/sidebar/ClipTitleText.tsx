import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export const ClipTitleText = ({ children }: PropsType) => {
  return <p className="font-bold text-inherit mb-1">{children}</p>;
};

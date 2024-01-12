import { Input, InputProps } from 'antd';
import React from 'react';

type PropsType = InputProps;

export const ClipTitleInput = ({ ...props }: PropsType) => {
  return (
    <Input
      className="text-4xl font-bold px-1 py-3"
      placeholder="タイトルを入力"
      {...props}
    />
  );
};

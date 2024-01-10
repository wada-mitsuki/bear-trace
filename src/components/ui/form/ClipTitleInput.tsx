import { Input, InputProps } from 'antd';
import React from 'react';

type PropsType = InputProps;

export const ClipTitleInput = ({ ...props }: PropsType) => {
  return (
    <Input bordered={false} className="text-4xl font-bold pl-0" {...props} />
  );
};

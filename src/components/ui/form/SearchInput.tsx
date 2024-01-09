import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';
import React from 'react';

export type PropsType = {
  onClick: (value: boolean) => void;
} & InputProps;

export const SearchInput = ({ children, onClick, ...props }: PropsType) => {
  return (
    <Input
      className="border-red-200 border-4"
      placeholder="検索"
      prefix={<SearchOutlined />}
      suffix={
        <CloseCircleFilled
          style={{ color: 'rgba(0,0,0,.45)' }}
          onClick={onClick}
        />
      }
    />
  );
};

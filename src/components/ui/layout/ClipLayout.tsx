import { Flex } from 'antd';
import React, { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
  isSelect: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const ClipLayout: FC<PropsType> = ({
  children,
  isSelect,
  onClick,
  ...props
}) => {
  return (
    <div
      className={`m-2 border-b-2 text-gray-400 hover:bg-sky-100 p-2 rounded-md
      ${isSelect && 'border-l-4 border-l-red-500'}`}
      onClick={onClick}
      {...props}
    >
      <Flex vertical align="start" gap="start">
        {children}
      </Flex>
    </div>
  );
};

import { Flex } from 'antd';
import { FlexProps } from 'antd/lib';
import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
  minHeight?: string;
} & FlexProps;

export const ContentsHeaderActions = ({
  children,
  minHeight,
  ...props
}: PropsType) => {
  return (
    <div>
      <Flex className={`text-base text-gray-400 gap-4 ${minHeight}`} {...props}>
        {children}
      </Flex>
    </div>
  );
};

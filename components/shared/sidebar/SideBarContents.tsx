import { Flex } from 'antd';
import React, { FC } from 'react';

export type SideBarContentsPropsType = {
  memo: number;
};

export const SideBarContents: FC<SideBarContentsPropsType> = ({ memo }) => {
  return (
    <div className="mt-20">
      {Array.from({ length: memo }, (_, i) => (
        <div className="m-2 border-b-2 text-gray-400" key={i}>
          <Flex vertical align="start" gap="start">
            <p className="font-bold text-inherit mb-1">素敵な新しいメモ</p>
            <p className="">落ち着いて、何か書いてみましょう</p>
            <p className="text-xs mt-5 mb-3">たった今</p>
          </Flex>
        </div>
      ))}
    </div>
  );
};

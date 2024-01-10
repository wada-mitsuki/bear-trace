import TextArea, { TextAreaProps } from 'antd/lib/input/TextArea';
import React from 'react';

type PropsType = TextAreaProps;

export const ClipTextInput = ({ ...props }: PropsType) => {
  return (
    // TODO：TextAreaの高さを画面いっぱいに
    <TextArea
      autoSize={true}
      bordered={false}
      className="pl-0 min-h-screen"
      {...props}
    />
  );
};

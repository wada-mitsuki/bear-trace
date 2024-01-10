import TextArea, { TextAreaProps } from 'antd/lib/input/TextArea';
import React from 'react';

type PropsType = TextAreaProps;

export const ClipTextInput = ({ ...props }: PropsType) => {
  return (
    // classNameだとminHeightが効かないのでstyleで指定
    <TextArea
      bordered={false}
      className="pl-0 min-h-80"
      style={{ minHeight: 700, resize: 'none' }}
      {...props}
    />
  );
};

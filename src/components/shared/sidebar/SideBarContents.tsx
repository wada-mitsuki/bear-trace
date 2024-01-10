import React, { FC } from 'react';

import { ClipLayout } from '@/components/ui/layout/ClipLayout';
import { ClipTitleText } from '@/components/ui/sidebar';

export type SideBarContentsPropsType = {
  clip: number;
};

export const SideBarContents: FC<SideBarContentsPropsType> = ({ clip }) => {
  return (
    <div className="mt-20">
      {Array.from({ length: clip }, (_, i) => (
        <ClipLayout key={i}>
          <ClipTitleText>素敵な新しいメモ</ClipTitleText>

          {/* TODO:どうやってUI化するか悩み中 */}
          <p>落ち着いて、何か書いてみましょう</p>
          <p className="text-xs mt-5 mb-3">たった今</p>
        </ClipLayout>
      ))}
    </div>
  );
};

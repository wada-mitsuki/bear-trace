import React, { FC } from 'react';
import removeMd from 'remove-markdown';
import { Clip } from 'src/entity/clip';
import { displayDateFormat } from 'src/utils/day';

import { ClipLayout } from '@/components/ui/layout/ClipLayout';
import { ClipTitleText } from '@/components/ui/sidebar';

export type SideBarContentsPropsType = {
  clips: Clip[];
  onSelectClip: (clipId: number) => void;
  selectedClipId?: number;
};

export const SideBarContents: FC<SideBarContentsPropsType> = ({
  clips,
  onSelectClip,
  selectedClipId,
}) => {
  return (
    <div className="mt-20">
      {clips.map((clip) => {
        return (
          <>
            <ClipLayout
              isSelect={selectedClipId == clip.id}
              key={clip.id}
              onClick={() => onSelectClip(clip.id)}
            >
              <ClipTitleText>
                {clip.title ? removeMd(clip.title) : 'ステキな新しいメモ'}
              </ClipTitleText>

              {/* TODO:どうやってUI化するか悩み中 */}
              <p className="line-clamp-2 w-full">
                {clip.title
                  ? removeMd(clip.text)
                  : '落ち着いて、何か書いてみましょう'}
              </p>

              <p className="text-xs mt-5 mb-3">
                {clip.updateAt
                  ? displayDateFormat(clip.updateAt)
                  : displayDateFormat(clip.createdAt)}
              </p>
            </ClipLayout>
          </>
        );
      })}
    </div>
  );
};

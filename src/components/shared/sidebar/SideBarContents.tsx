import { DeleteOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import React, { FC, useState } from 'react';
import removeMd from 'remove-markdown';
import { Clip } from 'src/entity/clip';
import { displayDateFormat } from 'src/utils/day';

import { ClipLayout } from '@/components/ui/layout/ClipLayout';
import { BaseModal } from '@/components/ui/modal';
import { ClipTitleText } from '@/components/ui/sidebar';

export type SideBarContentsPropsType = {
  clips: Clip[];
  handleDeleteClip: () => void;
  onSelectClip: (clipId: number) => void;
  selectedClipId?: number;
};

export const SideBarContents: FC<SideBarContentsPropsType> = ({
  clips,
  handleDeleteClip,
  onSelectClip,
  selectedClipId,
}) => {
  // 今後もこれ以上のロジックはなそうなので一旦ここで宣言するが、hooks化するか悩み中
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickDeleteOk = () => {
    handleDeleteClip();
    setIsModalOpen(false);
  };

  return (
    <>
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

                <Flex
                  align="center"
                  className="w-full mt-5 mb-3"
                  justify="space-between"
                >
                  <p className="text-xs">
                    {clip.updateAt
                      ? displayDateFormat(clip.updateAt)
                      : displayDateFormat(clip.createdAt)}
                  </p>
                  <DeleteOutlined
                    className="text-base"
                    onClick={() => setIsModalOpen(true)}
                  />
                </Flex>
              </ClipLayout>
            </>
          );
        })}
      </div>
      <BaseModal
        handleCancel={() => setIsModalOpen(false)}
        handleOk={onClickDeleteOk}
        isModalOpen={isModalOpen}
      >
        <p>選択中のメモを削除しますか？</p>
      </BaseModal>
    </>
  );
};

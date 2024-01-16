import {
  DeleteOutlined,
  FormOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';

import { useSideBarHeader } from '@/components/shared/sidebar/hooks';
import { SearchInput } from '@/components/ui/form/SearchInput';
import { BaseModal } from '@/components/ui/modal/BaseModal';
import { SideBarHeaderActions } from '@/components/ui/sidebar/SideBarHeaderActions';
import { SideBarHeaderTitle } from '@/components/ui/sidebar/SideBarHeaderTitle';

export type SideBarHeaderType = {
  handleDeleteClip: () => void;
  onClickAddClip: () => void;
  selectedClipId?: number;
};

export const SideBarHeader: FC<SideBarHeaderType> = ({
  handleDeleteClip,
  onClickAddClip,
  selectedClipId,
}) => {
  const {
    isModalOpen,
    isSearch,
    onClickDeleteOk,
    setIsModalOpen,
    setIsSearch,
  } = useSideBarHeader({ handleDeleteClip });

  return (
    // Headerをui化したらエラーになる
    <>
      <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
        {isSearch ? (
          <SearchInput onClick={() => setIsSearch(false)} />
        ) : (
          <Flex align="center" justify="space-between">
            <SideBarHeaderTitle title="メモ" />
            <SideBarHeaderActions>
              <DeleteOutlined
                className={`${
                  !selectedClipId && 'opacity-25 pointer-events-none'
                }`}
                onClick={() => setIsModalOpen(true)}
              />
              <FormOutlined onClick={onClickAddClip} />
              <SearchOutlined onClick={() => setIsSearch(true)} />
            </SideBarHeaderActions>
          </Flex>
        )}
      </Header>
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

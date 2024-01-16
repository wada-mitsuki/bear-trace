import { useState } from 'react';

type SideBarHeaderHooksType = {
  handleDeleteClip: () => void;
};

export const useSideBarHeader = ({
  handleDeleteClip,
}: SideBarHeaderHooksType) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickDeleteOk = () => {
    handleDeleteClip();
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    isSearch,
    onClickDeleteOk,
    setIsModalOpen,
    setIsSearch,
  };
};

import { Modal, ModalProps } from 'antd';
import React, { FC } from 'react';

type PropsType = {
  handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleOk: () => void;
  isModalOpen: boolean;
} & ModalProps;

export const BaseModal: FC<PropsType> = ({
  children,
  handleCancel,
  handleOk,
  isModalOpen,
}) => {
  return (
    <Modal open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
      {children}
    </Modal>
  );
};

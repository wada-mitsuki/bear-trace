import { Button, Modal, ModalProps } from 'antd';
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
    <Modal
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          キャンセル
        </Button>,
        <Button
          className="bg-blue-500 text-white"
          key="ok"
          type="primary"
          onClick={handleOk}
        >
          OK
        </Button>,
      ]}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

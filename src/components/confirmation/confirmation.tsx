import React from 'react';
import styled from '@emotion/styled';

import {
  Modal, ModalContent, ModalTitle, Typography, ModalAction, Button,
} from '@/components';
import Styles from './confirmation.style';

const ConfirmationWrap = styled.div`${Styles.confirmationWrap}`;

export type ConfirmationProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  action: () => Promise<void>;
  ['data-testid']?: string;
};

const Confirmation: React.FC<ConfirmationProps> = ({
  isOpen,
  handleClose,
  children,
  action,
  ...props
}: ConfirmationProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const dataTestid = props['data-testid'] || 'confirmation';
  const handleConfirmation = async () => {
    await action();
    handleClose();
  };

  return (
    <ConfirmationWrap
      data-testid={dataTestid}
    >
      <Modal isOpen={isOpen}>
        <ModalTitle handleClose={handleClose}>
          <Typography as="h6">
            Confirmar Ação
          </Typography>
        </ModalTitle>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalAction>
          <Button
            variant="text"
            data-testid={`${dataTestid}-cancel-action`}
            onClick={handleClose}
          >
            Fechar
          </Button>
          <Button
            variant="text"
            data-testid={`${dataTestid}-confirm-action`}
            onClick={handleConfirmation}
          >
            Confirmar
          </Button>
        </ModalAction>
      </Modal>
    </ConfirmationWrap>
  );
};

export { Confirmation };

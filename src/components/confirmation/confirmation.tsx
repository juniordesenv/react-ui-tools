import React from 'react';
import styled from '@emotion/styled';

import {
  Modal, ModalContent, ModalTitle, Typography, ModalAction, Button,
} from '@/components';
import Styles from './confirmation.style';

const ConfirmationWrap = styled.div`${Styles.confirmationWrap}`;

export type ConfirmationProps = {
  isOpen: boolean;
  title?: React.ReactNode | string;
  confirmText?: string;
  closeText?: string;
  handleClose: () => void;
  children: React.ReactNode;
  action: () => Promise<void>;
  ['data-testid']?: string;
  className?: string;
};

const Confirmation: React.FC<ConfirmationProps> = ({
  isOpen,
  handleClose,
  children,
  action,
  title,
  confirmText,
  className,
  closeText,
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
      className={className}
    >
      <Modal isOpen={isOpen}>
        <ModalTitle handleClose={handleClose}>
          <Typography as="h6">
            { title || 'Confirmar Ação' }
          </Typography>
        </ModalTitle>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalAction>
          <Button
            variant="contained"
            data-testid={`${dataTestid}-cancel-action`}
            onClick={handleClose}
            color="white"
          >
            { closeText || 'Fechar' }
          </Button>
          <Button
            variant="contained"
            data-testid={`${dataTestid}-confirm-action`}
            onClick={action ? handleConfirmation : null}
            type={action ? 'button' : 'submit'}
          >
            { confirmText || 'Confirmar' }
          </Button>
        </ModalAction>
      </Modal>
    </ConfirmationWrap>
  );
};

export { Confirmation };

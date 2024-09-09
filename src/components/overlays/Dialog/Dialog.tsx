import React, { useEffect, useRef } from 'react';
import { RootElement } from './Dialog.styles';
import { TDialog } from './Dialog.types';
import { classNames } from '@/utils';
import { dialogEventChannel } from '@/eventChannels';

export const Dialog = ({
  className,
  children,
  id,
  closeButtonContentSlot,
  closeButtonAriaLabel,
  isModal,
  ...props
}: TDialog) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showFunctionNameToCall = isModal ? 'showModal' : 'show';

  const handleOpenDialog = () => {
    dialogRef.current?.[showFunctionNameToCall]();
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const unsubscribeOnOpen = dialogEventChannel.on('openDialog', payload => {
      if (payload.dialogId === id) {
        handleOpenDialog();
      }
    });

    const unsubscribeOnClose = dialogEventChannel.on('closeDialog', payload => {
      if (payload.dialogId === id) {
        handleCloseDialog();
      }
    });

    return () => {
      unsubscribeOnOpen();
      unsubscribeOnClose();
    };
  }, [id, showFunctionNameToCall]);

  return (
    <RootElement
      data-testid={'Dialog'}
      {...props}
      ref={dialogRef}
      id={id}
      className={classNames('dialog', className)}
    >
      {closeButtonContentSlot && (
        <button
          className="dialog__close-button"
          onClick={handleCloseDialog}
          autoFocus
          aria-label={closeButtonAriaLabel ?? 'Close modal'}
        >
          {closeButtonContentSlot}
        </button>
      )}
      <div className="dialog__content">{children}</div>
    </RootElement>
  );
};

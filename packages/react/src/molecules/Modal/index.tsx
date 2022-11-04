import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  StyledModalWrapper,
  StyledModalContent,
  StyledModalOverlay,
} from './styles'

export type ModalProps = React.ComponentProps<typeof Dialog.Root> & {
  overlay?: boolean
}

export const Modal = ({ children, overlay = true, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      {overlay && <StyledModalOverlay data-testid="modal-overlay" />}
      {children}
    </Dialog.Root>
  )
}

export type ModalWrapperProps = Dialog.DialogContentProps &
  React.ComponentProps<typeof StyledModalWrapper> & {
    width?: number
    maintainDimentions?: boolean
  }

export const ModalWrapper = ({
  children,
  width = 592,
  maintainDimentions = false,
  ...props
}: ModalWrapperProps) => {
  return (
    <StyledModalWrapper
      css={{
        $$maxWidth: `${width}px`,
        ...(!maintainDimentions && {
          [`@media (max-width: ${width}px`]: {
            width: '100vw',
            height: '100vh',
          },
        }),
      }}
      {...props}
    >
      {children}
    </StyledModalWrapper>
  )
}

export const ModalTrigger = Dialog.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalClose = Dialog.Close
ModalClose.displayName = 'ModalClose'

export const ModalContent = StyledModalContent
ModalContent.displayName = 'ModalContent'

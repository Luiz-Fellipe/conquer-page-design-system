import React from 'react'
import {
  Modal,
  ModalTrigger,
  ModalWrapper,
  ModalContent,
  ModalClose,
} from '../Modal'
import {
  StyledDialogDescription,
  StyledDialogFooter,
  StyledDialogHeader,
  StyledDialogTitle,
} from './styles'

export type IDialogProps = React.ComponentProps<typeof Modal>

export const DialogComponent = ({
  children,
  ...props
}: React.ComponentProps<typeof Modal>) => {
  return <Modal {...props}>{children}</Modal>
}

export const DialogWrapper = ({
  children,
  ...props
}: React.ComponentProps<typeof ModalWrapper>) => {
  return <ModalWrapper {...props}>{children}</ModalWrapper>
}

export const DialogCloseButton = ModalClose
DialogCloseButton.displayName = 'DialogCloseButton'

export const DialogTrigger = ModalTrigger
DialogTrigger.displayName = 'DialogTrigger'

export const DialogHeader = StyledDialogHeader
DialogHeader.displayName = 'DialogHeader'

export const DialogTitle = StyledDialogTitle
DialogTitle.displayName = 'DialogTitle'

export const DialogContent = ModalContent
DialogContent.displayName = 'DialogContent'

export const DialogDescription = StyledDialogDescription
DialogDescription.displayName = 'DialogDescription'

export const DialogFooter = StyledDialogFooter
DialogFooter.displayName = 'DialogFooter'

import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'
import { keyframes } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
  '100%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
})

export const StyledModalWrapper = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',

  zIndex: '$modal',

  borderRadius: '$8',
  boxShadow: '$default',
  backgroundColor: '$N0',

  fontFamily: '$default',

  width: '90vw',
  maxWidth: '$$maxWidth',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state=open]': {
      animation: `${contentShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state=closed]': {
      animation: `${contentHide} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
})

export const StyledModalContent = styled('div', {
  padding: '$32',

  '@mobile': {
    padding: '$16',
  },
})

export const StyledModalOverlay = styled(Dialog.DialogOverlay, {
  backgroundColor: 'rgba(0,0,0,.4)',
  position: 'fixed',
  inset: 0,
  zIndex: '$overlay',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state=open]': {
      animation: `${overlayShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state=closed]': {
      animation: `${overlayHide} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
})

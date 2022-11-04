import { styled } from '../../styles'
import * as dialog from '@radix-ui/react-dialog'

export const StyledDialogHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledDialogTitle = styled(dialog.DialogTitle, {
  fontWeight: '$bold',
  fontSize: '$18',

  color: '$N900',
})

export const StyledDialogDescription = styled(dialog.DialogDescription, {
  margin: '$32 0',

  fontWeight: '$400',
  fontSize: '$14',
  lineHeight: '$20',

  color: '$N700',
})

export const StyledDialogFooter = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  gap: '$8',
})

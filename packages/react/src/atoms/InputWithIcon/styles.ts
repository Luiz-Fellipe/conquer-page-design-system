import { styled } from '../../styles'

export const InputWithIconContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  fontFamily: '$default',

  width: '261px',

  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
  },
})

export const InputContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '32px',

  border: '1px solid $N400',
  borderRadius: '$default',

  transition: 'all 0.2s ease-out',

  '&:focus-within': {
    borderColor: '$B300',
    outline: '2px solid $B200',
  },

  '> svg': {
    padding: '$10 0 $10 $12',
    color: '$N600',

    fontSize: '$12',
  },

  variants: {
    error: {
      true: {
        borderColor: '$R400',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        borderColor: '$N300',
        backgroundColor: '$N100',
      },
    },
  },
})

export const InputWithIconStyled = styled('input', {
  width: '100%',
  height: '100%',

  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',

  padding: '$8 $12',

  fontSize: '$12',
  fontFamily: '$default',
  color: '$N700',

  '&::placeholder': {
    color: '$N600',
  },

  '&:hover': {
    '&::placeholder': {
      color: '$N700',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$N600',
    },
  },
})

export const ErrorMessage = styled('span', {
  width: '100%',

  display: 'inline-block',
  marginTop: '$1',

  fontWeight: '$regular',
  fontSize: '$12',
  color: '$R400',

  textAlign: 'left',

  wordBreak: 'break-all',
})

export const Label = styled('h4', {
  fontWeight: '$medium',
  fontSize: '$14',
  color: '$N800',

  lineHeight: '$24',

  marginBottom: '$4',
})

export const Description = styled('span', {
  fontWeight: '$regular',
  fontSize: '$12',
  color: '$N700',

  lineHeight: '$16',
  marginBottom: '$8',

  wordBreak: 'break-all',
})

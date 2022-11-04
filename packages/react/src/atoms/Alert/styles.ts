import { styled } from '../../styles'

export const AlertContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',

  borderRadius: '$8',

  boxSizing: 'border-box',

  fontFamily: '$default',

  maxWidth: '500px',

  padding: '$16 $24 $16 $16',

  svg: {
    fontSize: '$16',
  },

  variants: {
    variant: {
      success: {
        backgroundColor: '$G50',
        border: '1px solid $G400',
        svg: {
          color: '$G400',
        },
        h4: {
          color: '$G600',
        },
      },
      warning: {
        backgroundColor: '$Y50',
        border: '1px solid $Y400',
        svg: {
          color: '$Y400',
        },
        h4: {
          color: '$Y500',
        },
      },
      error: {
        backgroundColor: '$R50',
        border: '1px solid $R400',
        svg: {
          color: '$R400',
        },
        h4: {
          color: '$R500',
        },
      },
      info: {
        backgroundColor: '$B50',
        border: '1px solid $B400',
        svg: {
          color: '$B400',
        },
        h4: {
          color: '$B500',
        },
      },
    },
    full: {
      true: {
        maxWidth: '100%',
      },
    },
  },
})

export const AlertContentIcon = styled('div', {
  height: '100%',

  display: 'flex',
  alignItems: 'flex-start',

  marginRight: '$16',

  paddingTop: '$4',
})

export const AlertContentTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$4',
})

export const AlertTitle = styled('h4', {
  fontWeight: '$medium',
  fontSize: '$14',
  lineHeight: '$24',
})

export const AlertDescription = styled('p', {
  fontWeight: '$regular',
  fontSize: '$14',
  lineHeight: '$20',
  color: '$N700',
})

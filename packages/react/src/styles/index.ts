import { createStitches } from '@stitches/react'
import {
  colors,
  space,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  fontWeights,
  shadows,
  zIndices,
} from '@conquerpage/tokens'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors,
    space,
    radii,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    zIndices,
    shadows,
  },
  media: {
    mobile: '(max-width: 768px)',
  },
})

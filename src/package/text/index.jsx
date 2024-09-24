import { Text } from 'react-native'
import { styled } from '../styled'
import { theme } from '../theme'
import { isValidColor, isValidNumber, isValidString } from '../utils'

const StyledText = styled(Text, {
  base: {
    fontSize: theme.fontSize.normal,
    color: theme.colors.gray[800],
    fontWeight: theme.fontWeight.normal
  },
  variants: {
    fontWeight: (size = theme.fontWeight.normal) => {
      if (!isValidString(size)) {
        throw new Error('Invalid fontWeight value')
      }
      return { fontWeight: size }
    },
    color: (color = theme.colors.gray[800]) => {
      if (!isValidColor(color)) {
        throw new Error('Invalid color value')
      }
      return { color: color }
    },
    fontSize: (size = theme.fontSize.normal) => {
      if (!isValidNumber(size)) {
        throw new Error('Invalid fontSize value')
      }
      return { fontSize: size }
    },
    numberOfLines: (lines = 0) => {
      if (!isValidNumber(lines)) {
        throw new Error('Invalid lines value')
      }
      return { numberOfLines: lines }
    },
    textDecorationLine: {
      true: {
        textDecorationLine: 'underline'
      }
    },
    flexWrap: 'wrap',
    selected: {
      true: {
        color: theme.colors.gray[1]
      },
      false: {
        color: theme.colors.gray[800]
      }
    },
    fontFamily: font => {
      if (!font) return
      return {
        fontFamily: font
      }
    },
    textAlign: (align = 'left') => {
      const validAlignments = ['auto', 'left', 'right', 'center', 'justify']
      if (!validAlignments.includes(align)) {
        throw new Error('Invalid textAlign value')
      }
      return { textAlign: align }
    }
  }
})

export { StyledText }

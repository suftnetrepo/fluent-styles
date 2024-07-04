import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styled } from '../styled'
import { theme } from '../theme'
import { isValidColor, isValidNumber } from '../utils'

const Button = styled(TouchableOpacity, {
  base: {
    borderColor: theme.colors.gray[100],
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: theme.colors.gray[300],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  variants: {
    borderColor: color => {
      if (!color) return
      if (!isValidColor(color)) {
        throw new Error('Invalid color value')
      }
      return { borderColor: color }
    },
    borderRadius: (size = 32) => {
      if (!isValidNumber(size)) {
        throw new Error('Invalid borderRadius value')
      }
      return { borderRadius: size }
    },
    flex: (size) => {
      if (!size) return
      if (!isValidNumber(size)) {
        throw new Error('Invalid flex value')
      }
      return { flex: size }
    },
    width: size => {
      if (!size) return
      return { width: size }
    },
    height: size => {
      if (!size) return
      return { height: size }
    },
    backgroundColor: color => {
      if (!color) return
      if (!isValidColor(color)) {
        throw new Error('Invalid backgroundColor value')
      }
      return { backgroundColor: color }
    },
    link: {
      true: {
        borderColor: theme.colors.transparent,
        borderWidth: 0,
        borderRadius: 0,
        backgroundColor: theme.colors.transparent
      }
    },
    selected: {
      true: {
        borderColor: theme.colors.cyan[500],
        backgroundColor: theme.colors.cyan[500],
        borderWidth: 0
      },
      false: {
        borderColor: theme.colors.gray[300],
        borderWidth: 0
      }
    }
  }
})

const StyledButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export { StyledButton, Button }

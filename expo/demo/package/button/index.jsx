import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import { styled } from '../styled'
import { theme } from '../theme'

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
    borderColor: color => ({
      borderColor: color
    }),
    borderRadius: (size = 0) => ({
      borderRadius: size
    }),
    flex: size => ({
      flex: size
    }),
    width: size => ({
      width: size
    }),
    backgroundColor: color => ({
      backgroundColor: color
    }),
    link: {
      true: {
        borderColor: theme.colors.transparent,
        borderWidth: 0,
        borderRadius: 0,
        backgroundColor: theme.colors.transparent
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

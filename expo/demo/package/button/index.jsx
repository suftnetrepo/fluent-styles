import React from 'react'
import { TouchableOpacity } from 'react-native'
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
    height: size => ({
      height: size
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

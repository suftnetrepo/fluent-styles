import React from 'react'
import { Pressable } from 'react-native'
import styled from '../../styled'
import { theme } from '../../theme'

const Button = styled(Pressable, {
  base: {
    borderColor: theme.colors.gray[100],
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: theme.colors.gray[300],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  variants: {
    borderColor: color => ({
      borderColor: color || theme.colors.gray[1]
    }),
    rounded: size => ({
      rounded: size || 0
    }),
    flex: size => ({
      flex: size || 0
    }),
    width: size => ({
      width: size || 0
    }),
    backgroundColor: color => ({
      backgroundColor: color || theme.colors.gray[1]
    })
  }
})

const StyledButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export default StyledButton

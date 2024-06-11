import React from 'react'
import { Pressable, View, TouchableOpacity } from 'react-native'
import styled from '../../styled'
import { theme } from '../../theme'

const Button = styled(TouchableOpacity, {
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
    borderColor: theme.colors,
    backgroundColor: theme.colors,
    rounded: (size = 0) => ({
      rounded: size
    }),
    flex: (size = 0) => ({
      flex: size
    }),
    width: size => ({
      width: size || 0
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

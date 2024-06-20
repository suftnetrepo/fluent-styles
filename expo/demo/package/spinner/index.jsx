import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { styled } from '../styled'
import { theme } from '../theme'

const Spinner = styled(ActivityIndicator, {
  base: {
    color: theme.colors.gray[400]
  },
  variants: {
    overlay: {
      true: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }
    }
  }
})

const StyledSpinner = ({
	size = 120,
	color = theme.colors.gray[400],
	overlay = true,
	...rest
}) => {
  return <Spinner size={size} overlay={overlay} color={color} {...rest} />
}

export { StyledSpinner }

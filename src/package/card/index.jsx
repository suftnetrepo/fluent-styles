import React from 'react'
import { View, Pressable } from 'react-native'
import { styled } from '../styled'
import { shadow, windowWidth } from '../utils'

const Card = styled(View, {
  base: {
    flexDirection: 'column'
  },
  variants: {
    shadow: shadow,
    HWidth: {
      '32x4': {
        width: windowWidth - 32 - 4
      },
      '32x8': {
        width: windowWidth - 32 - 8
      },
      '16x4': {
        width: windowWidth - 16 - 4
      },
      '16x8': {
        width: windowWidth - 16 - 8
      }
    },
  }
})

const StyledCard = ({
	pressable = false,
	pressableProps,
	children,
	...rest
}) => {
  if (pressable) {
    return (
      <Pressable {...pressableProps}>
        <Card {...rest}>
          {children}
        </Card>
      </Pressable>
    )
  }

  return (
    <Card {...rest}>
      {children}
    </Card>
  )
}

export { StyledCard }

import React from 'react'
import { View, Pressable } from 'react-native'
import { styled } from '../styled'
import { shadow } from '../utils'

const Card = styled(View, {
  base: {
    flexDirection: 'column'
  },
  variants: {
    shadow: shadow
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

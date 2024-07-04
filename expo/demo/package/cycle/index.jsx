import React from 'react'
import { YStack } from '../stack'
import { theme } from '../theme'

const StyledCycle = ({ children, ...rest }) => {
  return (
    <YStack
      height={48}
      width={48}
      borderRadius={50}
      borderWidth={1}
      borderColor={theme.colors.gray[1]}
      backgroundColor={theme.colors.gray[1]}
      justifyContent='center'
      alignItems='center'
      {...rest}
		>
      {children}
    </YStack>
  )
}

export { StyledCycle }

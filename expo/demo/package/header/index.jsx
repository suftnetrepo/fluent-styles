import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import { theme } from '../theme'
import { YStack } from '../stack'
import { styled } from '../styled'

const Headers = styled(View, {
  base: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

const StyledHeader = ({ children, statusProps, ...rest }) => {
  return (
    <YStack>
      <StatusBar
        translucent={false}
        backgroundColor={theme.colors.gray[1]}
        barStyle={'dark-content'}
        {...statusProps}
			/>
      <Headers {...rest}>
        {children}
      </Headers>
    </YStack>
  )
}

export { StyledHeader }

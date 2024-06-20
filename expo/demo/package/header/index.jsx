import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import { theme } from '../theme'
import { YStack } from '../stack'
import { styled } from '../styled'

const Headers = styled(View, {
  base: {  
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  variants: {
    marginTop: (size) => ({
      marginTop: size
    })
  }
})

const StyledHeader = ({ children, statusProps, ...rest }) => {
  return (
    <YStack>
      <StatusBar
        translucent
        backgroundColor={theme.colors.gray[1]}
        barStyle={'dark-content'}
        {...statusProps}
      />
      <Headers  {...rest}>
        {children}
      </Headers>
    </YStack>
  )
}

export { StyledHeader }

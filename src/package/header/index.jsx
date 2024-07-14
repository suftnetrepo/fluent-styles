import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../theme'
import { YStack, XStack } from '../stack'
import { styled } from '../styled'
import { StyledCycle } from '../cycle'
import { StyledText } from '../text'
import { StyledSpacer } from '../spacer'
import { isValidNumber } from '../utils'
import { getStatusBarHeight } from '../utils/statusBar'

const Headers = styled(View, {
  base: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  variants: {
    marginTop: (size = 0) => {
      if (!isValidNumber(size)) {
        throw new Error('Invalid marginTop value')
      }
      return { marginTop: size }
    },
    statusHeight: (height = 0) => {
      return { paddingTop: height }
    }
  }
})

const StyledHeader = ({ statusProps, skipAndroid = false, ...rest }) => {
  return (
    <YStack>
      <StatusBar
        translucent={true}
        backgroundColor={theme.colors.gray[1]}
        barStyle={'dark-content'}
        {...statusProps}
      />
      <Headers statusHeight={getStatusBarHeight(skipAndroid)} {...rest} />
    </YStack>
  )
}

const Header = ({ navigator, title, icon = false, cycleProps, rightIcon, rightIconProps, onPress, ...rest }) => {

  return (
    <XStack justifyContent='flex-start' alignItems='center' flex={1} paddingHorizontal={8}
      paddingVertical={8} {...rest}>
      {
        icon && (
          <StyledCycle  {...cycleProps}>
            <>
              <Icon
                name={'arrow-back'}
                size={30}
                color={theme.colors.gray[700]}
                onPress={() => onPress && onPress()}                 
              />
              <StyledSpacer marginHorizontal={4} />
            </>
          </StyledCycle>
        )
      }
      {title &&
        <StyledText
          color={theme.colors.gray[800]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
        >
          {title}
        </StyledText>}
      {
        rightIcon && (
          <>{rightIcon}</>
        )
      }

    </XStack>
  )
}

const Full = ({ children }) => {
  return (
    <>{children}</>
  )
}

StyledHeader.Header = Header
StyledHeader.Full = Full

export { StyledHeader }

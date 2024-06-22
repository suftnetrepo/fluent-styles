import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../theme'
import { YStack, XStack } from '../stack'
import { styled } from '../styled'
import { StyledCycle } from '../cycle'
import { useNavigation } from '@react-navigation/native'
import { StyledText } from '../text'
import { StyledSpacer } from '../spacer'

const Headers = styled(View, {
  base: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  variants: {
    marginTop: size => ({
      marginTop: size
    })
  }
})

const StyledHeader = ({ statusProps, ...rest }) => {
  return (
    <YStack>
      <StatusBar
        translucent
        backgroundColor={theme.colors.gray[1]}
        barStyle={'dark-content'}
        {...statusProps}
      />
      <Headers {...rest} />
    </YStack>
  )
}

const Title = ({ title, icon =false, cycleProps, reload = false, screen, ...rest }) => {
  const navigate = useNavigation()

  return (
    <XStack justifyContent='flex-start' alignItems='center' flex={1} paddingHorizontal={8}
        paddingVertical={8} {...rest}>
      {
        icon && (
          <StyledCycle  {...cycleProps}>
            <Icon
              name={'arrow-back'}
              size={30}
              color={theme.colors.gray[700]}
              onPress={() => {
                if (reload && screen) {
                  navigate.replace(screen)
                } else {
                  navigate.goBack()
                }
              }}
            />
            <StyledSpacer marginHorizontal={4} />
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
    </XStack>
  )
}

const Full = ({ children }) => {
  return (
    <>{children}</>
  )
}

StyledHeader.Title = Title
StyledHeader.Full = Full

export { StyledHeader }

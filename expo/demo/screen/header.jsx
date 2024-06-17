import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import { useNavigation } from '@react-navigation/native'
import { StyledCycle } from '../package/cycle'

const Header = () => {
  const RenderHeader = ({
    leftIcon = false,
    title,
    reload = false,
    screen,
    rightIcon
  }) => {
    const navigate = useNavigation()

    return (
      <XStack
        flex={1}
        backgroundColor={theme.colors.gray[1]}
        alignItems='center'
        paddingHorizontal={8}
        paddingVertical={8}
      >
        {leftIcon &&
          <StyledCycle
            borderColor={theme.colors.gray[400]}
            backgroundColor={theme.colors.gray[1]}
          >
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
          </StyledCycle>}
        <StyledSpacer marginHorizontal={4} />
        {title &&
          <StyledText
            color={theme.colors.gray[800]}
            fontWeight={theme.fontWeight.normal}
            fontSize={theme.fontSize.normal}
          >
            {title}
          </StyledText>}
        <StyledSpacer flex={1} />
        {rightIcon &&
          <Icon
            name={'notifications'}
            size={30}
            color={theme.colors.gray[700]}
            onPress={() => {
              console.log('...')
            }}
          />}
      </XStack>
    )
  }

  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
      >
        <RenderHeader title={'Header'} leftIcon />
      </StyledHeader>
      <YStack
        flex={1}
        justifyContent='flex-start'
        alignItems='flex-start'
        marginHorizontal={16}
      >
        <StyledSpacer marginVertical={8} />
        <StyledText
          color={theme.colors.gray[800]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
        >
          Header with back icon
        </StyledText>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
        >
          <RenderHeader leftIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledText
          color={theme.colors.gray[800]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
        >
          Header with back icon and Text
        </StyledText>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
        >
          <RenderHeader title={'Testing'} leftIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledText
          color={theme.colors.gray[800]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
        >
          Header with back icon, Text and right icon
        </StyledText>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
        >
          <RenderHeader title={'Testing'} leftIcon rightIcon />
        </StyledHeader>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Header

import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import { StyledButton } from '../package/button'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledCycle } from '../package/cycle'

const Home = () => {
  const navigator = useNavigation()
  const RenderHeader = ({ title }) => {
    return (
      <XStack flex={1} paddingHorizontal={16} alignItems='center'>
        {title &&
        <StyledText
          color={theme.colors.gray[800]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
					>
          {title}
        </StyledText>}
        <StyledSpacer flex={1} />
      </XStack>
    )
  }

  const RenderButton = ({ title, screen, icon }) => {
    return (
      <StyledButton
        borderRadius={15}
        borderColor={theme.colors.coolGray[50]}
        backgroundColor={theme.colors.coolGray[50]}
        flex={1}
        onPress={() => screen && navigator.navigate(screen)}
			>
        <YStack
          justifyContent='center'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={8}
				>
          <StyledCycle backgroundColor={theme.colors.gray[300]}>
            <Icon name={icon} size={30} color={theme.colors.gray[700]} />
          </StyledCycle>
          <StyledSpacer marginVertical={8} />
          <StyledText
            color={theme.colors.gray[800]}
            fontWeight={theme.fontWeight.normal}
            fontSize={theme.fontSize.normal}
					>
            {title}
          </StyledText>
        </YStack>
      </StyledButton>
    )
  }

  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[100]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <RenderHeader title={'Samples'} />
      </StyledHeader>
      <YStack flex={1} paddingHorizontal={16}>
        <StyledSpacer marginVertical={8} />

        <XStack justifyContent='flex-start' alignItems='flex-start'>
          <RenderButton title='Header' icon={'headset'} screen='header' />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title={'Text'} icon={'note'} />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title={'Card'} icon={'outbox'} />
        </XStack>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Home

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
import { fontStyles } from '../shared/fontStyles'

const Home = () => {
  const navigator = useNavigation()

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
            fontFamily={fontStyles.OpenSansRegular}
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
        backgroundColor={theme.colors.gray[1]}
        statusProps={{ translucent: false }}
			>
        <StyledHeader.Title title={'Samples'} icon />
      </StyledHeader>
      <YStack flex={1} paddingHorizontal={8}>
        <StyledSpacer marginVertical={4} />
        <XStack justifyContent='flex-start' alignItems='flex-start'>
          <RenderButton title='Header' icon={'headset'} screen='header' />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title={'Text'} icon={'note'} screen='text' />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title={'Button'} icon={'outbox'} screen='button' />
        </XStack>
        <StyledSpacer marginVertical={4} />
        <XStack justifyContent='flex-start' alignItems='flex-start'>
          <RenderButton title='Image' icon={'image'} screen={'image'} />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title={'Card'} icon={'card-travel'} screen={'card'} />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton
            title={'Checkbox'}
            icon={'check-box'}
            screen={'checkbox'}
					/>
        </XStack>
        <StyledSpacer marginVertical={4} />
        <XStack justifyContent='flex-start' alignItems='flex-start'>
          <RenderButton title='Radio' icon={'radio'} screen={'radio-button'} />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title='Badge' icon={'badge'} screen={'badge'} />
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title='Form' icon={'dynamic-form'} screen={'form'} />
        </XStack>
        <StyledSpacer marginVertical={4} />
        <XStack justifyContent='flex-start' alignItems='flex-start'>
          <RenderButton
            title='Dialog'
            icon={'sensor-window'}
            screen={'dialog'}
					/>
          <StyledSpacer marginHorizontal={4} />
          <RenderButton
            title='Switch'
            icon={'switch-account'}
            screen={'switch'}
					/>
          <StyledSpacer marginHorizontal={4} />
          <RenderButton title='Work Pad' icon={'badge'} screen={'work-pad'} />
        </XStack>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Home

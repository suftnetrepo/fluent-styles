import React, { useState } from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledSwitch } from '../package/switch'

const Switch = () => {
  const [isEnabled_1, setIsEnabled_1] = useState(false)
  const [isEnabled_2, setIsEnabled_2] = useState(false)

  return (
    <StyledSafeAreaView>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Switch'} leftIcon />
      </StyledHeader>
      <YStack flex={1} marginHorizontal={16}>
        <StyledSpacer marginVertical={8} />
        <XStack
          justifyContent='space-between'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={16}
          backgroundColor={theme.colors.gray[1]}
				>
          <StyledText
            fontFamily={fontStyles.OpenSansRegular}
            fontWeight={theme.fontWeight.normal}
            color={theme.colors.gray[600]}
            fontSize={theme.fontSize.large}
					>
						Private Mode
					</StyledText>
          <StyledSwitch
            isEnabled={isEnabled_1}
            onChange={e => setIsEnabled_1(e)}
					/>
        </XStack>
        <StyledSpacer marginVertical={8} />
        <XStack
          justifyContent='space-between'
          alignItems='center'
          paddingVertical={8}
          paddingHorizontal={16}
          backgroundColor={theme.colors.gray[1]}
				>
          <StyledText
            fontFamily={fontStyles.OpenSansRegular}
            fontWeight={theme.fontWeight.normal}
            color={theme.colors.gray[600]}
            fontSize={theme.fontSize.large}
					>
						Notifications
					</StyledText>
          <StyledSwitch
            thumbColorOff={theme.colors.gray[500]}
            thumbColorOn={theme.colors.gray[200]}
            trackColorOff={theme.colors.gray[500]}
            trackColorOn={theme.colors.gray[500]}
            isEnabled={isEnabled_2}
            onChange={e => setIsEnabled_2(e)}
					/>
        </XStack>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Switch

import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledCheckBox } from '../package/checkBox'

const CheckBox = () => {
  return (
    <StyledSafeAreaView>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Checkbox'} leftIcon />
      </StyledHeader>
      <YStack flex={1} marginHorizontal={8}>
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
						Default
					</StyledText>
          <StyledCheckBox />
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
						Custom
					</StyledText>
          <StyledCheckBox
            height={30}
            width={30}
            checkedColor={theme.colors.green[500]}
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
						Disabled
					</StyledText>
          <StyledCheckBox disabled />
        </XStack>
      </YStack>
    
    </StyledSafeAreaView>
  )
}

export default CheckBox

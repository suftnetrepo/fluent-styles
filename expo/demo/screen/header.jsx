import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import RenderHeader from '../shared/header'

const Header = () => {
 
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
        marginHorizontal={8}
			>
        <StyledSpacer marginVertical={8} />
        <StyledText
          color={theme.colors.gray[400]}
          fontWeight={theme.fontWeight.normal}
          fontSize={theme.fontSize.normal}
				>
					Sample Headers
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
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <RenderHeader title={'Testing'} leftIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <RenderHeader title={'Testing'} leftIcon rightIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <RenderHeader leftIcon centerTitle='Testing' rightIcon />
        </StyledHeader>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Header

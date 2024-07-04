import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { YStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'

const Header = () => {
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Header'} leftIcon />
      </StyledHeader>
      <YStack
        flex={1}
        justifyContent='flex-start'
        alignItems='flex-start'
        marginHorizontal={8}
			>
        <StyledSpacer marginVertical={8} />        
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <SharedHeader leftIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <SharedHeader title={'Testing'} leftIcon />
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <SharedHeader
            title={'Testing'}
            leftIcon
            rightIcon
            icon='menu'
            borderColor={theme.colors.gray[1]}
            backgroundColor={theme.colors.gray[1]}
					/>
        </StyledHeader>
        <StyledSpacer marginVertical={8} />
        <StyledHeader
          borderRadius={8}
          backgroundColor={theme.colors.gray[1]}
          paddingVertical={8}
          statusProps={{ translucent: false }}
				>
          <SharedHeader
            leftIcon
            centerTitle='Testing'
            rightIcon
            icon='menu'
            borderColor={theme.colors.gray[1]}
            backgroundColor={theme.colors.gray[1]}
					/>
        </StyledHeader>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Header

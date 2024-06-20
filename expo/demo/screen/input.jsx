import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { StyledSeparator } from '../package/separator'
import { StyledInput, StyledMultiInput } from '../package/input'

const Input = () => {
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Input'} leftIcon />
      </StyledHeader>
      <YStack flex={1} marginHorizontal={8}>
        <StyledSpacer marginVertical={2} />
        <StyledSeparator
          left={
            <StyledText
              fontWeight={theme.fontWeight.normal}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.large}
						>
							Basic
						</StyledText>
					}
				/>

        <YStack
          flex={1}
          paddingHorizontal={16}
          paddingVertical={16}
          borderRadius={16}
          backgroundColor={theme.colors.gray[1]}
				>
          <StyledInput
            label={'FirstName'}
            keyboardType='default'
            placeholder='Enter your firstname'
            returnKeyType='next'
            maxLength={50}
            fontSize={theme.fontSize.normal}
            borderColor={theme.colors.gray[400]}
            backgroundColor={theme.colors.gray[1]}
            borderRadius={32}
            paddingHorizontal={8}
            placeholderTextColor={theme.colors.gray[400]}
					/>
          <StyledSpacer marginVertical={4} />
          <StyledInput
            label={'LastName'}
            keyboardType='default'
            placeholder='Enter your lastname'
            returnKeyType='next'
            maxLength={50}
            fontSize={theme.fontSize.normal}
            borderColor={theme.colors.yellow[800]}
            backgroundColor={theme.colors.gray[1]}
            borderRadius={32}
            paddingHorizontal={8}
            placeholderTextColor={theme.colors.gray[400]}
					/>
          <StyledSpacer marginVertical={4} />
          <StyledInput
            label={'Email'}
            keyboardType='email-address'
            placeholder='Enter your email address'
            returnKeyType='done'
            maxLength={50}
            fontSize={theme.fontSize.normal}
            borderColor={theme.colors.gray[400]}
            backgroundColor={theme.colors.gray[1]}
            borderRadius={32}
            paddingHorizontal={8}
            placeholderTextColor={theme.colors.gray[400]}
            error
            errorMessage={'invalid email address'}
					/>
          <StyledSpacer marginVertical={4} />
          <StyledMultiInput
            label={'Description'}
            keyboardType='default'
            placeholder='Enter description'
            returnKeyType='done'
            maxLength={200}
            fontSize={theme.fontSize.normal}
            borderColor={theme.colors.gray[400]}
            backgroundColor={theme.colors.gray[1]}
            borderRadius={16}
            paddingHorizontal={8}
            placeholderTextColor={theme.colors.gray[400]}          
          
					/>
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Input

import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledInput } from '../package/form'
import { StyledScrollView } from '../package/scrollView'
import { ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const WorkPad = () => {
  return (
    <StyledSafeAreaView>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Work Pad'} leftIcon />
      </StyledHeader>

      <YStack
        flex={1}
        marginHorizontal={16}
        justifyContent='center'
        alignItems='center'
			>
        {/* <Header /> */}
        <StyledText
        >
          See Your Changes
        </StyledText>
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
          onChangeText={text => {}}
				/>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default WorkPad

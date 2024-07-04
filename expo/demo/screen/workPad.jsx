import React, { useState } from 'react'
import { StyledSafeAreaView } from '../../../src/package/safeAreaView'
import { StyledText } from '../../../src/package/text'
import { YStack } from '../../../src/package/stack'
import { theme } from '../../../src/package/theme'
import { StyledHeader } from '../../../src/package/header'
import SharedHeader from '../shared/header'
import { StyledInput } from '../../../src/package/form'
import { StyledButton } from '../../../src/package/button'
import { validate } from '../../../src'
import { formValidatorRules } from '../utils/validatorRules'

const WorkPad = () => {
  const [errorMessages, setErrorMessages] = useState({})
  const [fields, setFields] = useState(formValidatorRules.fields)

  const onSubmit = async () => {
    setErrorMessages({})
    const { hasError, errors } = validate(fields, formValidatorRules.rules)
    if (hasError) {
      setErrorMessages(errors)
      return false
    }
  }

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
        <StyledText>See Your Changes</StyledText>
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
          onChangeText={(text) => setFields({ ...fields, first_name: text })}
          error={!!errorMessages?.first_name}
          errorMessage={errorMessages?.first_name?.message}
        />
        <StyledButton onPress={()=> onSubmit()}>
          <StyledText>See Your Changes</StyledText>
        </StyledButton>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default WorkPad

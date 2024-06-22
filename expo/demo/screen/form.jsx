import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { YStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { StyledInput, StyledMultiInput } from '../package/form'
import { StyledDropdown, StyledMultiDropdown } from '../package/dropdown'
import { StyledScrollView } from '../package/scrollView'

const Form = () => {
  const dataGender = [
    {
      label: 'Male',
      value: 'Male'
    },
    {
      label: 'Female',
      value: 'Female'
    }
  ]
  const data = [
    {
      label: 'Physical Examination Test',
      value: 'Physical Examination Test'
    },
    {
      label: 'Blood Test',
      value: 'Blood Test'
    },
    {
      label: 'Imaging Test',
      value: 'Imaging Test'
    },
    {
      label: 'Diagnostic Procedures Test',
      value: 'Diagnostic Procedures Test'
    }
  ]

  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
      >
        <SharedHeader title={'Form'} leftIcon />
      </StyledHeader>
      <YStack flex={1} marginHorizontal={8}>
        <StyledSpacer marginVertical={4} />
        <StyledScrollView showsVerticalScrollIndicator={false}>
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
              onChangeText={text => {}}
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
            <StyledDropdown
              placeholder={'Select a category'}
              label={'Gender'}
              items={dataGender}
              value={'Male'}
              onSelectItem={e => {}}
              listMode='SCROLLVIEW'
            />
            <StyledSpacer marginVertical={4} />
            <StyledDropdown
              placeholder={'Select a category'}
              label={'Test Type'}
              items={data}
              value={'Blood Test'}
              onSelectItem={e => {}}
              error
              errorMessage={'Please select category'}
              listMode='SCROLLVIEW'
            />
            <StyledSpacer marginVertical={4} />
            <StyledMultiDropdown
              placeholder={'Select a category'}
              label={'Multiple Test Type'}
              items={data}
              mode='BADGE'
              onSelected={e => {}}
              listMode='SCROLLVIEW'
            />

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
              onChangeText={text => {}}
            />
          </YStack>
        </StyledScrollView>
      </YStack>
    </StyledSafeAreaView>
  )
}

export default Form

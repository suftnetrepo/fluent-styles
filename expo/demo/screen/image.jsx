import React from 'react'
import { StyledSafeAreaView } from '../../../src/package/safeAreaView'
import { StyledText } from '../../../src/package/text'
import { YStack, XStack } from '../../../src/package/stack'
import { theme } from '../../../src/package/theme'
import { StyledSpacer } from '../../../src/package/spacer'
import { StyledHeader } from '../../../src/package/header'
import SharedHeader from '../shared/header'
import { StyledSeparator } from '../../../src/package/separator'
import { StyledImage } from '../../../src/package/image'
import { StyledScrollView } from '../../../src/package/scrollView'

const Image = () => {
  const images = [
    {
      borderRadius: 100,
      borderWidth: 5,
      borderColor: theme.colors.gray[1],
      height: 60,
      width: 60,
      source: '../assets/img/doctor.png'
    },
    {
      borderRadius: 100,
      borderWidth: 5,
      borderColor: theme.colors.gray[1],
      height: 80,
      width: 80,
      source: '../assets/img/doctor.png'
    },
    {
      borderRadius: 100,
      borderWidth: 5,
      borderColor: theme.colors.gray[1],
      height: 100,
      width: 100,
      source: '../assets/img/doctor.png'
    },
    {
      borderRadius: 100,
      borderWidth: 5,
      borderColor: theme.colors.gray[1],
      height: 120,
      width: 120,
      source: '../assets/img/doctor.png'
    },
    {
      borderRadius: 100,
      borderWidth: 5,
      borderColor: theme.colors.gray[1],
      height: 140,
      width: 140,
      source: '../assets/img/doctor.png'
    }
  ]
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[100]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Image'} leftIcon />
      </StyledHeader>
      <StyledScrollView>
        <YStack marginHorizontal={8}>
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
          <XStack
            paddingHorizontal={8}
            paddingVertical={8}
            borderRadius={16}
            justifyContent='flex-start'
            alignItems='flex-start'
            backgroundColor={theme.colors.gray[200]}
					>
            {images.slice(0, 4).map((image, index) => {
              return (
                <StyledImage
                  key={index}
                  local
                  borderRadius={image.borderRadius}
                  borderWidth={image.borderWidth}
                  borderColor={image.borderColor}
                  height={image.height}
                  width={image.width}
                  source={require('../assets/img/doctor.png')}
								/>
              )
            })}
          </XStack>
          <StyledSeparator
            left={
              <StyledText
                fontWeight={theme.fontWeight.normal}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.large}
							>
								Stack
							</StyledText>
						}
					/>
          <XStack
            paddingHorizontal={8}
            paddingVertical={8}
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRadius={16}
            backgroundColor={theme.colors.gray[200]}
					>
            {images.map((image, index) => {
              return (
                <StyledImage
                  key={index}
                  local
                  borderRadius={image.borderRadius}
                  borderWidth={image.borderWidth * 2}
                  borderColor={image.borderColor}
                  height={image.height}
                  width={image.width}
                  right={index * 30}
                  source={require('../assets/img/doctor.png')}
								/>
              )
            })}
          </XStack>
          <StyledSeparator
            left={
              <StyledText
                fontWeight={theme.fontWeight.normal}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.large}
							>
								Full width
							</StyledText>
						}
					/>
          <XStack
            paddingHorizontal={8}
            paddingVertical={8}
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRadius={16}
            backgroundColor={theme.colors.gray[1]}
					>
            <StyledImage
              local
              borderRadius={8}
              borderWidth={1}
              borderColor={theme.colors.gray[200]}
              height={150}
              width={'100%'}
              source={require('../assets/img/doctor.png')}
						/>
          </XStack>
          <StyledSeparator
            left={
              <StyledText
                fontWeight={theme.fontWeight.normal}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.large}
							>
								Half width
							</StyledText>
						}
					/>
          <XStack
            paddingHorizontal={8}
            paddingVertical={8}
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRadius={16}
            backgroundColor={theme.colors.gray[200]}
					>
            <StyledImage
              local
              borderRadius={8}
              borderWidth={5}
              borderColor={theme.colors.gray[1]}
              height={150}
              flex={1}
              source={require('../assets/img/doctor.png')}
						/>
            <StyledSpacer marginHorizontal={4} />
            <StyledImage
              local
              borderRadius={8}
              borderWidth={5}
              borderColor={theme.colors.gray[1]}
              height={150}
              flex={1}
              source={require('../assets/img/doctor.png')}
						/>
          </XStack>
        </YStack>
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default Image

import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledSafeAreaView } from '../../../src/package/safeAreaView'
import { StyledText } from '../../../src/package/text'
import { YStack, XStack } from '../../../src/package/stack'
import { theme } from '../../../src/package/theme'
import { StyledSpacer } from '../../../src/package/spacer'
import { StyledHeader } from '../../../src/package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledSeparator } from '../../../src/package/separator'
import { StyledImage } from '../../../src/package/image'
import { StyledCard } from '../../../src/package/card'
import { StyledScrollView } from '../../../src/package/scrollView'

const Card = () => {
  return (
    <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
      <StyledHeader
        backgroundColor={theme.colors.gray[1]}
        paddingVertical={8}
        statusProps={{ translucent: false }}
			>
        <SharedHeader title={'Image'} leftIcon />
      </StyledHeader>
      <StyledScrollView>
        <YStack marginHorizontal={16}>
          <StyledSpacer marginVertical={8} />

          <StyledCard
            paddingHorizontal={16}
            paddingVertical={16}
            borderRadius={16}
            borderColor={theme.colors.gray[300]}
            borderWidth={1}
            backgroundColor={theme.colors.gray[1]}
            shadow='light'
					>
            <StyledText
              fontWeight={theme.fontWeight.bold}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.normal}
						>
							Lorem Ipsum is simply dummy text of the pri
						</StyledText>
            <StyledSpacer marginVertical={2} />
            <StyledText
              fontWeight={theme.fontWeight.normal}
              color={theme.colors.gray[600]}
              fontSize={theme.fontSize.normal}
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s
						</StyledText>
          </StyledCard>
          <StyledSpacer marginVertical={8} />
          <StyledCard
            borderRadius={16}
            borderColor={theme.colors.gray[300]}
            borderWidth={1}
            backgroundColor={theme.colors.gray[1]}
            shadow='light'
            pressable
					>
            <StyledImage
              local
              height={200}
              width={'100%'}
              source={require('../assets/img/doctor.png')}
						/>
            <StyledSpacer marginVertical={2} />
            <YStack paddingHorizontal={16} paddingVertical={16}>
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.normal}
							>
								Lorem Ipsum is simply dummy text of the pri
							</StyledText>
              <StyledSpacer marginVertical={2} />
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                fontWeight={theme.fontWeight.normal}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.normal}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s
							</StyledText>
            </YStack>
          </StyledCard>
          <StyledSpacer marginVertical={8} />
          <StyledCard
            borderRadius={0}
            borderColor={theme.colors.gray[300]}
            borderWidth={1}
            backgroundColor={theme.colors.gray[1]}
            shadow='light'
					>
            <StyledImage
              local
              height={200}
              width={'100%'}
              source={require('../assets/img/doctor.png')}
						/>
            <StyledSpacer marginVertical={2} />
            <YStack paddingHorizontal={16} paddingVertical={16}>
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.normal}
							>
								Lorem Ipsum is simply dummy text of the pri
							</StyledText>
              <StyledSpacer marginVertical={2} />
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                fontWeight={theme.fontWeight.normal}
                color={theme.colors.gray[600]}
                fontSize={theme.fontSize.normal}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s
							</StyledText>
            </YStack>
            <StyledSeparator
              line
              lineProps={{ borderTopColor: theme.colors.gray[200] }}
						/>
            <XStack
              justifyContent='flex-start'
              alignItems='center'
              paddingHorizontal={16}
              paddingVertical={8}
						>
              <StyledText
                fontFamily={fontStyles.OpenSansRegular}
                fontWeight={theme.fontWeight.bold}
                color={theme.colors.pink[500]}
                fontSize={theme.fontSize.small}
							>
								EXPLORE
							</StyledText>

              <StyledSpacer flex={1} />
              <Icon name={'share'} size={38} color={theme.colors.gray[300]} />
              <StyledSpacer marginHorizontal={8} />
              <Icon
                name={'favorite'}
                size={38}
                color={theme.colors.gray[300]}
							/>
            </XStack>
          </StyledCard>
          <StyledSpacer marginVertical={8} />
          <StyledCard
            borderColor={theme.colors.gray[300]}
            borderWidth={1}
            backgroundColor={theme.colors.gray[1]}
            shadow='light'
					>
            <XStack>
              <StyledImage
                flex={1}
                local
                source={require('../assets/img/doctor.png')}
							/>
              <YStack flex={2} paddingHorizontal={16} paddingVertical={16}>
                <StyledText
                  fontFamily={fontStyles.OpenSansRegular}
                  fontWeight={theme.fontWeight.bold}
                  color={theme.colors.gray[600]}
                  fontSize={theme.fontSize.normal}
								>
									Lorem Ipsum is simply
								</StyledText>
                <StyledSpacer marginVertical={2} />
                <StyledText
                  fontFamily={fontStyles.OpenSansRegular}
                  fontWeight={theme.fontWeight.normal}
                  color={theme.colors.gray[600]}
                  fontSize={theme.fontSize.normal}
								>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</StyledText>
              </YStack>
            </XStack>
          </StyledCard>
        </YStack>
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default Card

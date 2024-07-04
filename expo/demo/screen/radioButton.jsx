import React from 'react'
import { StyledSafeAreaView } from '../../../src/package/safeAreaView'
import { StyledText } from '../../../src/package/text'
import { YStack, XStack } from '../../../src/package/stack'
import { theme } from '../../../src/package/theme'
import { StyledSpacer } from '../../../src/package/spacer'
import { StyledHeader } from '../../../src/package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledRadioButton } from '../../../src/package/radioButton'

const RadioButton = () => {
    return (
        <StyledSafeAreaView>
            <StyledHeader
                backgroundColor={theme.colors.gray[1]}
                paddingVertical={8}
                statusProps={{ translucent: false }}
            >
                <SharedHeader title={'Radio Button'} leftIcon />
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
                    <StyledRadioButton />
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
                    <StyledRadioButton
                        height={30}
                        width={30}
                        iconProps={{
                            size: 20,
                            color: theme.colors.yellow[700]
                        }}
                        checkedColor={theme.colors.yellow[500]}
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
                    <StyledRadioButton disabled />
                </XStack>
            </YStack>
        </StyledSafeAreaView>
    )
}

export default RadioButton

import React from 'react'
import { StyledSafeAreaView } from '../../../src/package/safeAreaView'
import { StyledText } from '../../../src/package/text'
import { YStack, XStack } from '../../../src/package/stack'
import { theme } from '../../../src/package/theme'
import { StyledSpacer } from '../../../src/package/spacer'
import { StyledHeader } from '../../../src/package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledSeparator } from '../../../src/package/separator'

const Text = () => {
    const fonts = [
        {
            font: fontStyles.OpenSansBold,
            size: theme.fontSize.small,
            color: theme.colors.gray[800]
        },
        {
            font: fontStyles.OpenSansItalic,
            size: theme.fontSize.normal,
            color: theme.colors.green[800]
        },
        {
            font: fontStyles.OpenSansRegular,
            size: theme.fontSize.xlarge,
            color: theme.colors.orange[800]
        }
    ]

    return (
        <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
            <StyledHeader
                backgroundColor={theme.colors.gray[1]}
                paddingVertical={8}
                statusProps={{ translucent: false }}
            >
                <SharedHeader title={'Text'} leftIcon />
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
                            Font Family
                        </StyledText>
                    }
                />
                {fonts.map((item, index) =>
                    <XStack
                        key={`${index}-font-family`}
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        <StyledText
                            flex={1}
                            fontFamily={item.font}
                            color={theme.colors.gray[800]}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={theme.fontSize.normal}
                            backgroundColor={theme.colors.gray[1]}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            marginBottom={4}
                        >
                            Lorem Ipsum is simply dummy
                        </StyledText>
                    </XStack>
                )}

                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Font Size
                        </StyledText>
                    }
                />
                {fonts.map((item, index) =>
                    <XStack
                        key={`${index}-font-size`}
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        <StyledText
                            flex={1}
                            fontFamily={fontStyles.OpenSansRegular}
                            color={theme.colors.gray[800]}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={item.size}
                            backgroundColor={theme.colors.gray[1]}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            marginBottom={4}
                        >
                            Lorem Ipsum is simply dummy
                        </StyledText>
                    </XStack>
                )}
                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Color
                        </StyledText>
                    }
                />
                {fonts.map((item, index) =>
                    <XStack
                        key={`${index}-color`}
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        <StyledText
                            flex={1}
                            fontFamily={fontStyles.OpenSansRegular}
                            color={item.color}
                            fontWeight={theme.fontWeight.bold}
                            fontSize={theme.fontSize.normal}
                            backgroundColor={theme.colors.gray[1]}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            marginBottom={4}
                        >
                            Lorem Ipsum is simply dummy
                        </StyledText>
                    </XStack>
                )}
            </YStack>
        </StyledSafeAreaView>
    )
}

export default Text

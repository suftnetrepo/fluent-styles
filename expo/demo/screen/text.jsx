import React from 'react'
import { StyledSafeAreaView } from '../package/safeAreaView'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import { useNavigation } from '@react-navigation/native'
import { StyledCycle } from '../package/cycle'
import RenderHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'

const Text = () => {
    const fonts = [
        {
            font: fontStyles.OpenSansBold
        },
        {
            font: fontStyles.OpenSansItalic
        },
        {
            font: fontStyles.OpenSansRegular
        }
    ]

    return (
        <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
            <StyledHeader
                backgroundColor={theme.colors.gray[1]}
                paddingVertical={8}
                statusProps={{ translucent: false }}
            >
                <RenderHeader title={'Text'} leftIcon />
            </StyledHeader>
            <YStack flex={1} marginHorizontal={8}>
                <StyledSpacer marginVertical={8} />
                {fonts.map((item, index) =>
                    <>
                        <XStack key={index} justifyContent='flex-start' alignItems='center'>
                            <StyledText
                                flex={1}
                                fontFamily={item.font}
                                color={theme.colors.gray[800]}
                                fontWeight={theme.fontWeight.normal}
                                fontSize={theme.fontSize.large}
                                backgroundColor={theme.colors.gray[1]}
                                paddingVertical={8}
                                paddingHorizontal={8}
                            >
                              Lorem Ipsum is simply dummy 
                            </StyledText>
                        </XStack>
                        <StyledSpacer marginVertical={4} />
                    </>
                )}
            </YStack>
        </StyledSafeAreaView>
    )
}

export default Text

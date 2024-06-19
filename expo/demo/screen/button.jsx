import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyledSafeAreaView } from '../package/safeAreaView'
import { StyledText } from '../package/text'
import { YStack, XStack } from '../package/stack'
import { theme } from '../package/theme'
import { StyledSpacer } from '../package/spacer'
import { StyledHeader } from '../package/header'
import SharedHeader from '../shared/header'
import { fontStyles } from '../shared/fontStyles'
import { StyledSeparator } from '../package/separator'
import { StyledButton } from '../package/button'
import { AppProvider, useAppContext } from '../shared/appContext'

const Button = () => {

    const RenderButton = ({ title, textProps, ...rest }) => {
        return (
            <StyledButton flex={1} {...rest} >
                <StyledText
                    fontFamily={fontStyles.OpenSansRegular}
                    color={theme.colors.gray[800]}
                    fontWeight={theme.fontWeight.normal}
                    fontSize={theme.fontSize.normal}
                    {...textProps}
                >
                    {title}
                </StyledText>
            </StyledButton>
        )
    }

    const RenderGroupButton = () => {
        const { state, setState } = useAppContext()
        return (
            <XStack
                paddingHorizontal={8}
                paddingVertical={8}
                justifyContent='space-evenly'
                alignItems='flex-start'
                backgroundColor={theme.colors.gray[50]}>
                <StyledButton
                    flex={1}
                    borderColor={theme.colors.gray[800]}
                    backgroundColor={theme.colors.gray[200]}
                    borderRadius={8}
                    selected={state?.tag === '1'}
                    onPress={() =>
                        setState(pre => ({
                            ...pre,
                            tag: '1'
                        })
                        )}
                >
                    <StyledText
                        fontFamily={fontStyles.OpenSansRegular}
                        fontWeight={theme.fontWeight.normal}
                        fontSize={theme.fontSize.normal}
                        selected={state?.tag === '1'}
                        color={theme.colors.gray[800]}
                        paddingVertical={8}
                        paddingHorizontal={16}
                    >
                        Started
                    </StyledText>
                </StyledButton>
                <StyledSpacer marginHorizontal={1} />
                <StyledButton
                    flex={1}
                    borderColor={theme.colors.gray[800]}
                    backgroundColor={theme.colors.gray[200]}
                    borderRadius={8}
                    selected={state?.tag === '2'}
                    onPress={() =>
                        setState(pre => ({
                            ...pre,
                            tag: '2'
                        })
                        )}
                >
                    <StyledText
                        fontFamily={fontStyles.OpenSansRegular}
                        fontWeight={theme.fontWeight.normal}
                        fontSize={theme.fontSize.normal}
                        selected={state?.tag === '2'}
                        color={theme.colors.gray[800]}
                        paddingVertical={8}
                        paddingHorizontal={16}
                    >
                        Continue
                    </StyledText>
                </StyledButton>
                <StyledSpacer marginHorizontal={1} />
                <StyledButton
                    flex={1}
                    borderColor={theme.colors.gray[800]}
                    backgroundColor={theme.colors.gray[200]}
                    borderRadius={8}
                    selected={state?.tag === '3'}
                    onPress={() =>
                        setState(pre => ({
                            ...pre,
                            tag: '3'
                        })
                        )}
                >
                    <StyledText
                        fontFamily={fontStyles.OpenSansRegular}
                        fontWeight={theme.fontWeight.normal}
                        fontSize={theme.fontSize.normal}
                        color={theme.colors.gray[800]}
                        selected={state?.tag === '3'}
                        paddingVertical={8}
                        paddingHorizontal={16}
                    >
                        Pay Now
                    </StyledText>
                </StyledButton>
            </XStack>
        )
    }

    return (
        <StyledSafeAreaView backgroundColor={theme.colors.gray[200]}>
            <StyledHeader
                backgroundColor={theme.colors.gray[1]}
                paddingVertical={8}
                statusProps={{ translucent: false }}
            >
                <SharedHeader title={'Button'} leftIcon />
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
                <XStack
                    paddingHorizontal={8}
                    paddingVertical={8}
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    backgroundColor={theme.colors.gray[50]}
                >
                    <RenderButton
                        title='Get Start'
                        borderColor={theme.colors.orange[500]}
                        backgroundColor={theme.colors.orange[500]}
                        borderRadius={8}
                        textProps={{
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            color: theme.colors.gray[1]
                        }}
                    />
                    <StyledSpacer marginHorizontal={4} />
                    <RenderButton
                        title={'Continue'}
                        borderColor={theme.colors.indigo[500]}
                        backgroundColor={theme.colors.indigo[500]}
                        borderRadius={8}
                        textProps={{
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            color: theme.colors.gray[1]
                        }}
                    />
                    <StyledSpacer marginHorizontal={4} />
                    <RenderButton
                        title={'Pay Now'}
                        borderColor={theme.colors.green[500]}
                        backgroundColor={theme.colors.green[500]}
                        borderRadius={8}
                        textProps={{
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            color: theme.colors.gray[1]
                        }}
                    />
                </XStack>
                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Variant
                        </StyledText>
                    }
                />
                <XStack
                    paddingHorizontal={8}
                    paddingVertical={8}
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    backgroundColor={theme.colors.gray[50]}
                >
                    <StyledButton
                        borderColor={theme.colors.pink[500]}
                        backgroundColor={theme.colors.pink[500]}
                        borderRadius={32}
                        flex={1}
                    >
                        <StyledText
                            fontFamily={fontStyles.OpenSansRegular}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={theme.fontSize.normal}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            color={theme.colors.gray[1]}
                        >
                            Get Start
                        </StyledText>
                    </StyledButton>
                    <StyledSpacer marginHorizontal={4} />
                    <StyledButton
                        borderColor={theme.colors.gray[500]}
                        backgroundColor={theme.colors.gray[1]}
                        borderRadius={8}
                        flex={1}
                    >
                        <StyledText
                            fontFamily={fontStyles.OpenSansRegular}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={theme.fontSize.normal}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            color={theme.colors.gray[800]}
                        >
                            Continue
                        </StyledText>
                    </StyledButton>
                    <StyledSpacer marginHorizontal={4} />
                    <StyledButton borderRadius={4} link flex={1}>
                        <StyledText
                            fontFamily={fontStyles.OpenSansRegular}
                            fontWeight={theme.fontWeight.bold}
                            fontSize={theme.fontSize.normal}
                            paddingVertical={8}
                            paddingHorizontal={8}
                            color={theme.colors.blue[800]}
                            link
                            textDecorationLine
                        >
                            Pay Now
                        </StyledText>
                    </StyledButton>
                </XStack>
                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Rounded
                        </StyledText>
                    }
                />
                <XStack
                    paddingHorizontal={8}
                    paddingVertical={8}
                    justifyContent='space-evenly'
                    alignItems='flex-start'
                    backgroundColor={theme.colors.gray[50]}
                >
                    <StyledButton
                        borderColor={theme.colors.pink[500]}
                        backgroundColor={theme.colors.pink[500]}
                        borderRadius={50}
                        height={60}
                        width={60}
                    >
                        <StyledText
                            fontFamily={fontStyles.OpenSansRegular}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={theme.fontSize.xxlarge}
                            color={theme.colors.gray[1]}
                        >
                            +
                        </StyledText>
                    </StyledButton>
                    <StyledSpacer marginHorizontal={4} />
                    <StyledButton
                        borderColor={theme.colors.purple[800]}
                        backgroundColor={theme.colors.purple[800]}
                        borderRadius={50}
                        height={60}
                        width={60}
                    >
                        <Icon
                            name={'notifications'}
                            size={30}
                            color={theme.colors.gray[1]}
                        />
                    </StyledButton>
                    <StyledSpacer marginHorizontal={4} />
                    <StyledButton
                        borderColor={theme.colors.gray[800]}
                        backgroundColor={theme.colors.gray[1]}
                        borderRadius={50}
                        height={60}
                        width={60}
                    >
                        <Icon name={'edit'} size={30} color={theme.colors.gray[800]} />
                    </StyledButton>
                    <StyledSpacer marginHorizontal={4} />
                    <StyledButton
                        borderColor={theme.colors.cyan[800]}
                        backgroundColor={theme.colors.cyan[800]}
                        borderRadius={50}
                        height={60}
                        width={60}
                    >
                        <StyledText
                            fontFamily={fontStyles.OpenSansRegular}
                            fontWeight={theme.fontWeight.normal}
                            fontSize={theme.fontSize.large}
                            color={theme.colors.gray[1]}
                        >
                            AC
                        </StyledText>
                    </StyledButton>
                </XStack>
                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Group Button
                        </StyledText>
                    }
                />
                <AppProvider tag='1'>
                    <RenderGroupButton />
                </AppProvider>
                <StyledSeparator
                    left={
                        <StyledText
                            fontWeight={theme.fontWeight.normal}
                            color={theme.colors.gray[600]}
                            fontSize={theme.fontSize.large}
                        >
                            Size
                        </StyledText>
                    }
                />
                <XStack
                    paddingHorizontal={8}
                    paddingVertical={8}
                    justifyContent='flex-start'
                    alignItems='center'
                    backgroundColor={theme.colors.gray[50]}
                >
                    <RenderButton
                        title='Go'
                        borderColor={theme.colors.blue[800]}
                        backgroundColor={theme.colors.blue[800]}
                        borderRadius={30}
                        textProps={{
                            paddingVertical: 4,
                            paddingHorizontal: 4,
                            color: theme.colors.gray[1]
                        }}
                    />
                    <StyledSpacer marginHorizontal={4} />
                    <RenderButton
                        flex={2}
                        title={'Order'}
                        borderColor={theme.colors.teal[500]}
                        backgroundColor={theme.colors.teal[500]}
                        borderRadius={30}
                        textProps={{
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            color: theme.colors.gray[1]
                        }}
                    />
                    <StyledSpacer marginHorizontal={4} />
                    <RenderButton
                        flex={2}
                        title={'Pay'}
                        borderColor={theme.colors.blueGray[500]}
                        backgroundColor={theme.colors.blueGray[500]}
                        borderRadius={30}
                        textProps={{
                            paddingVertical: 16,
                            paddingHorizontal: 24,
                            color: theme.colors.gray[1]
                        }}
                    />
                </XStack>
            </YStack>
        </StyledSafeAreaView>
    )
}

export default Button

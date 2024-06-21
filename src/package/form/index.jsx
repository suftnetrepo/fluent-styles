import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { YStack } from '../stack';
import { StyledText } from '../text';
import { StyledSpacer } from '../spacer';
import { theme } from '../theme';
import { styled } from '../styled';

const StyledInputText = styled(TextInput, {
    base: {
        borderColor: theme.colors.gray[800],
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: theme.colors.gray[1],
        width: '100%',
        color: theme.colors.gray[800],
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: theme.fontSize.normal,
        placeholderTextColor: theme.colors.gray[1],
    },
    variants: {
        fontWeight: (size) => ({
            fontWeight: size
        }),
        color: (color) => ({
            color: color
        }),
        fontSize: (size) => ({
            fontSize: size
        }),
        fontFamily: (font) => {
            if (!font) return
            return {
                fontFamily: font
            }
        },
        textAlign: (align) => {
            if (!align) return
            return {
                textAlign: align
            }
        },       
        borderRadius: (value = 16) => ({
            borderRadius: value
        }),
        borderColor: (value) => ({
            borderColor: value
        }),
        backgroundColor: (value) => ({
            backgroundColor: value
        }),
        noBorder: {
            true: { borderWidth: 0 }
        },
        placeholderTextColor: (value) => ({
            placeholderTextColor: value
        }),
    },
});

const StyledInput = forwardRef(({ label, flex = 0, borderColor, errorMessage, error, errorProps, labelProps, ...rest }, ref) => {
    return (
        <YStack flex={flex} justifyContent='flex-start' alignItems='flex-start'>
            {
                label && (
                    <>
                        <StyledText paddingHorizontal={8} color={theme.colors.gray[800]} fontSize={theme.fontSize.normal} fontWeight={theme.fontWeight.normal} {...labelProps}>
                            {label}
                        </StyledText>
                        <StyledSpacer marginVertical={4} />
                    </>
                )
            }
            <StyledInputText placeholderTextColor={theme.colors.gray[400]} ref={ref} {...rest} borderColor={error ? theme.colors.pink[500] : borderColor} />
            {
                errorMessage && (
                    <>
                        <StyledSpacer marginVertical={1} />
                        <StyledText marginHorizontal={8} fontWeight={theme.fontWeight.bold} fontSize={theme.fontSize.small} color={theme.colors.pink[500]} {...errorProps}>
                            {errorMessage}
                        </StyledText>
                    </>
                )
            }
        </YStack>
    )
})

const StyledMultiInput = ({ label, errorMessage, borderColor, error, errorProps, labelProps, ...rest }) => {
    return (
        <YStack width={'100%'} justifyContent='flex-start' alignItems='flex-start'>
            {
                label && (
                    <>
                        <StyledSpacer marginVertical={4} />
                        <StyledText paddingHorizontal={8} color={theme.colors.gray[800]} fontSize={theme.fontSize.normal} fontWeight={theme.fontWeight.normal} {...labelProps}>
                            {label}
                        </StyledText>
                        <StyledSpacer marginVertical={4} />
                    </>

                )
            }
            <StyledInputText borderRadius={16} textAlignVertical='top' multiline numberOfLines={5} inputMode='text' {...rest} borderColor={error ? theme.colors.pink[500] : borderColor} />
            {
                errorMessage && (
                    <>
                        <StyledSpacer marginVertical={1} />
                        <StyledText marginHorizontal={8} fontWeight={theme.fontWeight.bold} fontSize={theme.fontSize.small} color={theme.colors.pink[500]} {...errorProps}>
                            {errorMessage}
                        </StyledText>
                    </>
                )
            }

        </YStack>
    )
}

export { StyledInput, StyledMultiInput }
export default StyledInputText
// @ts-nocheck
import React from "react";
import { Text } from 'react-native';
import { XStack, YStack } from "../stack";
import { StyledSpacer } from "../spacer";
import { styled } from "../styled";
import { theme } from "../theme";
import { isValidColor, isValidNumber, isValidString } from '../utils';

const Badge = styled(Text, {
    base: {
        borderColor: theme.colors.gray[300],
        borderRadius: 32,
        backgroundColor: theme.colors.gray[1],
        fontSize: theme.fontSize.normal,
        color: theme.colors.gray[900],
        fontWeight: theme.fontWeight.bold,
        position: 'relative',
        textAlign: 'center'
    },
    variants: {
        fontWeight: (size = theme.fontWeight.normal) => {
            if (!isValidString(size)) {
                throw new Error('Invalid fontWeight value')
            }
            return { fontWeight: size }
        },
        color: (color = theme.colors.gray[800]) => {
            if (!isValidColor(color)) {
                throw new Error('Invalid color value')
            }
            return { color: color }
        },
        fontSize: (size = theme.fontSize.normal) => {
            if (!isValidNumber(size)) {
                throw new Error('Invalid fontSize value')
            }
            return { fontSize: size }
        },
        flexWrap: 'wrap',
        absolute: {
            true: {
                position: 'absolute'
            }
        },
        fontFamily: (font) => {
            if (!font) return
            return {
                fontFamily: font
            }
        },
        textAlign: (align = 'left') => {
            const validAlignments = ['auto', 'left', 'right', 'center', 'justify']
            if (!validAlignments.includes(align)) {
                throw new Error('Invalid textAlign value')
            }
            return { textAlign: align }
        },
        borderColor: color => {
            if (!color) return
            if (!isValidColor(color)) {
                throw new Error('Invalid color value')
            }
            return { borderColor: color }
        },
        borderRadius: (size = 32) => {
            if (!isValidNumber(size)) {
                throw new Error('Invalid borderRadius value')
            }
            return { borderRadius: size }
        },
        backgroundColor: color => {
            if (!color) return
            if (!isValidColor(color)) {
                throw new Error('Invalid color value')
            }
            return { backgroundColor: color }
        },
        right: (size = 0) => {
            if (!isValidNumber(size)) {
                throw new Error('Invalid right value')
            }
            return { right: size }
        },
        top: (size = 0) => {
            if (!isValidNumber(size)) {
                throw new Error('Invalid top value')
            }
            return { top: size }
        },
    }
})

const StyledBadge = ({ children, ...rest }) => {
    return (
        <Badge {...rest}>
            {children}
        </Badge>
    )
}

const StyledBadgeWithIcon = ({ iconLeft, iconRight, textProps, title, ...rest }) => {
    return (
        <XStack justifyContent='flex-start' alignItems='center' {...rest}>
            {
                iconLeft && (<>
                    {iconLeft}
                    <StyledSpacer marginHorizontal={2} />
                </>)
            }
            <Badge backgroundColor={theme.colors.transparent} {...textProps}>
                {title}
            </Badge>
            {
                iconRight && (<>
                    {iconRight}
                    <StyledSpacer marginHorizontal={2} />
                </>)
            }
        </XStack>
    )
}

const StyledBadgeIcon = ({ top = -1, right = 5, icon, charProps, char, ...rest }) => {
    return (
        <YStack justifyContent='center' alignItems='center' {...rest}>
            {icon}
            <Badge absolute top={top} right={right} {...charProps}>
                {char}
            </Badge>
        </YStack>
    )
}

export { StyledBadge, StyledBadgeWithIcon, StyledBadgeIcon }

// @ts-nocheck
import React from "react";
import { Text } from 'react-native';
import { XStack, YStack } from "../stack";
import { StyledSpacer } from "../spacer";
import { styled } from "../styled";
import { theme } from "../theme";

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
        fontWeight: (size) => ({
            fontWeight: size
        }),
        color: (color) => ({
            color: color
        }),
        fontSize: (size) => ({
            fontSize: size
        }),
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
        textAlign: (align) => ({
            textAlign: align || 'center'
        }),
        borderColor: color => ({
            borderColor: color || theme.colors.gray[300]
        }),
        borderRadius: (size) => ({
            borderRadius: size || 32
        }),
        backgroundColor: color => ({
            backgroundColor: color || theme.colors.gray[300]
        }),
        right: (size) => ({
            right: size
        }),
        top: (size) => ({
            top: size
        }),
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

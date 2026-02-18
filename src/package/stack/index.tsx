import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { styled } from '../utils/styled';

/**
 * Stack-specific layout variants for flex direction
 * Supports dual-level customization:
 * - Variant level: horizontal={[true, { gap: 10 }]}
 * - Component level: horizontal={true} gap={15}
 */
type StackVariants = {
    horizontal?: boolean | [boolean, ViewStyle];
    vertical?: boolean | [boolean, ViewStyle];
};

type StackComponentProps = StackVariants & ViewProps & ViewStyle;

/**
 * Base Stack component - flexible layout container
 * Default: neutral layout (no flex direction preset)
 * Use horizontal or vertical variants to set flex direction
 */
const StackBase = styled<StackComponentProps>(View, {
    base: {
        position: 'relative',
    } as ViewStyle,
    variants: {
        vertical: {
            true: {
                flexDirection: 'column',
            } as ViewStyle,
            false: {} as ViewStyle,
        },
        horizontal: {
            true: {
                flexDirection: 'row',
            } as ViewStyle,
            false: {} as ViewStyle,
        },
    } as any
});

interface StyledStackProps extends StackComponentProps {
    children?: React.ReactNode;
}

/**
 * Wrapper component for Stack with children support
 * Flexible layout container with flex direction control
 */
const Stack = React.forwardRef<View, StyledStackProps>(({ children, ...rest }, ref) => {
    return (
        <StackBase ref={ref} {...rest}>
            {children}
        </StackBase>
    );
});

Stack.displayName = 'Stack';

/**
 * XStack - Horizontal Stack
 * Convenience component with flexDirection: 'row' by default
 * Equivalent to: <Stack horizontal={true} />
 */
const XStackBase = styled<StackComponentProps>(View, {
    base: {
        position: 'relative',
        flexDirection: 'row',
    } as ViewStyle
});

interface StyledXStackProps extends StackComponentProps {
    children?: React.ReactNode;
}

const XStack = React.forwardRef<View, StyledXStackProps>(({ children, ...rest }, ref) => {
    return (
        <XStackBase ref={ref} {...rest}>
            {children}
        </XStackBase>
    );
});

XStack.displayName = 'XStack';

/**
 * YStack - Vertical Stack
 * Convenience component with flexDirection: 'column' by default
 * Equivalent to: <Stack vertical={true} />
 */
const YStackBase = styled<StackComponentProps>(View, {
    base: {
        position: 'relative',
        flexDirection: 'column',
    } as ViewStyle,
});

interface StyledYStackProps extends StackComponentProps {
    children?: React.ReactNode;
}

const YStack = React.forwardRef<View, StyledYStackProps>(({ children, ...rest }, ref) => {
    return (
        <YStackBase ref={ref} {...rest}>
            {children}
        </YStackBase>
    );
});

YStack.displayName = 'YStack';

export { Stack, XStack, YStack, StackBase, XStackBase, YStackBase };
export type { StackVariants, StackComponentProps, StyledStackProps, StyledXStackProps, StyledYStackProps };

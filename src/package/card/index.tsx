import React from 'react';
import {
  View,
  ViewProps,
  ViewStyle,
  Pressable,
  PressableProps,
  Platform,
  Dimensions,
} from 'react-native';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';

/**
 * Card-specific variants for shadow and sizing
 * Supports simple boolean and string variants:
 * - Shadow levels: 'light', 'lightMedium', 'medium', 'mediumDark', 'dark', 'veryDark'
 * - Sizing: responsive width variants
 */

// Shadow utility - Platform-specific shadow definitions
const shadow = {
  light: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    android: {
      elevation: 1,
    },
  }) as ViewStyle,
  lightMedium: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.24,
      shadowRadius: 2.84,
    },
    android: {
      elevation: 3,
    },
  }) as ViewStyle,
  medium: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
    },
    android: {
      elevation: 7,
    },
  }) as ViewStyle,
  mediumDark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
    },
    android: {
      elevation: 10,
    },
  }) as ViewStyle,
  dark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
    },
    android: {
      elevation: 14,
    },
  }) as ViewStyle,
  veryDark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 13.34,
    },
    android: {
      elevation: 20,
    },
  }) as ViewStyle,
};

type ShadowLevel = keyof typeof shadow;

type CardVariants = {
  shadow?: ShadowLevel;
};

type CardComponentProps = CardVariants & ViewProps & ViewStyle;

/**
 * Base Card component with shadow support
 * Flexible layout container with optional shadow variants
 */
const CardBase = styled<CardComponentProps>(View, {
  base: {
    flexDirection: 'column',
    backgroundColor: theme.colors.gray[50],
    borderRadius: 8,
  } as ViewStyle,
  variants: {
    shadow: {
      light: shadow.light,
      lightMedium: shadow.lightMedium,
      medium: shadow.medium,
      mediumDark: shadow.mediumDark,
      dark: shadow.dark,
      veryDark: shadow.veryDark,
    } as any,
  },
});

interface StyledCardProps extends CardComponentProps {
  children?: React.ReactNode;
  pressable?: boolean;
  pressableProps?: Omit<PressableProps, 'children'>;
}

/**
 * Wrapper component for Card with optional pressable support
 * Flexible layout container with shadow variants
 * Can be wrapped in Pressable for interactive behavior
 */
const StyledCard = React.forwardRef<View, StyledCardProps>(
  (
    {
      children,
      pressable = false,
      pressableProps,
      ...rest
    },
    ref
  ) => {
    const cardContent = (
      <CardBase ref={ref} {...rest}>
        {children}
      </CardBase>
    );

    if (pressable && pressableProps) {
      return <Pressable {...pressableProps}>{cardContent}</Pressable>;
    }

    return cardContent;
  }
);

StyledCard.displayName = 'StyledCard';

export { StyledCard, CardBase, shadow };
export type { CardVariants, CardComponentProps, StyledCardProps, ShadowLevel };

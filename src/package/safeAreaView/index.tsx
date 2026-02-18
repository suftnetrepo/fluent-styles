import React, { forwardRef, ReactNode } from 'react';
import {
  SafeAreaView,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';

/**
 * Props for SafeAreaView component
 */
interface StyledSafeAreaViewProps extends ViewProps {
  // Background
  backgroundColor?: string;
  variant?: 'light' | 'dark' | 'primary' | 'surface' | 'transparent';

  // Layout
  flex?: number;
  column?: boolean;

  // Accessibility
  accessibilityLabel?: string;

  // Children
  children?: ReactNode;
}

/**
 * Variant configuration for SafeAreaView backgrounds
 */
const variantConfig: Record<
  'light' | 'dark' | 'primary' | 'surface' | 'transparent',
  { backgroundColor: string; label: string }
> = {
  light: {
    backgroundColor: theme.colors.white[500],
    label: 'light',
  },
  dark: {
    backgroundColor: theme.colors.gray[900],
    label: 'dark',
  },
  primary: {
    backgroundColor: theme.colors.blue[50],
    label: 'primary',
  },
  surface: {
    backgroundColor: theme.colors.gray[50],
    label: 'surface',
  },
  transparent: {
    backgroundColor: 'transparent',
    label: 'transparent',
  },
};

/**
 * Padding size configuration
 */
const paddingConfig: Record<'small' | 'medium' | 'large', number> = {
  small: 12,
  medium: 16,
  large: 24,
};

/**
 * Base styled SafeAreaView
 */
const SafeAreaViewBase = styled<any>(SafeAreaView, {
  base: {
    flex: 1,
    backgroundColor: theme.colors.white[500],
  } as ViewStyle,
});

/**
 * StyledSafeAreaView: Professional safe area container
 *
 * Features:
 * - Handles unsafe areas (notches, rounded corners)
 * - Theme-integrated background colors
 * - Predefined padding variants
 * - Full flex layout support
 * - Accessibility support
 *
 * Use for: Screen containers, main app layouts, safe area wrappers
 */
const StyledSafeAreaView = forwardRef<SafeAreaView, StyledSafeAreaViewProps>(
  (
    {
      variant = 'light',
      backgroundColor,
      flex = 1,
      column = true,
      accessibilityLabel,
      children,
      ...rest
    },
    ref
  ) => {
    // Determine background color
    const variantBgColor = backgroundColor || variantConfig[variant].backgroundColor;

    return (
      <SafeAreaViewBase
        ref={ref}
        flex={flex}
        backgroundColor={variantBgColor}
        accessibilityLabel={accessibilityLabel}
        accessible={true}
        {...rest}
      >
        {children}
      </SafeAreaViewBase>
    );
  }
);

StyledSafeAreaView.displayName = 'StyledSafeAreaView';

/**
 * Exports
 */
export {
  StyledSafeAreaView,
  StyledSafeAreaViewProps,
  variantConfig,
  paddingConfig,
};
export default StyledSafeAreaView;

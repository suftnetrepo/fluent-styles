import React, { forwardRef } from 'react';
import {
  ScrollView,
  ScrollViewProps,
  ViewStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { viewStyleVariants, viewStyleStringVariants } from '../utils/viewStyleVariants';

/**
 * Props for ScrollView component
 */
interface StyledScrollViewProps extends ScrollViewProps {
  // Background
  backgroundColor?: string;
  variant?: 'light' | 'dark' | 'primary' | 'surface' | 'transparent';

  // Padding variants
  padded?: 'small' | 'medium' | 'large';

  // Scroll behavior
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  scrollEnabled?: boolean;

  // Layout
  flex?: number;

  // Accessibility
  accessibilityLabel?: string;
}

/**
 * Variant configuration for ScrollView backgrounds
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
 * Base styled ScrollView
 */
const ScrollViewBase = styled<any>(ScrollView, {
  base: {
    flex: 1,
    backgroundColor: theme.colors.white[500],
  } as ViewStyle,
});

/**
 * StyledScrollView: Professional scroll view component
 *
 * Features:
 * - Theme-integrated background colors
 * - Predefined padding variants
 * - customizable scroll behavior
 * - Full ViewStyle support via viewStyleVariants
 * - Accessibility support
 */
const StyledScrollView = forwardRef<ScrollView, StyledScrollViewProps>(
  (
    {
      variant = 'light',
      backgroundColor,
      padded,
      showsVerticalScrollIndicator = true,
      showsHorizontalScrollIndicator = false,
      scrollEnabled = true,
      flex = 1,
      accessibilityLabel,
      contentContainerStyle,
      children,
      ...rest
    },
    ref
  ) => {
    // Determine background color
    const variantBgColor = backgroundColor || variantConfig[variant].backgroundColor;

    // Build content padding
    let contentPadding = 0;
    if (padded) {
      contentPadding = paddingConfig[padded];
    }

    // Merge content container styles
    const mergedContentStyle: ViewStyle = {
      ...(contentContainerStyle as ViewStyle),
      paddingHorizontal: contentPadding,
      paddingVertical: contentPadding,
    };

    return (
      <ScrollViewBase
        ref={ref}
        flex={flex}
        backgroundColor={variantBgColor}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        scrollEnabled={scrollEnabled}
        contentContainerStyle={mergedContentStyle}
        accessibilityLabel={accessibilityLabel}
        accessible={true}
        {...rest}
      >
        {children}
      </ScrollViewBase>
    );
  }
);

StyledScrollView.displayName = 'StyledScrollView';

/**
 * Props for HorizontalScrollView - Scrolls horizontally
 */
interface HorizontalScrollViewProps extends Omit<StyledScrollViewProps, 'horizontal'> {}

/**
 * HorizontalScrollView: Horizontal scrolling container
 *
 * Use for: Image carousels, horizontal lists, tab scrollers
 */
const HorizontalScrollView = forwardRef<ScrollView, HorizontalScrollViewProps>(
  (
    {
      variant = 'light',
      backgroundColor,
      padded,
      showsVerticalScrollIndicator = false,
      showsHorizontalScrollIndicator = true,
      scrollEnabled = true,
      flex = 1,
      ...rest
    },
    ref
  ) => {
    const variantBgColor = backgroundColor || variantConfig[variant].backgroundColor;

    return (
      <ScrollViewBase
        ref={ref}
        horizontal={true}
        flex={flex}
        backgroundColor={variantBgColor}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        scrollEnabled={scrollEnabled}
        {...rest}
      >
        {rest.children}
      </ScrollViewBase>
    );
  }
);

HorizontalScrollView.displayName = 'HorizontalScrollView';

/**
 * Exports
 */
export {
  StyledScrollView,
  HorizontalScrollView,
  StyledScrollViewProps,
  HorizontalScrollViewProps,
  variantConfig,
  paddingConfig,
};
export default StyledScrollView;

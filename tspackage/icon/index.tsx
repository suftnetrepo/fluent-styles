import React from 'react';
// @ts-ignore - react-native-vector-icons does not have type declarations
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { ComponentProps } from 'react';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';

/**
 * Icon component - Material Design Icons wrapper
 *
 * Provides a type-safe wrapper around MaterialIcons from react-native-vector-icons.
 * Supports size variants and custom colors with theme integration.
 */

type MaterialIconProps = ComponentProps<typeof MaterialIcons>;

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type IconVariants = {
  size?: SizeVariant;
};

type IconComponentProps = IconVariants & MaterialIconProps;

/**
 * Size definitions for icon component
 */
const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
};

/**
 * Base Icon component with size variants
 * Wrapper for MaterialIcons with TypeScript support
 */
const IconBase = styled<IconComponentProps>(MaterialIcons, {
  base: {
    color: theme.colors.gray[800],
  } as any,
  variants: {
    size: {
      xs: { fontSize: sizes.xs },
      sm: { fontSize: sizes.sm },
      md: { fontSize: sizes.md },
      lg: { fontSize: sizes.lg },
      xl: { fontSize: sizes.xl },
    } as any,
  },
});

interface StyledIconProps extends IconComponentProps {
  /**
   * Icon name from Material Design Icons
   * @example 'home', 'settings', 'star', 'arrow-back'
   */
  name: string;

  /**
   * Icon size variant or custom size in pixels
   * @default 'md' (24px)
   */
  size?: SizeVariant | number;

  /**
   * Icon color (theme color or hex)
   * @default theme.colors.gray[800]
   */
  color?: string;

  /**
   * Optional callback when icon is pressed
   */
  onPress?: () => void;

  /**
   * Optional callback when icon is long pressed
   */
  onLongPress?: () => void;
}

/**
 * Styled Icon component with size variants and theme support
 *
 * @example
 * // Basic icon
 * <StyledIcon name="home" />
 *
 * @example
 * // With size variant
 * <StyledIcon name="star" size="lg" />
 *
 * @example
 * // With custom color
 * <StyledIcon 
 *   name="settings" 
 *   size="md"
 *   color={theme.colors.primary[500]}
 *   onPress={() => handleSettings()}
 * />
 *
 * @example
 * // With custom pixel size
 * <StyledIcon name="heart" size={40} color={theme.colors.red[500]} />
 */
const StyledIcon = React.forwardRef<typeof MaterialIcons, StyledIconProps>(
  (
    {
      name = 'home',
      size = 'md',
      color = theme.colors.gray[800],
      onPress,
      onLongPress,
      ...rest
    },
    ref
  ) => {
    // Handle both size variants and custom pixel sizes
    const sizeValue = typeof size === 'string' ? sizes[size] : size;

    return (
      <IconBase
        ref={ref}
        {...rest}
        name={name}
        size={sizeValue}
        color={color}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  }
);

StyledIcon.displayName = 'StyledIcon';

export { StyledIcon, IconBase };
export type { IconVariants, IconComponentProps, StyledIconProps, SizeVariant };

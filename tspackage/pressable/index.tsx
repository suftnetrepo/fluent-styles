import React, { forwardRef, useState } from 'react';
import {
  Pressable,
  PressableProps as RNPressableProps,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { YStack, XStack } from '../stack';

/**
 * Props for Pressable component
 */
interface PressableProps extends Omit<RNPressableProps, 'ref'> {
  // State
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;

  // Sizing
  size?: 'small' | 'medium' | 'large';

  // Color variants
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'ghost';

  // Styling
  rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';

  // State feedback
  opacity?: boolean;
  scale?: boolean;

  // Custom colors
  backgroundColor?: string;
  pressedColor?: string;
  hoverColor?: string;

  // Disabled
  disabled?: boolean;

  // Layout
  flex?: number;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Size configuration for Pressable
 */
const sizeConfig: Record<'small' | 'medium' | 'large', { padding: number; label: string }> = {
  small: { padding: 8, label: 'small' },
  medium: { padding: 12, label: 'medium' },
  large: { padding: 16, label: 'large' },
};

/**
 * Border radius configuration
 */
const radiusConfig: Record<'none' | 'small' | 'medium' | 'large' | 'full', number> = {
  none: 0,
  small: 4,
  medium: 8,
  large: 16,
  full: 999,
};

/**
 * Variant configuration for Pressable
 */
const variantConfig: Record<
  'default' | 'primary' | 'success' | 'warning' | 'danger' | 'ghost',
  { backgroundColor: string; pressedColor: string; label: string }
> = {
  default: {
    backgroundColor: theme.colors.gray[200],
    pressedColor: theme.colors.gray[300],
    label: 'default',
  },
  primary: {
    backgroundColor: theme.colors.blue[500],
    pressedColor: theme.colors.blue[600],
    label: 'primary',
  },
  success: {
    backgroundColor: theme.colors.green[500],
    pressedColor: theme.colors.green[600],
    label: 'success',
  },
  warning: {
    backgroundColor: theme.colors.amber[500],
    pressedColor: theme.colors.amber[600],
    label: 'warning',
  },
  danger: {
    backgroundColor: theme.colors.red[500],
    pressedColor: theme.colors.red[600],
    label: 'danger',
  },
  ghost: {
    backgroundColor: 'transparent',
    pressedColor: theme.colors.gray[100],
    label: 'ghost',
  },
};

/**
 * Base styled Pressable
 */
const StyledPressable = styled<any>(Pressable, {
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});

/**
 * Pressable: Interactive button-like component with state feedback
 *
 * Features:
 * - Multiple size options (small, medium, large)
 * - 6 color variants (default, primary, success, warning, danger, ghost)
 * - Press, long-press, and hover states
 * - Opacity and scale feedback
 * - Theme integration
 * - Disabled state
 * - Accessibility support
 */
const PressableComponent = forwardRef<any, PressableProps>(
  (
    {
      size = 'medium',
      variant = 'primary',
      rounded = 'medium',
      opacity = true,
      scale = false,
      backgroundColor,
      pressedColor,
      hoverColor,
      disabled = false,
      flex,
      onPress,
      onLongPress,
      onHoverIn,
      onHoverOut,
      accessibilityLabel,
      accessibilityHint,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const sizeConfigValue = sizeConfig[size];
    const variantConfigValue = variantConfig[variant];
    const borderRadius = radiusConfig[rounded];

    // Determine colors
    const finalBackgroundColor =
      backgroundColor || variantConfigValue.backgroundColor;
    const finalPressedColor = pressedColor || variantConfigValue.pressedColor;
    const finalHoverColor = hoverColor || variantConfigValue.pressedColor;

    // Calculate opacity based on state
    const calculateOpacity = () => {
      if (disabled) return 0.5;
      if (isPressed) return opacity ? 0.8 : 1;
      if (isHovered) return opacity ? 0.9 : 1;
      return 1;
    };

    // Calculate scale based on state
    const calculateScale = () => {
      if (isPressed && scale) return 0.95;
      if (isHovered && scale) return 1.02;
      return 1;
    };

    const currentBackgroundColor = isPressed ? finalPressedColor : finalBackgroundColor;

    return (
      <StyledPressable
        ref={ref}
        disabled={disabled}
        onPress={onPress}
        onLongPress={onLongPress}
        onHoverIn={() => {
          setIsHovered(true);
          onHoverIn?.();
        }}
        onHoverOut={() => {
          setIsHovered(false);
          onHoverOut?.();
        }}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={({ pressed }: { pressed: boolean }) => [
          {
            padding: sizeConfigValue.padding,
            backgroundColor: currentBackgroundColor,
            borderRadius,
            opacity: calculateOpacity(),
            transform: [{ scale: calculateScale() }],
            flex: flex,
          } as ViewStyle,
          style instanceof Function ? style({ pressed }) : style,
        ]}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessible={true}
        accessibilityRole="button"
        {...rest}
      >
        {children}
      </StyledPressable>
    );
  }
);

PressableComponent.displayName = 'Pressable';

/**
 * Props for PressableText - Pressable with text
 */
interface PressableTextProps extends Omit<PressableProps, 'ref'> {
  label: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: 'normal' | 'bold' | 'semiBold' | '600' | '700';
}

/**
 * PressableText: Pressable with integrated text
 *
 * Use for: Text buttons, labels with press states
 */
const PressableText = forwardRef<any, PressableTextProps>(
  (
    {
      label,
      labelColor,
      labelSize = 16,
      labelWeight = 'bold',
      size = 'medium',
      variant = 'primary',
      rounded = 'medium',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const getLabelColor = () => {
      if (labelColor) return labelColor;
      if (variant === 'ghost') return theme.colors.gray[800];
      if (variant === 'default') return theme.colors.gray[800];
      return theme.colors.white[500];
    };

    return (
      <PressableComponent
        ref={ref}
        size={size}
        variant={variant}
        rounded={rounded}
        disabled={disabled}
        {...rest}
      >
        <YStack>
          {typeof label === 'string' ? (
            // Will render as text using StyledText when imported
            <span style={{ color: getLabelColor(), fontSize: labelSize, fontWeight: labelWeight }}>
              {label}
            </span>
          ) : (
            label
          )}
        </YStack>
      </PressableComponent>
    );
  }
);

PressableText.displayName = 'PressableText';

/**
 * Props for PressableIcon - Pressable with icon
 */
interface PressableIconProps extends Omit<PressableProps, 'ref'> {
  icon: React.ReactNode;
  iconSize?: number;
}

/**
 * PressableIcon: Pressable optimized for icon buttons
 *
 * Use for: Icon buttons, toolbar buttons
 */
const PressableIcon = forwardRef<any, PressableIconProps>(
  (
    {
      icon,
      iconSize = 24,
      size = 'medium',
      variant = 'default',
      rounded = 'large',
      ...rest
    },
    ref
  ) => {
    return (
      <PressableComponent
        ref={ref}
        size={size}
        variant={variant}
        rounded={rounded}
        {...rest}
      >
        <YStack width={iconSize} height={iconSize}>
          {icon}
        </YStack>
      </PressableComponent>
    );
  }
);

PressableIcon.displayName = 'PressableIcon';

/**
 * Props for PressableGroup - Multiple pressable items
 */
interface PressableGroupProps {
  items: Array<{
    id: string;
    label: string;
    onPress: (id: string) => void;
  }>;
  selectedId?: string;
  direction?: 'row' | 'column';
  gap?: number;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'ghost';
  disabled?: boolean;
}

/**
 * PressableGroup: Group of selectable pressable items
 *
 * Use for: Button groups, tab bars, segmented controls
 */
const PressableGroup = forwardRef<any, PressableGroupProps>(
  (
    {
      items,
      selectedId,
      direction = 'row',
      gap = 8,
      variant = 'primary',
      disabled = false,
    },
    ref
  ) => {
    const StackComponent = direction === 'row' ? XStack : YStack;

    return (
      <StackComponent gap={gap} alignItems="center">
        {items.map(item => (
          <PressableComponent
            key={item.id}
            variant={selectedId === item.id ? variant : 'default'}
            onPress={() => !disabled && item.onPress(item.id)}
            disabled={disabled}
          >
            <YStack>{item.label}</YStack>
          </PressableComponent>
        ))}
      </StackComponent>
    );
  }
);

PressableGroup.displayName = 'PressableGroup';

/**
 * Exports
 */
export {
  PressableComponent as Pressable,
  PressableText,
  PressableIcon,
  PressableGroup,
  PressableProps,
  PressableTextProps,
  PressableIconProps,
  PressableGroupProps,
  sizeConfig,
  variantConfig,
  radiusConfig,
};
export default PressableComponent;

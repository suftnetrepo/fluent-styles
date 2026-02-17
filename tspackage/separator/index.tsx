import React, { forwardRef } from 'react';
import {
  View,
  ViewProps as RNViewProps,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { XStack, YStack } from '../stack';

/**
 * Props for Separator component
 */
interface SeparatorProps extends Omit<RNViewProps, 'ref' | 'width' | 'height'> {
  // Type configuration
  orientation?: 'horizontal' | 'vertical';

  // Styling
  color?: string;
  variant?: 'default' | 'muted' | 'primary' | 'subtle';

  // Sizing
  thickness?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  flex?: number;

  // Spacing
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  // Accessibility
  accessibilityLabel?: string;
  role?: 'separator';
}

/**
 * Props for SeparatorWithLabel - Separator with text in the middle
 */
interface SeparatorWithLabelProps extends Omit<SeparatorProps, 'ref'> {
  label: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: 'bold' | 'normal' | '600';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  gap?: number;
}

/**
 * Props for SeparatorGroup - Multiple separators
 */
interface SeparatorGroupProps extends Omit<RNViewProps, 'ref'> {
  count?: number;
  spacing?: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'muted' | 'primary' | 'subtle';
  thickness?: number;
  color?: string;
}

/**
 * Color variant configuration for Separator
 */
const variantConfig: Record<'default' | 'muted' | 'primary' | 'subtle', string> = {
  default: theme.colors.gray[300],
  muted: theme.colors.gray[200],
  primary: theme.colors.blue[300],
  subtle: theme.colors.gray[100],
};

/**
 * Default thickness values
 */
const thicknessConfig: Record<'thin' | 'medium' | 'thick', number> = {
  thin: 1,
  medium: 2,
  thick: 4,
};

/**
 * Base styled View for Separator
 */
const StyledSeparatorBase = styled<any>(View, {
  base: {
    width: '100%',
  } as ViewStyle,
});

/**
 * Separator: Simple divider line in various styles
 *
 * Features:
 * - Horizontal and vertical orientations
 * - 4 color variants (default, muted, primary, subtle)
 * - Customizable thickness and width/height
 * - Full margin control
 * - Theme integration
 * - Accessibility support
 */
const SeparatorComponent = forwardRef<any, SeparatorProps>(
  (
    {
      orientation = 'horizontal',
      color,
      variant = 'default',
      thickness = 1,
      width,
      height,
      flex,
      margin = 0,
      marginVertical,
      marginHorizontal,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      accessibilityLabel = 'Divider',
      role = 'separator',
      style,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];

    const containerStyle: ViewStyle = {
      ...(orientation === 'horizontal' ? {
        height: thickness,
        backgroundColor: finalColor,
        width: width ?? '100%',
      } : {
        width: thickness,
        backgroundColor: finalColor,
        height: height ?? '100%',
      }),
      ...(flex !== undefined && { flex }),
      margin: margin || undefined,
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
    };

    return (
      <StyledSeparatorBase
        ref={ref}
        style={[containerStyle, style]}
        accessibilityRole={role}
        accessibilityLabel={accessibilityLabel}
        accessible={true}
        {...rest}
      />
    );
  }
);

SeparatorComponent.displayName = 'Separator';

/**
 * SeparatorWithLabel: Separator with a label in the middle
 *
 * Use for: Section dividers with labels, "or" separators in forms, visual breaks with titles
 */
const SeparatorWithLabel = forwardRef<any, SeparatorWithLabelProps>(
  (
    {
      label,
      labelColor,
      labelSize = 14,
      labelWeight = 'normal',
      leftContent,
      rightContent,
      gap = 12,
      orientation = 'horizontal',
      color,
      variant = 'muted',
      thickness = 1,
      margin = 12,
      accessibilityLabel,
      style,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];
    const finalLabelColor = labelColor || theme.colors.gray[600];

    if (orientation === 'vertical') {
      // Vertical separator with label
      return (
        <YStack
          ref={ref}
          alignItems="center"
          gap={gap}
          margin={margin}
          {...rest}
        >
          <SeparatorComponent
            thickness={thickness}
            color={finalColor}
            height={30}
            orientation="vertical"
          />
          {label && (
            <span
              style={{
                fontSize: labelSize,
                fontWeight: labelWeight,
                color: finalLabelColor,
              }}
            >
              {label}
            </span>
          )}
          <SeparatorComponent
            thickness={thickness}
            color={finalColor}
            height={30}
            orientation="vertical"
          />
        </YStack>
      );
    }

    // Horizontal separator with label (default)
    return (
      <XStack
        ref={ref}
        alignItems="center"
        gap={gap}
        margin={margin}
        accessibilityLabel={accessibilityLabel || `Divider: ${label}`}
        accessible={true}
        {...rest}
      >
        {leftContent ? (
          leftContent
        ) : (
          <SeparatorComponent
            flex={1}
            thickness={thickness}
            color={finalColor}
          />
        )}

        {label && (
          <span
            style={{
              fontSize: labelSize,
              fontWeight: labelWeight,
              color: finalLabelColor,
              flexShrink: 1,
            }}
          >
            {label}
          </span>
        )}

        {rightContent ? (
          rightContent
        ) : (
          <SeparatorComponent
            flex={1}
            thickness={thickness}
            color={finalColor}
          />
        )}
      </XStack>
    );
  }
);

SeparatorWithLabel.displayName = 'SeparatorWithLabel';

/**
 * SeparatorGroup: Multiple separator lines
 *
 * Use for: Dashed patterns, repeating dividers, visual rhythms
 */
const SeparatorGroup = forwardRef<any, SeparatorGroupProps>(
  (
    {
      count = 3,
      spacing = 8,
      orientation = 'horizontal',
      variant = 'muted',
      thickness = 1,
      color,
      style,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];
    const StackComponent = orientation === 'horizontal' ? YStack : XStack;

    return (
      <StackComponent
        ref={ref}
        gap={spacing}
        {...rest}
      >
        {Array.from({ length: count }).map((_, index) => (
          <SeparatorComponent
            key={index}
            orientation={orientation}
            color={finalColor}
            thickness={thickness}
            style={
              orientation === 'horizontal'
                ? { height: 20, width: '100%' }
                : { width: 20, height: '100%' }
            }
          />
        ))}
      </StackComponent>
    );
  }
);

SeparatorGroup.displayName = 'SeparatorGroup';

/**
 * DottedSeparator: Separator with dotted pattern
 *
 * Use for: Decorative separators, form breaks, visual hierarchy
 */
const DottedSeparator = forwardRef<any, SeparatorProps>(
  (
    {
      color,
      variant = 'muted',
      thickness = 1,
      width,
      margin = 0,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];

    return (
      <XStack
        ref={ref}
        gap={4}
        alignItems="center"
        width={(width ?? '100%') as DimensionValue}
        margin={margin}
        {...rest}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <View
            key={index}
            style={{
              width: 4,
              height: thickness * 4,
              backgroundColor: finalColor,
              borderRadius: 2,
            }}
          />
        ))}
      </XStack>
    );
  }
);

DottedSeparator.displayName = 'DottedSeparator';

/**
 * Exports
 */
export {
  SeparatorComponent as Separator,
  SeparatorWithLabel,
  SeparatorGroup,
  DottedSeparator,
  SeparatorProps,
  SeparatorWithLabelProps,
  SeparatorGroupProps,
  variantConfig,
  thicknessConfig,
};
export default SeparatorComponent;

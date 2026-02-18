import React, { forwardRef } from 'react';
import {
  View,
  ViewProps,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';
import { XStack, YStack } from '../stack';
import { StyledText } from '../text';

/**
 * Props for Separator component
 */
interface SeparatorProps extends ViewProps, ViewStyle {
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
}

/**
 * Props for SeparatorWithLabel - Separator with text in the middle
 */
interface SeparatorWithLabelProps extends Omit<SeparatorProps, 'ref'> {
  label: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: 'bold' | '600' | '400' | '500' | '700';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  gap?: number;
}

/**
 * Props for SeparatorGroup - Multiple separators
 */
interface SeparatorGroupProps extends ViewProps, ViewStyle {
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

type SeparatorVariants = {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'muted' | 'primary' | 'subtle';
};

type SeparatorComponentProps = SeparatorVariants & ViewProps & ViewStyle;

/**
 * Styled Separator base component using HOC
 */
const SeparatorBase = styled<SeparatorComponentProps>(View, {
  base: {
    backgroundColor: theme.colors.gray[300],
  } as ViewStyle,
  variants: {
    orientation: (value: string): ViewStyle | undefined => {
      if (value === 'vertical') {
        return { width: 1, height: '100%' } as ViewStyle;
      }
      return { height: 1, width: '100%' } as ViewStyle;
    },
    variant: (value: string): ViewStyle | undefined => {
      const color = variantConfig[value as keyof typeof variantConfig];
      if (!color) return undefined;
      return { backgroundColor: color } as ViewStyle;
    },
  } as any,
});

/**
 * Separator: Simple divider line in various styles
 *
 * Features:
 * - Horizontal and vertical orientations
 * - 4 color variants (default, muted, primary, subtle)
 * - Customizable thickness and width/height
 * - Theme integration
 * - Accessibility support
 */
const Separator = forwardRef<View, SeparatorProps>(
  (
    {
      orientation = 'horizontal',
      color,
      variant = 'default',
      thickness = 1,
      width,
      height,
      flex,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];

    const customStyle: ViewStyle = {
      backgroundColor: finalColor,
      ...(orientation === 'horizontal'
        ? {
            height: thickness || 1,
            width: width ?? '100%',
          }
        : {
            width: thickness || 1,
            height: height ?? '100%',
          }),
      ...(flex !== undefined && { flex }),
    };

    return (
      <SeparatorBase
        ref={ref}
        orientation={orientation}
        variant={variant}
        style={customStyle}
        accessible={true}
        accessibilityRole="none"
        {...rest}
      />
    );
  }
);

Separator.displayName = 'Separator';

/**
 * SeparatorWithLabel: Separator with a label in the middle
 *
 * Use for: Section dividers with labels, "or" separators in forms, visual breaks with titles
 */
const SeparatorWithLabel = forwardRef<View, SeparatorWithLabelProps>(
  (
    {
      label,
      labelColor,
      labelSize = 14,
      labelWeight = '400',
      leftContent,
      rightContent,
      gap = 12,
      orientation = 'horizontal',
      color,
      variant = 'muted',
      thickness = 1,
      margin = 12,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];
    const finalLabelColor = labelColor || theme.colors.gray[600];

    if (orientation === 'vertical') {
      return (
        <YStack
          ref={ref}
          alignItems="center"
          gap={gap}
          margin={margin}
          {...rest}
        >
          <Separator
            thickness={thickness}
            color={finalColor}
            height={30}
            orientation="vertical"
          />
          {label && (
            <StyledText
              fontSize={labelSize}
              color={finalLabelColor}
              style={{ fontWeight: labelWeight } as ViewStyle}
            >
              {label}
            </StyledText>
          )}
          <Separator
            thickness={thickness}
            color={finalColor}
            height={30}
            orientation="vertical"
          />
        </YStack>
      );
    }

    return (
      <XStack
        ref={ref}
        alignItems="center"
        gap={gap}
        margin={margin}
        accessible={true}
        accessibilityRole="none"
        accessibilityLabel={`Divider: ${label}`}
        {...rest}
      >
        {leftContent ? (
          leftContent
        ) : (
          <Separator flex={1} thickness={thickness} color={finalColor} />
        )}

        {label && (
          <StyledText
            fontSize={labelSize}
            color={finalLabelColor}
            style={{ fontWeight: labelWeight, flexShrink: 1 } as ViewStyle}
          >
            {label}
          </StyledText>
        )}

        {rightContent ? (
          rightContent
        ) : (
          <Separator flex={1} thickness={thickness} color={finalColor} />
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
const SeparatorGroup = forwardRef<View, SeparatorGroupProps>(
  (
    {
      count = 3,
      spacing = 8,
      orientation = 'horizontal',
      variant = 'muted',
      thickness = 1,
      color,
      ...rest
    },
    ref
  ) => {
    const finalColor = color || variantConfig[variant];

    const separators = Array.from({ length: count }).map((_, i) => (
      <Separator
        key={i}
        orientation={orientation}
        color={finalColor}
        thickness={thickness}
        width={orientation === 'horizontal' ? 40 : undefined}
        height={orientation === 'vertical' ? 40 : undefined}
      />
    ));

    const containerStyle: ViewStyle = {
      gap: spacing,
      ...(orientation === 'horizontal'
        ? { flexDirection: 'row' }
        : { flexDirection: 'column' }),
    };

    return (
      <View
        ref={ref}
        style={containerStyle}
        accessible={true}
        accessibilityRole="none"
        {...rest}
      >
        {separators}
      </View>
    );
  }
);

SeparatorGroup.displayName = 'SeparatorGroup';

/**
 * DottedSeparator: Separator with dotted pattern
 *
 * Use for: Decorative separators, form breaks, visual hierarchy
 */
const DottedSeparator = forwardRef<View, SeparatorProps>(
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
  Separator,
  SeparatorWithLabel,
  SeparatorGroup,
  DottedSeparator,
  variantConfig,
};
export type { SeparatorProps, SeparatorWithLabelProps, SeparatorGroupProps };


import React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';

/**
 * Text component - Typography with predefined styles and variants
 *
 * Provides a flexible text component with dynamic font sizes, colors, weights,
 * and text styling variants. Supports both preset values and custom values
 * with validation.
 *
 * Flexible variants:
 * - fontSize: Any number (dynamic, validated)
 * - fontWeight: String value (dynamic, validated)
 * - color: Hex or theme color (dynamic, validated)
 * - numberOfLines: Number (dynamic, validated)
 * - textAlign: Valid alignment string (dynamic, validated)
 * - fontFamily: Custom font (dynamic, no validation required)
 * - textDecorationLine: Boolean toggle for underline
 * - selected: Boolean toggle for selection color
 */

// Validation utilities
const isValidString = (value: any): value is string => typeof value === 'string';
const isValidNumber = (value: any): value is number => typeof value === 'number' && !isNaN(value);
const isValidColor = (value: any): boolean => {
  if (!isValidString(value)) return false;
  // Check for hex color or theme color reference
  return /^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z0-9\[\]\.]+$/.test(value);
};

type FontWeightVariant = 'normal' | 'medium' | 'bold' | 'light' | 'semiBold';
type TextAlignVariant = 'auto' | 'left' | 'right' | 'center' | 'justify';

type TextVariants = {
  fontSize?: number;
  fontWeight?: FontWeightVariant | string;
  color?: string;
  numberOfLines?: number;
  selected?: boolean;
  textDecorationLine?: boolean;
  textAlign?: TextAlignVariant;
  fontFamily?: string;
};

type TextComponentProps = TextVariants & TextProps & TextStyle;

/**
 * Base Text component with flexible styled variants
 * Configured with theme defaults for typography
 */
const TextBase = styled<any>(Text, {
  base: {
    fontSize: theme.fontSize.normal,
    color: theme.colors.gray[800],
    fontWeight: theme.fontWeight.normal,
  } as TextStyle,
  variants: {
    // Flexible fontSize - accepts any number
    fontSize: (size: number = theme.fontSize.normal) => {
      if (!isValidNumber(size)) {
        throw new Error('Invalid fontSize value');
      }
      return { fontSize: size };
    },
    // Flexible fontWeight - accepts any string
    fontWeight: (weight: string = theme.fontWeight.normal) => {
      if (!isValidString(weight)) {
        throw new Error('Invalid fontWeight value');
      }
      return { fontWeight: weight as any };
    },
    // Flexible color - accepts hex or theme color
    color: (colorValue: string = theme.colors.gray[800]) => {
      if (!isValidColor(colorValue)) {
        throw new Error('Invalid color value');
      }
      return { color: colorValue };
    },
    // Flexible numberOfLines - accepts any number
    numberOfLines: (lines: number = 0) => {
      if (!isValidNumber(lines)) {
        throw new Error('Invalid numberOfLines value');
      }
      // numberOfLines is not a TextStyle property, return undefined for styled
      return undefined;
    },
    // Boolean toggle for selection state
    selected: {
      true: { color: theme.colors.gray[50] },
      false: { color: theme.colors.gray[800] },
    } as any,
    // Boolean toggle for text decoration
    textDecorationLine: {
      true: { textDecorationLine: 'underline' },
      false: { textDecorationLine: 'none' },
    } as any,
    // Flexible textAlign - accepts valid alignment values
    textAlign: (align: string = 'left') => {
      const validAlignments = ['auto', 'left', 'right', 'center', 'justify'];
      if (!validAlignments.includes(align)) {
        throw new Error('Invalid textAlign value');
      }
      return { textAlign: align as any };
    },
    // Flexible fontFamily - no validation needed
    fontFamily: (font: string | undefined) => {
      if (!font) return {};
      return { fontFamily: font };
    },
  },
});

interface StyledTextProps extends Omit<TextProps, 'fontWeight'> {
  /**
   * Text content
   */
  children?: React.ReactNode;

  /**
   * Font size in pixels - flexible, accepts any number
   * @default 18
   * @example fontSize={14} or fontSize={24}
   */
  fontSize?: number;

  /**
   * Font weight - flexible, accepts string values
   * @default 'normal'
   * @example fontWeight="400" or fontWeight="700" or fontWeight="bold"
   */
  fontWeight?: string;

  /**
   * Text color - flexible, accepts hex or theme color
   * @default theme.colors.gray[800]
   * @example color={theme.colors.blue[500]} or color="#FF0000"
   */
  color?: string;

  /**
   * Number of lines to display before truncating - flexible, accepts any number
   * @example numberOfLines={1} for single line with ellipsis
   */
  numberOfLines?: number;

  /**
   * Selection state for highlighted/selected text
   * @default false
   */
  selected?: boolean;

  /**
   * Add underline decoration via textDecorationLine
   * @default false
   */
  textDecorationLine?: boolean;

  /**
   * Text alignment - flexible, accepts valid alignment values
   * @default 'left'
   */
  textAlign?: string;

  /**
   * Custom font family - flexible, accepts any string
   * @example fontFamily="Roboto" or fontFamily="custom-font"
   */
  fontFamily?: string;
}

/**
 * Styled Text component with flexible typography variants
 *
 * Provides flexible styling with theme integration for:
 * - Font sizes (any number, validated)
 * - Font weights (any string, validated)
 * - Custom colors (hex or theme, validated)
 * - Line clamping (numberOfLines)
 * - Text alignment (auto, left, right, center, justify)
 * - Selection states
 * - Underline decoration (textDecorationLine)
 * - Custom font families
 *
 * @example
 * // Basic text
 * <StyledText>Hello World</StyledText>
 *
 * @example
 * // With custom color and weight
 * <StyledText color={theme.colors.blue[500]} fontWeight="700">
 *   Important Text
 * </StyledText>
 *
 * @example
 * // Title styling
 * <StyledText fontSize={20} fontWeight="700" color={theme.colors.gray[900]}>
 *   Page Title
 * </StyledText>
 *
 * @example
 * // Body text with line clamping
 * <StyledText 
 *   fontSize={14} 
 *   numberOfLines={2}
 *   color={theme.colors.gray[700]}
 * >
 *   Long text that will be truncated...
 * </StyledText>
 *
 * @example
 * // Selected state
 * <StyledText 
 *   selected={isSelected}
 *   fontSize={14}
 * >
 *   {isSelected ? 'Selected' : 'Not Selected'}
 * </StyledText>
 *
 * @example
 * // Centered text with underline
 * <StyledText 
 *   textAlign="center"
 *   textDecorationLine={true}
 *   fontWeight="700"
 * >
 *   Underlined Centered Text
 * </StyledText>
 *
 * @example
 * // Custom font family
 * <StyledText fontFamily="Poppins" fontSize={16} fontWeight="700">
 *   Custom Font Text
 * </StyledText>
 *
 * @example
 * // Light weight text
 * <StyledText fontSize={12} fontWeight="300" color={theme.colors.gray[600]}>
 *   Subtitle or helper text
 * </StyledText>
 */
const StyledText = React.forwardRef<Text, StyledTextProps>(
  (
    {
      children,
      fontSize = theme.fontSize.normal,
      fontWeight = theme.fontWeight.normal,
      color = theme.colors.gray[800],
      numberOfLines,
      selected = false,
      textDecorationLine = false,
      textAlign = 'left',
      fontFamily,
      ...rest
    },
    ref
  ) => (
    <TextBase
      ref={ref}
      {...rest}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      numberOfLines={numberOfLines}
      selected={selected}
      textDecorationLine={textDecorationLine}
      textAlign={textAlign}
      fontFamily={fontFamily}
    >
      {children}
    </TextBase>
  )
);

StyledText.displayName = 'StyledText';

export { StyledText, TextBase };
export type { TextVariants, TextComponentProps, StyledTextProps, FontWeightVariant, TextAlignVariant };

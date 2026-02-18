import React, { forwardRef } from 'react';
import {
  KeyboardAvoidingView as KeyboardAvoidingViewSource,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  ViewStyle,
  Platform,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { YStack } from '../stack';

/**
 * Props for KeyboardAvoidingView component
 */
interface KeyboardAvoidingViewProps extends Omit<RNKeyboardAvoidingViewProps, 'ref'> {
  // Background variant
  variant?: 'light' | 'dark' | 'primary' | 'surface' | 'transparent';

  // Padding preset
  padded?: boolean | 'small' | 'medium' | 'large';

  // Behavior
  behavior?: 'padding' | 'position' | 'height';

  // Custom values
  keyOffset?: number;
  backgroundColor?: string;

  // Layout
  flex?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

  // Accessibility
  accessibilityLabel?: string;

  // Children
  children?: React.ReactNode;
}

/**
 * Variant configuration for KeyboardAvoidingView
 */
const variantConfig: Record<
  'light' | 'dark' | 'primary' | 'surface' | 'transparent',
  { backgroundColor: string; label: string }
> = {
  light: {
    backgroundColor: theme.colors.gray[50],
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
    backgroundColor: theme.colors.white[500],
    label: 'surface',
  },
  transparent: {
    backgroundColor: 'transparent',
    label: 'transparent',
  },
};

/**
 * Padding configuration for KeyboardAvoidingView
 */
const paddingConfig: Record<'small' | 'medium' | 'large', number> = {
  small: 8,
  medium: 16,
  large: 24,
};

/**
 * Base styled KeyboardAvoidingView
 */
const StyledKeyboardAvoidingView = styled<any>(KeyboardAvoidingViewSource, {
  base: {
    flex: 1,
  } as ViewStyle,
});

/**
 * KeyboardAvoidingView: Container that adjusts layout when keyboard appears
 *
 * Features:
 * - Automatic keyboard adjustment (padding, position, height)
 * - 5 background variants (light, dark, primary, surface, transparent)
 * - Padding presets (small, medium, large)
 * - Customizable key offset
 * - Platform-specific behavior (iOS/Android)
 * - Theme integration
 * - Full accessibility support
 */
const KeyboardAvoidingView = forwardRef<any, KeyboardAvoidingViewProps>(
  (
    {
      variant = 'surface',
      padded = 'medium',
      behavior = Platform.OS === 'ios' ? 'padding' : 'height',
      keyOffset = 0,
      backgroundColor,
      flex,
      justifyContent = 'flex-start',
      alignItems = 'stretch',
      accessibilityLabel = 'Container',
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const variantConfigValue = variantConfig[variant];
    const finalBackgroundColor = backgroundColor || variantConfigValue.backgroundColor;

    // FIX: Simplified padding resolution — handles false, true, and named presets correctly
    let paddingValue = 0;
    if (padded === true) {
      paddingValue = paddingConfig['medium'];
    } else if (typeof padded === 'string') {
      paddingValue = paddingConfig[padded];
    }
    // padded === false → paddingValue stays 0

    return (
      <StyledKeyboardAvoidingView
        ref={ref}
        behavior={behavior}
        keyboardVerticalOffset={keyOffset}
        style={[
          {
            flex: flex !== undefined ? flex : 1,
            backgroundColor: finalBackgroundColor,
            padding: paddingValue,
            justifyContent,
            alignItems,
          } as ViewStyle,
          style,
        ]}
        accessible={true}
        accessibilityLabel={accessibilityLabel}
        {...rest}
      >
        {children}
      </StyledKeyboardAvoidingView>
    );
  }
);

KeyboardAvoidingView.displayName = 'KeyboardAvoidingView';

/**
 * Props for KeyboardAvoidingForm
 */
interface KeyboardAvoidingFormProps extends Omit<KeyboardAvoidingViewProps, 'ref'> {
  // FIX: onSubmit is wired through to the submit button via React.cloneElement,
  // so it must be included in the interface but documented accordingly.
  onSubmit?: () => void;
  spacing?: number;
}

/**
 * KeyboardAvoidingForm: Form-optimized keyboard avoiding container
 *
 * Use for: Login forms, registration, contact forms, any multi-field forms
 *
 * Layout convention: the last child is treated as the submit button and
 * pinned to the bottom; all preceding children are rendered as form fields.
 * If only one child is provided, it is rendered as a form field (not a submit button).
 */
const KeyboardAvoidingForm = forwardRef<any, KeyboardAvoidingFormProps>(
  (
    {
      variant = 'surface',
      padded = 'large',
      behavior = Platform.OS === 'ios' ? 'padding' : 'height',
      keyOffset = Platform.OS === 'ios' ? 40 : 0,
      spacing = 16,
      justifyContent = 'space-between',
      onSubmit,
      children,
      ...rest
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);

    // FIX: Only split into fields + submit button when there are at least 2 children.
    // With a single child, treat it as a form field so it isn't swallowed silently.
    const hasSubmitButton = childrenArray.length > 1;
    const formFields = hasSubmitButton ? childrenArray.slice(0, -1) : childrenArray;
    const submitButton = hasSubmitButton ? childrenArray[childrenArray.length - 1] : null;

    return (
      <KeyboardAvoidingView
        ref={ref}
        variant={variant}
        padded={padded}
        behavior={behavior}
        keyOffset={keyOffset}
        justifyContent={justifyContent}
        {...rest}
      >
        <YStack flex={1} gap={spacing}>
          {formFields.length > 0 && (
            <YStack gap={spacing} flex={1}>
              {formFields}
            </YStack>
          )}
        </YStack>
        {/* FIX: Wire onSubmit to the submit button via cloneElement when provided */}
        {submitButton && (
          <YStack>
            {onSubmit
              ? React.cloneElement(submitButton as React.ReactElement, { onPress: onSubmit })
              : submitButton}
          </YStack>
        )}
      </KeyboardAvoidingView>
    );
  }
);

KeyboardAvoidingForm.displayName = 'KeyboardAvoidingForm';

/**
 * Props for KeyboardAvoidingPadding
 */
interface KeyboardAvoidingPaddingProps extends Omit<KeyboardAvoidingViewProps, 'ref'> {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

/**
 * KeyboardAvoidingPadding: Keyboard avoiding view with granular padding control
 *
 * Use for: Custom space control, asymmetric padding needs
 */
const KeyboardAvoidingPadding = forwardRef<any, KeyboardAvoidingPaddingProps>(
  (
    {
      variant = 'surface',
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      behavior = Platform.OS === 'ios' ? 'padding' : 'height',
      keyOffset = 0,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const variantConfigValue = variantConfig[variant];

    return (
      <StyledKeyboardAvoidingView
        ref={ref}
        behavior={behavior}
        keyboardVerticalOffset={keyOffset}
        style={[
          {
            flex: 1,
            backgroundColor: variantConfigValue.backgroundColor,
            // FIX: Use nullish coalescing instead of verbose ternary undefined checks
            paddingTop: paddingTop ?? 0,
            paddingBottom: paddingBottom ?? 0,
            paddingLeft: paddingLeft ?? 0,
            paddingRight: paddingRight ?? 0,
          } as ViewStyle,
          style,
        ]}
        accessible={true}
        {...rest}
      >
        {children}
      </StyledKeyboardAvoidingView>
    );
  }
);

KeyboardAvoidingPadding.displayName = 'KeyboardAvoidingPadding';

/**
 * Props for KeyboardAwareContent
 * FIX: Renamed from KeyboardAwareFlatListProps to match the exported component name
 */
interface KeyboardAwareContentProps extends Omit<KeyboardAvoidingViewProps, 'ref'> {
  renderContent?: () => React.ReactNode;
  // FIX: scrollEnabled removed — it was accepted but never used or forwarded anywhere
}

/**
 * KeyboardAwareContent: Keyboard avoiding view optimized for scrollable content
 *
 * Use for: Long forms, scrollable lists with keyboard, content that needs scrolling
 */
const KeyboardAwareContent = forwardRef<any, KeyboardAwareContentProps>(
  (
    {
      variant = 'surface',
      padded = 'medium',
      behavior = Platform.OS === 'ios' ? 'padding' : 'height',
      keyOffset = Platform.OS === 'ios' ? 40 : 0,
      renderContent,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <KeyboardAvoidingView
        ref={ref}
        variant={variant}
        padded={padded}
        behavior={behavior}
        keyOffset={keyOffset}
        {...rest}
      >
        {renderContent ? renderContent() : children}
      </KeyboardAvoidingView>
    );
  }
);

KeyboardAwareContent.displayName = 'KeyboardAwareContent';

/**
 * Exports
 */
export {
  KeyboardAvoidingView,
  KeyboardAvoidingForm,
  KeyboardAvoidingPadding,
  KeyboardAwareContent,
  KeyboardAvoidingViewProps,
  KeyboardAvoidingFormProps,
  KeyboardAvoidingPaddingProps,
  // FIX: Export type name updated to match the component it describes
  KeyboardAwareContentProps,
  variantConfig,
  paddingConfig,
};
export default KeyboardAvoidingView;
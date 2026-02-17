import React, { forwardRef, useState, useEffect } from 'react';
import {
  Switch as SwitchSource,
  SwitchProps as RNSwitchProps,
  Animated,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { XStack, YStack } from '../stack';
import { StyledText } from '../text';

/**
 * Base style for Switch component
 */
const baseSwitchStyle: ViewStyle = {
  transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
};

/**
 * Props for Switch component
 */
interface SwitchProps extends Omit<RNSwitchProps, 'ref'> {
  // State management
  value?: boolean;
  onValueChange?: (value: boolean) => void;

  // Sizing
  size?: 'small' | 'medium' | 'large';

  // Color variants
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  // Custom colors
  trackColorOff?: string;
  trackColorOn?: string;
  thumbColorOff?: string;
  thumbColorOn?: string;
  iosBackgroundColor?: string;

  // State
  disabled?: boolean;

  // Animation
  withAnimation?: boolean;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * Size configuration for Switch
 */
const sizeConfig: Record<
  'small' | 'medium' | 'large',
  { scale: number; label: string }
> = {
  small: { scale: 1.1, label: 'small' },
  medium: { scale: 1.5, label: 'medium' },
  large: { scale: 2, label: 'large' },
};

/**
 * Variant configuration for Switch
 */
const variantConfig: Record<
  'default' | 'primary' | 'success' | 'warning' | 'danger',
  { trackColorOn: string; thumbColorOn: string; label: string }
> = {
  default: {
    trackColorOn: theme.colors.gray[300],
    thumbColorOn: theme.colors.gray[600],
    label: 'default',
  },
  primary: {
    trackColorOn: theme.colors.blue[400],
    thumbColorOn: theme.colors.blue[600],
    label: 'primary',
  },
  success: {
    trackColorOn: theme.colors.green[400],
    thumbColorOn: theme.colors.green[600],
    label: 'success',
  },
  warning: {
    trackColorOn: theme.colors.amber[400],
    thumbColorOn: theme.colors.amber[600],
    label: 'warning',
  },
  danger: {
    trackColorOn: theme.colors.red[400],
    thumbColorOn: theme.colors.red[600],
    label: 'danger',
  },
};

/**
 * StyledSwitchBase: Base styled Switch component
 */
const StyledSwitchBase = styled<any>(SwitchSource, {
  base: baseSwitchStyle as any,
});

/**
 * Switch: Professional toggle switch component with multiple variants and sizes
 *
 * Features:
 * - Multiple size options (small, medium, large)
 * - 5 color variants (default, primary, success, warning, danger)
 * - Custom color support
 * - Disabled state
 * - Theme integration
 * - Platform-specific styling (iOS/Android)
 * - Optional animation
 */
const Switch = forwardRef<any, SwitchProps>(
  (
    {
      value = false,
      onValueChange,
      size = 'medium',
      variant = 'primary',
      trackColorOff,
      trackColorOn,
      thumbColorOff = theme.colors.gray[300],
      thumbColorOn,
      iosBackgroundColor = theme.colors.gray[200],
      disabled = false,
      withAnimation = false,
      accessibilityLabel = 'Toggle switch',
      accessibilityHint = 'Double tap to toggle',
      ...rest
    },
    ref
  ) => {
    const [isEnabled, setIsEnabled] = useState(value);
    const sizeConfigValue = sizeConfig[size];
    const variantConfigValue = variantConfig[variant];

    // Sync with prop changes
    useEffect(() => {
      setIsEnabled(value);
    }, [value]);

    // Determine colors based on variant/custom
    const finalTrackColorOn = trackColorOn || variantConfigValue.trackColorOn;
    const finalThumbColorOn = thumbColorOn || variantConfigValue.thumbColorOn;

    const handleValueChange = (newValue: boolean) => {
      if (disabled) return;

      setIsEnabled(newValue);
      onValueChange?.(newValue);
    };

    const opacity = disabled ? 0.5 : 1;

    return (
      <YStack opacity={opacity}>
        <StyledSwitchBase
          ref={ref}
          style={{
            transform: [
              { scaleX: sizeConfigValue.scale },
              { scaleY: sizeConfigValue.scale },
            ],
          }}
          trackColor={{
            false: trackColorOff || theme.colors.gray[200],
            true: finalTrackColorOn,
          }}
          thumbColor={isEnabled ? finalThumbColorOn : thumbColorOff}
          ios_backgroundColor={iosBackgroundColor}
          onValueChange={handleValueChange}
          value={isEnabled}
          disabled={disabled}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessible={true}
          {...rest}
        />
      </YStack>
    );
  }
);

Switch.displayName = 'Switch';

/**
 * Props for SwitchRow component (Switch with label)
 */
interface SwitchRowProps extends Omit<SwitchProps, 'ref' | 'onValueChange'> {
  label?: string;
  description?: string;
  labelColor?: string;
  descriptionColor?: string;
  onValueChange?: (value: boolean) => void;
}

/**
 * SwitchRow: Switch with integrated label and optional description
 *
 * Use for: Settings, preferences, options lists
 */
const SwitchRow = forwardRef<any, SwitchRowProps>(
  (
    {
      label,
      description,
      labelColor = theme.colors.gray[800],
      descriptionColor = theme.colors.gray[500],
      value = false,
      onValueChange,
      size = 'medium',
      variant = 'primary',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const [isEnabled, setIsEnabled] = useState(value);

    useEffect(() => {
      setIsEnabled(value);
    }, [value]);

    const handleValueChange = (newValue: boolean) => {
      setIsEnabled(newValue);
      onValueChange?.(newValue);
    };

    return (
      <XStack
        justifyContent="space-between"
        alignItems="center"
        padding={12}
        backgroundColor={disabled ? theme.colors.gray[50] : theme.colors.white[500]}
        borderRadius={8}
        marginVertical={4}
      >
        <YStack flex={1} marginRight={12}>
          {label && (
            <YStack marginBottom={description ? 4 : 0}>
              <StyledText
                fontSize={16}
                fontWeight="600"
                color={labelColor}
              >
                {label}
              </StyledText>
            </YStack>
          )}
          {description && (
            <StyledText
              fontSize={14}
              color={descriptionColor}
            >
              {description}
            </StyledText>
          )}
        </YStack>

        <Switch
          ref={ref}
          value={isEnabled}
          onValueChange={handleValueChange}
          size={size}
          variant={variant}
          disabled={disabled}
          {...rest}
        />
      </XStack>
    );
  }
);

SwitchRow.displayName = 'SwitchRow';

/**
 * Props for GroupedSwitch - multiple related switches
 */
interface GroupedSwitchProps {
  switches: Array<{
    id: string;
    label: string;
    description?: string;
    value: boolean;
  }>;
  onChange?: (id: string, value: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  trackColorOff?: string;
  trackColorOn?: string;
  thumbColorOff?: string;
  thumbColorOn?: string;
  iosBackgroundColor?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

/**
 * GroupedSwitch: Multiple switches in a cohesive group
 *
 * Use for: Related toggles, category settings, feature flags
 */
const GroupedSwitch = forwardRef<any, GroupedSwitchProps>(
  (
    {
      switches,
      onChange,
      size = 'medium',
      variant = 'primary',
      disabled = false,
      trackColorOff,
      trackColorOn,
      thumbColorOff,
      thumbColorOn,
      iosBackgroundColor,
      accessibilityLabel,
      accessibilityHint,
    },
    ref
  ) => {
    const [values, setValues] = useState<Record<string, boolean>>(
      switches.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {})
    );

    const handleChange = (id: string, newValue: boolean) => {
      setValues((prev) => ({ ...prev, [id]: newValue }));
      onChange?.(id, newValue);
    };

    return (
      <YStack
        borderRadius={12}
        overflow="hidden"
        borderWidth={1}
        borderColor={theme.colors.gray[200]}
      >
        {switches.map((switchItem, index) => (
          <XStack
            key={switchItem.id}
            justifyContent="space-between"
            alignItems="center"
            padding={16}
            backgroundColor={disabled ? theme.colors.gray[50] : theme.colors.white[500]}
            borderBottomWidth={index < switches.length - 1 ? 1 : 0}
            borderBottomColor={theme.colors.gray[100]}
          >
            <YStack flex={1} marginRight={12}>
              <YStack marginBottom={switchItem.description ? 4 : 0}>
                <StyledText
                  fontSize={16}
                  fontWeight="600"
                  color={theme.colors.gray[800]}
                >
                  {switchItem.label}
                </StyledText>
              </YStack>
              {switchItem.description && (
                <StyledText
                  fontSize={14}
                  color={theme.colors.gray[500]}
                >
                  {switchItem.description}
                </StyledText>
              )}
            </YStack>

            <Switch
              ref={index === 0 ? ref : undefined}
              value={values[switchItem.id]}
              onValueChange={(newValue) => handleChange(switchItem.id, newValue)}
              size={size}
              variant={variant}
              disabled={disabled}
              trackColorOff={trackColorOff}
              trackColorOn={trackColorOn}
              thumbColorOff={thumbColorOff}
              thumbColorOn={thumbColorOn}
              iosBackgroundColor={iosBackgroundColor}
              accessibilityLabel={accessibilityLabel}
              accessibilityHint={accessibilityHint}
            />
          </XStack>
        ))}
      </YStack>
    );
  }
);

GroupedSwitch.displayName = 'GroupedSwitch';

/**
 * Exports
 */
export {
  Switch,
  SwitchRow,
  GroupedSwitch,
  SwitchProps,
  SwitchRowProps,
  GroupedSwitchProps,
  sizeConfig,
  variantConfig,
};
export default Switch;

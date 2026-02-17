import React, { forwardRef, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
// @ts-ignore - react-native-vector-icons does not have type declarations
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { viewStyleVariants, viewStyleStringVariants } from '../utils/viewStyleVariants';

/**
 * Base style for CheckBox component
 */
const baseCheckBoxStyle: ViewStyle = {
  width: 24,
  height: 24,
  borderWidth: 2,
  borderRadius: 4,
  backgroundColor: theme.colors.gray[50],
  borderColor: theme.colors.gray[300],
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

/**
 * Variants for CheckBox styling
 */
const checkBoxVariants = {
  checked: {
    true: {
      backgroundColor: theme.colors.blue[500],
      borderColor: theme.colors.blue[500],
    },
    false: {
      backgroundColor: theme.colors.gray[50],
      borderColor: theme.colors.gray[300],
    },
  },
  disabled: {
    true: {
      opacity: 0.6,
      backgroundColor: theme.colors.gray[100],
      borderColor: theme.colors.gray[300],
    },
    false: {},
  },
  checkedColor: (color: string) => {
    if (!color) return {};
    return {
      backgroundColor: color,
      borderColor: color,
    };
  },
  size: (size: number = 24) => ({
    width: size,
    height: size,
  }),

};

/**
 * StyledCheckBox: Base styled TouchableOpacity component
 */
const StyledCheckBoxBase = styled<any>(TouchableOpacity, {
  base: baseCheckBoxStyle as any,
  variants: {
    ...checkBoxVariants,
    ...viewStyleVariants,
    ...viewStyleStringVariants,
  } as any,
});

/**
 * Props for CheckBox component
 */
interface CheckBoxProps extends Omit<TouchableOpacityProps, 'ref'> {
  // State management
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  
  // Styling
  checkedColor?: string;
  uncheckedColor?: string;
  borderColor?: string;
  checkMarkColor?: string;
  
  // Sizing
  size?: number;
  
  // State
  disabled?: boolean;
  
  // Icon customization
  iconProps?: any;
  iconName?: string;
  iconSize?: number;
}

/**
 * CheckBox: Professional checkbox component with state management
 * 
 * Features:
 * - Controlled or uncontrolled state
 * - Customizable colors (checked, unchecked, border, checkmark)
 * - Flexible sizing
 * - Disabled state support
 * - Icon customization
 * - Theme integration
 */
const CheckBox = forwardRef<TouchableOpacity, CheckBoxProps>(
  (
    {
      checked: checkedProp = false,
      onCheck,
      checkedColor,
      uncheckedColor = theme.colors.gray[50],
      borderColor: borderColorProp,
      checkMarkColor = theme.colors.white[500],
      size = 24,
      disabled = false,
      iconProps,
      iconName = 'check',
      iconSize = 18,
      onPress,
      ...rest
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checkedProp);

    // Sync with prop changes
    useEffect(() => {
      setIsChecked(checkedProp);
    }, [checkedProp]);

    const handlePress = () => {
      if (disabled) return;
      
      const newState = !isChecked;
      setIsChecked(newState);
      
      onCheck?.(newState);
    };

    // Determine colors based on state
    const backgroundColor = isChecked && checkedColor ? checkedColor : (isChecked ? theme.colors.blue[500] : uncheckedColor);
    const border = borderColorProp || (isChecked && checkedColor ? checkedColor : theme.colors.gray[300]);

    return (
      <StyledCheckBoxBase
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        size={size}
        onPress={handlePress}
        style={{
          backgroundColor,
          borderColor: border,
          width: size,
          height: size,
          ...(rest.style as any),
        }}
        activeOpacity={0.7}
        {...rest}
      >
        {isChecked && (
          <Icon
            name={iconName}
            color={checkMarkColor}
            size={iconSize}
            {...iconProps}
          />
        )}
      </StyledCheckBoxBase>
    );
  }
);

CheckBox.displayName = 'CheckBox';

/**
 * Export components and types
 */
export { CheckBox, CheckBoxProps, StyledCheckBoxBase };
export default CheckBox;

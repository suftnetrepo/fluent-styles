import React, { forwardRef } from 'react';
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
 * Base style for RadioButton component
 */
const baseRadioButtonStyle: ViewStyle = {
  width: 24,
  height: 24,
  borderWidth: 2,
  borderRadius: 100,
  backgroundColor: theme.colors.gray[50],
  borderColor: theme.colors.gray[300],
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

/**
 * Variants for RadioButton styling
 */
const radioButtonVariants = {
  selected: {
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
  borderColor: (color: string) => ({
    borderColor: color,
  }),
  backgroundColor: (color: string) => ({
    backgroundColor: color,
  }),
};

/**
 * StyledRadioButton: Base styled TouchableOpacity component
 */
const StyledRadioButtonBase = styled<any>(TouchableOpacity, {
  base: baseRadioButtonStyle as any,
  variants: {
    ...radioButtonVariants,
    ...viewStyleVariants,
    ...viewStyleStringVariants,
  } as any,
});

/**
 * Props for RadioButton component
 */
interface RadioButtonProps extends Omit<TouchableOpacityProps, 'ref'> {
  // Identification
  name: string;
  
  // State management
  selected?: string;                         // Currently selected radio button name
  onSelect?: (name: string) => void;        // Called when this radio button is selected
  
  // Styling
  selectedColor?: string;                    // Color when selected
  unselectedColor?: string;                  // Color when unselected (default: gray[50])
  borderColor?: string;                      // Border color
  indicatorColor?: string;                   // Inner circle color (default: white[500])
  
  // Sizing
  size?: number;                             // Width and height (default: 24)
  indicatorSize?: number;                    // Inner circle size (default: 10)
  
  // State
  disabled?: boolean;                        // Disable interaction
  
  // Icon customization
  iconProps?: any;                          // Props for Icon component
  iconName?: string;                        // Icon name (default: 'circle')
}

/**
 * RadioButton: Professional radio button component with group state management
 * 
 * Features:
 * - Group-aware state management (only one selected per group)
 * - Named radio buttons for easy value tracking
 * - Customizable colors (selected, unselected, border, indicator)
 * - Flexible sizing
 * - Disabled state support
 * - Icon customization
 * - Theme integration
 */
const RadioButton = forwardRef<React.ElementRef<typeof TouchableOpacity>, RadioButtonProps>(
  (
    {
      name,
      selected,
      onSelect,
      selectedColor,
      unselectedColor = theme.colors.gray[50],
      borderColor: borderColorProp,
      indicatorColor = theme.colors.white[500],
      size = 24,
      indicatorSize = 10,
      disabled = false,
      iconProps,
      iconName = 'circle',
      onPress,
      ...rest
    },
    ref
  ) => {
    const isSelected = selected === name;

    const handlePress = () => {
      if (disabled) return;
      
      onSelect?.(name);
    };

    // Determine colors based on state
    const backgroundColor = isSelected && selectedColor
      ? selectedColor
      : (isSelected ? theme.colors.blue[500] : unselectedColor);
    const border = borderColorProp
      ? borderColorProp
      : (isSelected && selectedColor ? selectedColor : theme.colors.gray[300]);

    return (
      <StyledRadioButtonBase
        ref={ref}
        selected={isSelected}
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
        {isSelected && (
          <Icon
            name={iconName}
            color={indicatorColor}
            size={indicatorSize}
            {...iconProps}
          />
        )}
      </StyledRadioButtonBase>
    );
  }
);

RadioButton.displayName = 'RadioButton';

/**
 * Props for RadioGroup container (helper type)
 */
interface RadioGroupProps {
  name: string;                              // Group name for accessibility
  value?: string;                            // Currently selected value
  onValueChange?: (value: string) => void;  // Called when selection changes
  disabled?: boolean;                        // Disable all buttons in group
  children?: React.ReactNode;
}

/**
 * Export components and types
 */
export { RadioButton, RadioButtonProps, RadioGroupProps, StyledRadioButtonBase };
export default RadioButton;

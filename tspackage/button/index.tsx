import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';

type ButtonVariants = {
  link?: boolean | [boolean, ViewStyle];
  selected?: boolean | [boolean, ViewStyle];
};

type ButtonProps = ButtonVariants & TouchableOpacityProps & ViewStyle;

const Button = styled<ButtonProps>(TouchableOpacity, {
  base: {
    borderColor: theme.colors.gray[100],
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: theme.colors.gray[300],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  variants: {
    link: (value: boolean | [boolean, ViewStyle]): ViewStyle | undefined => {
      let isActive = false;
      let variantOverrides: ViewStyle = {};

      if (Array.isArray(value)) {
        [isActive, variantOverrides] = value;
      } else {
        isActive = value;
      }

      if (!isActive) return undefined;

      const defaultStyles: ViewStyle = {
        borderColor: theme.colors.transparent05,
        borderWidth: 0,
        borderRadius: 0,
        backgroundColor: theme.colors.transparent05,
      };

      return { ...defaultStyles, ...variantOverrides };
    },
    selected: (value: boolean | [boolean, ViewStyle]): ViewStyle | undefined => {
      let isActive = false;
      let variantOverrides: ViewStyle = {};

      if (Array.isArray(value)) {
        [isActive, variantOverrides] = value;
      } else {
        isActive = value;
      }

      if (!isActive) return undefined;

      const defaultStyles: ViewStyle = {
        borderColor: theme.colors.cyan[500],
        backgroundColor: theme.colors.cyan[500],
        borderWidth: 0,
      };

      return { ...defaultStyles, ...variantOverrides };
    },
  } as any,
});

interface StyledButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const StyledButton = React.forwardRef<TouchableOpacity, StyledButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Button ref={ref} {...rest}>
        {children}
      </Button>
    );
  }
);

StyledButton.displayName = 'StyledButton';

export { StyledButton, Button };
export type { ButtonProps, ButtonVariants };
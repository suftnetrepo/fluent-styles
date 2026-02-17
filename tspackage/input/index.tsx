import React, { forwardRef } from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { YStack } from '../stack';
import { StyledText } from '../text';
import { StyledSpacer } from '../spacer';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import {  viewStyleStringVariants, viewStyleVariants  } from '../utils/viewStyleVariants';

/**
 * Base style for the input component
 */
const baseInputStyle: TextStyle = {
  borderColor: theme.colors.gray[200],
  borderWidth: 1,
  borderRadius: 30,
  backgroundColor: theme.colors.gray[50],
  width: '100%',
  color: theme.colors.gray[800],
  paddingHorizontal: 16,
  paddingVertical: 12,
  fontSize: theme.fontSize.normal,
};

/**
 * StyledInputText: Base styled TextInput component
 */
const StyledInputText = styled<any>(TextInput, {
  base: baseInputStyle as any,
  variants:{
    ...viewStyleVariants,
    ...viewStyleStringVariants
  }
});

/**
 * Props for the Input component wrapper
 */
interface InputProps extends Omit<TextInputProps, 'ref'> {
  label?: string;
  labelProps?: any;
  containerProps?: any;
  errorMessage?: string;
  error?: boolean;
  errorProps?: any;
  borderColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
}

/**
 * StyledInput: Professional input component with label and error handling
 */
const StyledInput = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      labelProps,
      containerProps,
      errorMessage,
      error = false,
      errorProps,
      borderColor = theme.colors.gray[200],
      placeholder,
      editable = true,
      ...rest
    },
    ref
  ) => {
    const inputBorderColor = error ? theme.colors.red[500] : borderColor;
    const inputOpacity = !editable ? 0.6 : 1;

    return (
      <>
        {label && (
          <>
            <StyledSpacer marginVertical={4} />
            <YStack paddingHorizontal={8} width={'100%'}>
              <StyledText
                color={theme.colors.gray[800]}
                fontSize={theme.fontSize.normal}
                fontWeight="500"
                {...labelProps}
              >
                {label}
              </StyledText>
            </YStack>
            <StyledSpacer marginVertical={4} />
          </>
        )}

        <YStack
          width={'100%'}
          style={{
            opacity: inputOpacity,
          }}
          {...containerProps}
        >
          <StyledInputText
            ref={ref}
            style={{
              borderColor: inputBorderColor,
              ...(rest.style as any),
            }}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.gray[400]}
            {...(({ style, ...restProps }) => restProps)(rest)}
          />
        </YStack>

        {errorMessage && error && (
          <YStack
            width={'100%'}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <StyledSpacer marginVertical={1} />
            <YStack marginHorizontal={8} width={'100%'}>
              <StyledText
                fontWeight="600"
                fontSize={theme.fontSize.small}
                color={theme.colors.red[500]}
                {...errorProps}
              >
                {errorMessage}
              </StyledText>
            </YStack>
          </YStack>
        )}
      </>
    );
  }
);

StyledInput.displayName = 'StyledInput';

/**
 * Props for MultiInput component
 */
interface MultiInputProps extends Omit<TextInputProps, 'ref'> {
  label?: string;
  labelProps?: any;
  containerProps?: any;
  errorMessage?: string;
  error?: boolean;
  errorProps?: any;
  borderColor?: string;
  numberOfLines?: number;
}

/**
 * StyledMultiInput: Professional multi-line input with label and error handling
 */
const StyledMultiInput = forwardRef<TextInput, MultiInputProps>(
  (
    {
      label,
      labelProps,
      containerProps,
      errorMessage,
      error = false,
      errorProps,
      borderColor = theme.colors.gray[200],
      placeholder,
      numberOfLines = 5,
      editable = true,
      ...rest
    },
    ref
  ) => {
    const inputBorderColor = error ? theme.colors.red[500] : borderColor;
    const inputOpacity = !editable ? 0.6 : 1;

    return (
      <YStack
        width={'100%'}
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{
          opacity: inputOpacity,
        }}
        {...containerProps}
      >
        {label && (
          <>
            <StyledSpacer marginVertical={4} />
            <YStack paddingHorizontal={8} width={'100%'}>
              <StyledText
                color={theme.colors.gray[800]}
                fontSize={theme.fontSize.normal}
                fontWeight="500"
                {...labelProps}
              >
                {label}
              </StyledText>
            </YStack>
            <StyledSpacer marginVertical={4} />
          </>
        )}

        <StyledInputText
          ref={ref}
          style={{
            borderRadius: 16,
            borderColor: inputBorderColor,
            ...(rest.style as any),
          }}
          textAlignVertical="top"
          multiline
          numberOfLines={numberOfLines}
          inputMode="text"
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray[400]}
          {...(({ style, ...restProps }) => restProps)(rest)}
        />

        {errorMessage && error && (
          <>
            <StyledSpacer marginVertical={1} />
            <YStack marginHorizontal={8} width={'100%'}>
              <StyledText
                fontWeight="600"
                fontSize={theme.fontSize.small}
                color={theme.colors.red[500]}
                {...errorProps}
              >
                {errorMessage}
              </StyledText>
            </YStack>
          </>
        )}
      </YStack>
    );
  }
);

StyledMultiInput.displayName = 'StyledMultiInput';

/**
 * Export components and types
 */
export { StyledInput, StyledMultiInput, StyledInputText, InputProps, MultiInputProps };
export default StyledInputText;

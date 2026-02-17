import React, { useState } from 'react';
import {
  Modal,
  ModalProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { YStack, XStack } from '../stack';
import { StyledButton } from '../button';
import { StyledText } from '../text';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';

/**
 * Note: StyledSpacer is not yet migrated to TypeScript.
 * We're using require as a temporary solution.
 */
const StyledSpacer = require('../../src/package/spacer').StyledSpacer;

/**
 * Dialog component - Modal dialog system with three variants
 *
 * Provides type-safe modal dialog components:
 * - StyledDialog: Basic modal wrapper
 * - StyledConfirmDialog: Confirm/Cancel dialog with optional neutral button
 * - StyledOkDialog: Simple OK acknowledgement dialog
 */

type DialogAnimationType = 'slide' | 'fade' | 'none';

/**
 * Base Dialog component - Styled Modal wrapper
 */
const DialogBase = styled<ModalProps>(Modal, {
  base: {
    backgroundColor: theme.colors.gray[100],
  } as any,
});

// ============================================================================
// StyledDialog - Basic Modal Wrapper
// ============================================================================

interface StyledDialogProps extends ModalProps {
  /**
   * Whether dialog is visible
   */
  visible?: boolean;

  /**
   * Animation type for dialog appearance
   * @default 'fade'
   */
  animationType?: DialogAnimationType;

  /**
   * Whether modal shows over transparent background
   * @default true
   */
  transparent?: boolean;

  /**
   * Dialog content
   */
  children?: React.ReactNode;
}

/**
 * Basic dialog component - Wrapper around Modal with consistent styling
 *
 * @example
 * <StyledDialog visible={isOpen} animationType="slide">
 *   <Text>Dialog content</Text>
 * </StyledDialog>
 */
const StyledDialog = ({
  children,
  animationType = 'fade',
  transparent = true,
  visible = false,
  ...rest
}: StyledDialogProps) => {
  return (
    <DialogBase
      visible={visible}
      transparent={transparent}
      animationType={animationType as DialogAnimationType}
      {...rest}
    >
      {children}
    </DialogBase>
  );
};

// ============================================================================
// StyledConfirmDialog - Confirm/Cancel with Optional Neutral
// ============================================================================

interface ConfirmDialogContentProps {
  title: string;
  description: string;
  cancelLabel?: string;
  confirmLabel?: string;
  neutralLabel?: string;
  showNeutral?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onNeutral?: () => void;
  dialogProps?: ViewProps & ViewStyle;
}

/**
 * Confirm dialog content component - Extracted for reusability
 */
const ConfirmDialogContent = ({
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  neutralLabel = 'Neutral',
  showNeutral = false,
  onCancel,
  onConfirm,
  onNeutral,
  dialogProps,
}: ConfirmDialogContentProps) => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      {...dialogProps}
    >
      <YStack
        width="90%"
        borderRadius={8}
        paddingVertical={16}
        paddingHorizontal={16}
        backgroundColor={theme.colors.gray[50]}
      >
        {/* Title */}
        <StyledText
          color={theme.colors.gray[900]}
          fontSize={16}
          fontWeight="bold"
        >
          {title}
        </StyledText>

        <StyledSpacer marginVertical={8} />

        {/* Description */}
        <StyledText
          color={theme.colors.gray[700]}
          fontSize={14}
          fontWeight="normal"
        >
          {description}
        </StyledText>

        <StyledSpacer marginVertical={24} />

        {/* Action Buttons */}
        <XStack justifyContent="flex-end" alignItems="center" gap={8}>
          {/* Cancel Button */}
          <StyledButton
            backgroundColor={theme.colors.red[400]}
            borderColor={theme.colors.red[400]}
            borderRadius={24}
            paddingHorizontal={16}
            paddingVertical={8}
            onPress={onCancel}
          >
            <StyledText
              color={theme.colors.gray[50]}
              fontSize={14}
              fontWeight="normal"
            >
              {cancelLabel}
            </StyledText>
          </StyledButton>

          {/* Neutral Button (Optional) */}
          {showNeutral && onNeutral && (
            <StyledButton
              backgroundColor={theme.colors.orange[400]}
              borderColor={theme.colors.orange[400]}
              borderRadius={24}
              paddingHorizontal={16}
              paddingVertical={8}
              onPress={onNeutral}
            >
              <StyledText
                color={theme.colors.gray[50]}
                fontSize={14}
                fontWeight="normal"
              >
                {neutralLabel}
              </StyledText>
            </StyledButton>
          )}

          {/* Confirm Button */}
          <StyledButton
            backgroundColor={theme.colors.green[500]}
            borderColor={theme.colors.green[500]}
            borderRadius={24}
            paddingHorizontal={16}
            paddingVertical={8}
            onPress={onConfirm}
          >
            <StyledText
              color={theme.colors.gray[50]}
              fontSize={14}
              fontWeight="normal"
            >
              {confirmLabel}
            </StyledText>
          </StyledButton>
        </XStack>
      </YStack>
    </YStack>
  );
};

interface StyledConfirmDialogProps extends Omit<ModalProps, 'visible'> {
  /**
   * Whether dialog is visible
   */
  visible?: boolean;

  /**
   * Dialog title
   */
  title: string;

  /**
   * Dialog description/body text
   */
  description: string;

  /**
   * Cancel button label
   * @default 'Cancel'
   */
  cancelLabel?: string;

  /**
   * Confirm button label
   * @default 'Confirm'
   */
  confirmLabel?: string;

  /**
   * Neutral button label
   * @default 'Neutral'
   */
  neutralLabel?: string;

  /**
   * Whether to show neutral button
   * @default false
   */
  showNeutral?: boolean;

  /**
   * Data to pass to confirm callback
   */
  row?: any;

  /**
   * Callback when user clicks cancel
   */
  onCancel?: () => void;

  /**
   * Callback when user clicks confirm
   */
  onConfirm?: (data?: any) => void;

  /**
   * Callback when user clicks neutral button
   */
  onNeutral?: () => void;

  /**
   * Animation type
   * @default 'fade'
   */
  animationType?: DialogAnimationType;

  /**
   * Additional dialog props
   */
  dialogProps?: ViewProps & ViewStyle;
}

/**
 * Confirm dialog component with optional neutral button
 *
 * @example
 * <StyledConfirmDialog
 *   visible={showDialog}
 *   title="Delete Item?"
 *   description="This action cannot be undone."
 *   onCancel={() => setShowDialog(false)}
 *   onConfirm={() => handleDelete()}
 * />
 *
 * @example
 * // With neutral button
 * <StyledConfirmDialog
 *   visible={showDialog}
 *   title="Save Changes?"
 *   description="You have unsaved changes."
 *   cancelLabel="Discard"
 *   neutralLabel="Save Later"
 *   confirmLabel="Save Now"
 *   showNeutral={true}
 *   onCancel={() => handleDiscard()}
 *   onNeutral={() => handleSaveLater()}
 *   onConfirm={() => handleSaveNow()}
 * />
 */
const StyledConfirmDialog = ({
  visible = false,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  neutralLabel = 'Neutral',
  showNeutral = false,
  row,
  animationType = 'fade',
  onCancel,
  onConfirm,
  onNeutral,
  dialogProps,
  ...rest
}: StyledConfirmDialogProps) => {
  const [show, setShow] = useState(visible);

  const handleConfirm = () => {
    setShow(false);
    if (onConfirm) {
      if (row) {
        onConfirm(row);
      } else {
        onConfirm();
      }
    }
  };

  const handleCancel = () => {
    setShow(false);
    onCancel?.();
  };

  const handleNeutral = () => {
    setShow(false);
    onNeutral?.();
  };

  return (
    <DialogBase
      visible={show}
      transparent={true}
      animationType={animationType as DialogAnimationType}
      {...rest}
    >
      <ConfirmDialogContent
        title={title}
        description={description}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        neutralLabel={neutralLabel}
        showNeutral={showNeutral}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onNeutral={handleNeutral}
        dialogProps={dialogProps}
      />
    </DialogBase>
  );
};

// ============================================================================
// StyledOkDialog - Simple OK Acknowledgement
// ============================================================================

interface OkDialogContentProps {
  title: string;
  description: string;
  okLabel?: string;
  onOk: () => void;
  dialogProps?: ViewProps & ViewStyle;
}

/**
 * OK dialog content component - Extracted for reusability
 */
const OkDialogContent = ({
  title,
  description,
  okLabel = 'Ok',
  onOk,
  dialogProps,
}: OkDialogContentProps) => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      {...dialogProps}
    >
      <YStack
        width="90%"
        borderRadius={8}
        paddingVertical={16}
        paddingHorizontal={16}
        backgroundColor={theme.colors.gray[50]}
      >
        {/* Title */}
        <StyledText
          color={theme.colors.gray[900]}
          fontSize={16}
          fontWeight="bold"
        >
          {title}
        </StyledText>

        <StyledSpacer marginVertical={8} />

        {/* Description */}
        <StyledText
          color={theme.colors.gray[700]}
          fontSize={14}
          fontWeight="normal"
        >
          {description}
        </StyledText>

        <StyledSpacer marginVertical={24} />

        {/* OK Button */}
        <StyledButton
          flex={1}
          backgroundColor={theme.colors.cyan[500]}
          borderColor={theme.colors.cyan[500]}
          borderRadius={24}
          paddingHorizontal={16}
          paddingVertical={12}
          onPress={onOk}
        >
          <StyledText
            color={theme.colors.gray[50]}
            fontSize={14}
            fontWeight="bold"
            textAlign="center"
          >
            {okLabel}
          </StyledText>
        </StyledButton>
      </YStack>
    </YStack>
  );
};

interface StyledOkDialogProps extends Omit<ModalProps, 'visible'> {
  /**
   * Whether dialog is visible
   */
  visible?: boolean;

  /**
   * Dialog title
   * @default "We're sorry, something went wrong."
   */
  title?: string;

  /**
   * Dialog description/body text
   * @default 'Please try again later'
   */
  description?: string;

  /**
   * OK button label
   * @default 'Ok'
   */
  okLabel?: string;

  /**
   * Callback when user clicks OK
   */
  onOk?: () => void;

  /**
   * Animation type
   * @default 'fade'
   */
  animationType?: DialogAnimationType;

  /**
   * Additional dialog props
   */
  dialogProps?: ViewProps & ViewStyle;
}

/**
 * OK dialog component - Simple acknowledgement dialog with single button
 *
 * @example
 * <StyledOkDialog
 *   visible={showError}
 *   title="Error"
 *   description="Something went wrong. Please try again."
 *   onOk={() => setShowError(false)}
 * />
 *
 * @example
 * // With custom labels
 * <StyledOkDialog
 *   visible={showSuccess}
 *   title="Success!"
 *   description="Your changes have been saved."
 *   okLabel="Great!"
 *   onOk={() => handleSuccess()}
 * />
 */
const StyledOkDialog = ({
  visible = false,
  title = "We're sorry, something went wrong.",
  description = 'Please try again later',
  okLabel = 'Ok',
  onOk,
  animationType = 'fade',
  dialogProps,
  ...rest
}: StyledOkDialogProps) => {
  const [show, setShow] = useState(visible);

  const handleOk = () => {
    setShow(false);
    onOk?.();
  };

  return (
    <DialogBase
      visible={show}
      transparent={true}
      animationType={animationType as DialogAnimationType}
      {...rest}
    >
      <OkDialogContent
        title={title}
        description={description}
        okLabel={okLabel}
        onOk={handleOk}
        dialogProps={dialogProps}
      />
    </DialogBase>
  );
};

export {
  StyledDialog,
  StyledConfirmDialog,
  StyledOkDialog,
  ConfirmDialogContent,
  OkDialogContent,
  DialogBase,
};

export type {
  StyledDialogProps,
  StyledConfirmDialogProps,
  StyledOkDialogProps,
  ConfirmDialogContentProps,
  OkDialogContentProps,
};

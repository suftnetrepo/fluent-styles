import React, { useState } from 'react'
import { Modal } from 'react-native'
import { XStack, YStack } from '../stack'
import { StyledText } from '../text'
import { StyledButton } from '../button'
import { StyledSpacer } from '../spacer'
import { styled } from '../styled'
import { theme } from '../theme'

const Dialog = styled(Modal, {
  base: {
    backgroundColor: theme.colors.gray[100],
    padding: 20,
    borderRadius: 10
  }
})

const StyledDialog = ({
	children,
	animationType = 'fade',
	transparent = true,
	visible = false,
	...rest
}) => {
  return (
    <Dialog
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      {...rest}
		>
      {children}
    </Dialog>
  )
}

const StyledConfirmDialog = ({
	visible = false,
	row,
	animationType = 'fade',
	onCancel,
	onConfirm,
	transparent = true,
	...rest
}) => {
  const [show, setShow] = useState(visible)
  const { title, description, cancel = 'Cancel', confirm = 'Confirm' } = rest

  const handleConfirm = () => {
    setShow(false)
    if (typeof onConfirm === 'function') {
      if (typeof row === 'object' && row !== null) {
        onConfirm(row)
      } else {
        onConfirm()
      }
    }
  }
  const handleCancel = () => {
    setShow(false)
    if (typeof onCancel === 'function') {
      onCancel()
    }
  }

  return (
    <Dialog
      visible={show}
      transparent={transparent}
      animationType={animationType}
      {...rest}
		>
      <YStack transparent flex={1} justifyContent='center' alignItems='center'>
        <YStack
          width={'90%'}
          borderRadius={8}
          paddingVertical={16}
          paddingHorizontal={16}
          backgroundColor={theme.colors.gray[1]}
				>
          <StyledText
            color={theme.colors.gray[800]}
            fontSize={theme.fontSize.normal}
            fontWeight={theme.fontWeight.bold}
					>
            {title}
          </StyledText>
          <StyledSpacer marginVertical={1} />
          <StyledText
            color={theme.colors.gray[800]}
            fontSize={theme.fontSize.large}
            fontWeight={theme.fontWeight.normal}
					>
            {description}
          </StyledText>
          <StyledSpacer marginVertical={4} />
          <XStack justifyContent='flex-end' alignItems='center'>
            <StyledButton
              backgroundColor={theme.colors.red[400]}
              borderColor={theme.colors.red[400]}
              borderRadius={30}
              onPress={() => handleCancel()}
						>
              <StyledText
                paddingHorizontal={20}
                paddingVertical={4}
                color={theme.colors.gray[1]}
                fontSize={theme.fontSize.large}
                fontWeight={theme.fontWeight.normal}
							>
                {cancel}
              </StyledText>
            </StyledButton>
            <StyledSpacer marginHorizontal={2} />
            <StyledButton
              backgroundColor={theme.colors.green[500]}
              borderColor={theme.colors.green[500]}
              onPress={() => handleConfirm()}
              borderRadius={30}
						>
              <StyledText
                paddingHorizontal={20}
                paddingVertical={4}
                color={theme.colors.gray[1]}
                fontSize={theme.fontSize.large}
                fontWeight={theme.fontWeight.normal}
							>
                {confirm}
              </StyledText>
            </StyledButton>
          </XStack>
        </YStack>
      </YStack>
    </Dialog>
  )
}

const StyledOkDialog = ({
	visible = false,
	animationType = 'fade',
	transparent = true,
	...rest
}) => {
  const [show, setShow] = useState(visible)
  const {
		title = "We're sorry, something went wrong.",
		description = 'Please try again later',
		ok = 'Ok',
		onOk
	} = rest

  const handleOk = () => {
    setShow(false)
    if (typeof onOk === 'function') {
      onOk()
    }
  }
  return (
    <Dialog
      visible={show}
      transparent={transparent}
      animationType={animationType}
      {...rest}
		>
      <YStack transparent flex={1} justifyContent='center' alignItems='center'>
        <YStack
          width={'90%'}
          borderRadius={8}
          paddingVertical={16}
          paddingHorizontal={16}
          backgroundColor={theme.colors.gray[1]}
				>
          <StyledText
            color={theme.colors.gray[800]}
            fontSize={theme.fontSize.normal}
            fontWeight={theme.fontWeight.bold}
					>
            {title}
          </StyledText>
          <StyledSpacer marginVertical={2} />
          <StyledText
            color={theme.colors.gray[800]}
            fontSize={theme.fontSize.normal}
            fontWeight={theme.fontWeight.normal}
					>
            {description}
          </StyledText>
          <StyledSpacer marginVertical={8} />
          <XStack justifyContent='flex-end' alignItems='center'>
            <StyledButton
              flex={1}
              backgroundColor={theme.colors.cyan[500]}
              borderColor={theme.colors.cyan[500]}
              onPress={handleOk}
              borderRadius={30}
						>
              <StyledText
                paddingHorizontal={20}
                paddingVertical={8}
                color={theme.colors.gray[1]}
                fontSize={theme.fontSize.large}
                fontWeight={theme.fontWeight.bold}
							>
                {ok}
              </StyledText>
            </StyledButton>
          </XStack>
        </YStack>
      </YStack>
    </Dialog>
  )
}

export { StyledDialog, StyledConfirmDialog, StyledOkDialog }

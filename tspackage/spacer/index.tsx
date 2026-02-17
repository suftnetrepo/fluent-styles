import React from 'react'
import { View, ViewProps } from 'react-native'
import { styled } from '../utils/styled'

// ============================================================================
// STYLED COMPONENT
// ============================================================================

/**
 * Spacer - Simple spacing component for gaps and margins
 */
const Spacer = styled<any>(View, {
  base: {},
})

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Props for StyledSpacer component
 */
interface StyledSpacerProps extends ViewProps {
  marginHorizontal?: number
  marginVertical?: number
  margin?: number
  padding?: number
  paddingHorizontal?: number
  paddingVertical?: number
  width?: number | string
  height?: number | string
  flex?: number | boolean
  gap?: number
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * StyledSpacer - Flexible spacing component
 * Used to add gaps and spacing between elements
 *
 * @example
 * ```tsx
 * <StyledSpacer marginHorizontal={16} />
 * <StyledSpacer height={24} />
 * <StyledSpacer flex={1} />
 * ```
 */
const StyledSpacer = React.forwardRef<View, StyledSpacerProps>(
  ({ ...rest }, ref) => {
    return <Spacer ref={ref} {...rest} />
  }
)

StyledSpacer.displayName = 'StyledSpacer'

// ============================================================================
// EXPORTS
// ============================================================================

export { StyledSpacer }
export type { StyledSpacerProps }

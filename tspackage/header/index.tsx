import React, { forwardRef } from 'react'
import {
  View,
  ViewProps,
  ViewStyle,
  StatusBarStyle,
  StatusBarAnimation,
} from 'react-native'
import { StatusBar } from 'react-native'
// @ts-ignore - react-native-vector-icons does not have type declarations
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../utils/theme'
import { YStack, XStack } from '../stack'
import { styled } from '../utils/styled'
import { StyledCycle } from '../cycle'
import { StyledText } from '../text'
import { StyledSpacer } from '../spacer'
import { getStatusBarHeight } from '../utils/statusBar'

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * Base ViewStyle for headers
 * Provides default styling for all header variants
 */
const baseHeaderStyle: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

/**
 * Headers - Base styled View component for header container
 * Simple, clean header base without variant props
 *
 * Features:
 * - Full width with flexible row layout
 * - Centered items vertically
 * - Proper spacing for header content
 */
const HeadersBase = styled<ViewProps>(View, {
  base: baseHeaderStyle as any,
})

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * StatusBar props for customizing StatusBar appearance
 */
interface StatusBarProps {
  barStyle?: StatusBarStyle
  backgroundColor?: string
  translucent?: boolean
  animated?: boolean
  animation?: StatusBarAnimation
  hidden?: boolean
  networkActivityIndicatorVisible?: boolean
  showHideTransition?: 'fade' | 'slide'
}

/**
 * Props for StyledHeader component
 */
interface StyledHeaderProps {
  children?: React.ReactNode
  statusProps?: StatusBarProps
  skipAndroid?: boolean
  skipIos?: boolean
}

/**
 * Props for Header content component
 */
interface HeaderProps {
  navigator?: any
  fontWeight?: string
  fontSize?: number
  iconProps?: any
  color?: string
  textProps?: any
  title?: string
  icon?: boolean
  cycleProps?: any
  rightIcon?: React.ReactNode
  rightIconProps?: any
  onPress?: () => void
  [key: string]: any
}

/**
 * Props for Full component
 */
interface FullProps {
  children?: React.ReactNode
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Header - Header content component with title and optional icon
 * Automatically uses theme values for consistent styling
 *
 * @param title - Header title text
 * @param icon - Show back icon
 * @param onPress - Callback for back icon press
 * @param fontWeight - Title font weight (default: theme.fontWeight.normal)
 * @param fontSize - Title font size (default: theme.fontSize.normal)
 * @param color - Title color (default: theme.colors.gray[800])
 * @param rightIcon - Optional right-side icon/element
 * @param rest - Other props
 *
 * @example
 * ```tsx
 * <StyledHeader.Header
 *   title="Settings"
 *   icon={true}
 *   onPress={() => navigation.goBack()}
 *   fontSize={theme.fontSize.large}
 *   fontWeight={theme.fontWeight.bold}
 * />
 * ```
 */
const Header = React.forwardRef<View, HeaderProps>(
  (
    {
      navigator,
      fontWeight = theme.fontWeight.normal,
      fontSize = theme.fontSize.normal,
      iconProps,
      color = theme.colors.gray[800],
      textProps,
      title,
      icon = false,
      cycleProps,
      rightIcon,
      rightIconProps,
      onPress,
      ...rest
    },
    ref
  ) => {
    return (
      <XStack
        ref={ref}
        justifyContent="flex-start"
        alignItems="center"
        flex={true as any}
        paddingHorizontal={8}
        paddingVertical={8}
        {...rest}
      >
        {/* Back Icon */}
        {icon && (
          <StyledCycle {...cycleProps}>
            <>
              <Icon
                name="arrow-back"
                size={30}
                color={theme.colors.gray[700]}
                onPress={() => onPress && onPress()}
                {...iconProps}
              />
              <StyledSpacer marginHorizontal={4} />
            </>
          </StyledCycle>
        )}

        {/* Title */}
        {title && (
          <StyledText
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            {...textProps}
          >
            {title}
          </StyledText>
        )}

        {/* Right Icon */}
        {rightIcon && <>{rightIcon}</>}
      </XStack>
    )
  }
)

Header.displayName = 'Header'

/**
 * Full - Full-width header wrapper component
 * Used for custom header layouts
 *
 * @example
 * ```tsx
 * <StyledHeader>
 *   <StyledHeader.Full>
 *     <CustomHeaderContent />
 *   </StyledHeader.Full>
 * </StyledHeader>
 * ```
 */
const Full = React.forwardRef<View, FullProps>(({ children }, ref) => (
  <>{children}</>
))

Full.displayName = 'Full'

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Extended StyledHeader interface to include attached components
 */
interface StyledHeaderComponent extends React.ForwardRefExoticComponent<
  StyledHeaderProps & React.RefAttributes<View>
> {
  Header: typeof Header
  Full: typeof Full
}

/**
 * StyledHeader with attached components
 * Main export for using the header with full flexibility
 */
const StyledHeaderComponent = React.forwardRef<View, StyledHeaderProps>(
  (
    {
      statusProps,
      skipAndroid = false,
      skipIos = true,
      children,
    },
    ref
  ) => {
    const statusBarHeight = getStatusBarHeight(skipAndroid, skipIos)

    return (
      <YStack>
        <StatusBar
          translucent={true}
          backgroundColor={theme.colors.gray[1]}
          barStyle={'dark-content'}
          {...statusProps}
        />
        <HeadersBase
          ref={ref}
          style={{ paddingTop: statusBarHeight }}
        >
          {children}
        </HeadersBase>
      </YStack>
    )
  }
) as StyledHeaderComponent

StyledHeaderComponent.displayName = 'StyledHeader'
StyledHeaderComponent.Header = Header
StyledHeaderComponent.Full = Full

export { StyledHeaderComponent as StyledHeader, Header, Full }
export type { StyledHeaderProps, HeaderProps, FullProps, StatusBarProps }

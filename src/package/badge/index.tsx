import React, { forwardRef, ReactNode } from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import { XStack, YStack } from '../stack';
import { theme } from '../utils/theme';
import { styled } from '../utils/styled';
import { viewStyleVariants, viewStyleStringVariants } from '../utils/viewStyleVariants';

/**
 * Base style for Badge component
 */
const baseBadgeStyle: TextStyle = {
  borderColor: theme.colors.gray[200],
  borderRadius: 32,
  backgroundColor: theme.colors.gray[100],
  fontSize: theme.fontSize.micro,
  color: theme.colors.gray[800],
  fontWeight: '600',
  textAlign: 'center',
  paddingHorizontal: 8,
  paddingVertical: 4,
};

/**
 * Custom variants specific to Badge component
 * (fontWeight, color, fontSize, etc. are handled by viewStyleVariants)
 */
const badgeVariants = {
  // Badge-specific size presets
  size: {
    small: {
      fontSize: theme.fontSize.nano,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 12,
    },
    medium: {
      fontSize: theme.fontSize.micro,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 16,
    },
    large: {
      fontSize: theme.fontSize.small,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
  } as any,
  // Badge color/style variants
  variant: {
    default: {
      backgroundColor: theme.colors.gray[100],
      color: theme.colors.gray[800],
    },
    primary: {
      backgroundColor: theme.colors.blue[500],
      color: theme.colors.white[500],
    },
    success: {
      backgroundColor: theme.colors.green[500],
      color: theme.colors.white[500],
    },
    warning: {
      backgroundColor: theme.colors.amber[500],
      color: theme.colors.white[500],
    },
    danger: {
      backgroundColor: theme.colors.red[500],
      color: theme.colors.white[500],
    },
    info: {
      backgroundColor: theme.colors.cyan[500],
      color: theme.colors.white[500],
    },
    outline: {
      backgroundColor: theme.colors.transparent,
      borderWidth: 1,
      borderColor: theme.colors.gray[300],
      color: theme.colors.gray[800],
    },
  } as any,
  // Positioning variant
  absolute: {
    true: {
      position: 'absolute',
    },
    false: {},
  } as any,
};

/**
 * StyledBadgeBase: Base styled Text component with flexible styling
 */
const StyledBadgeBase = styled<any>(Text, {
  base: baseBadgeStyle as any,
  variants: {
    ...badgeVariants,
    ...viewStyleVariants,
    ...viewStyleStringVariants,
  } as any,
});

/**
 * Props for Badge component
 */
interface BadgeProps extends Omit<TextProps, 'ref'> {
  // Content
  children?: ReactNode;

  // Styling
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: number;

  // Positioning (for absolute badges)
  absolute?: boolean;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;

  // Typography
  fontWeight?: string;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

/**
 * Badge: Professional badge component for labels, counts, and status indicators
 *
 * Features:
 * - Multiple variants (primary, success, warning, danger, info, outline)
 * - Three size options (small, medium, large)
 * - Absolute positioning support
 * - Theme color integration
 * - Flexible typography
 */
const Badge = forwardRef<Text, BadgeProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'default',
      backgroundColor,
      color,
      borderColor: borderColorProp,
      borderRadius = 32,
      absolute = false,
      top,
      right,
      bottom,
      left,
      fontWeight = '600',
      fontSize = theme.fontSize.micro,
      fontFamily,
      textAlign = 'center',
      ...rest
    },
    ref
  ) => {
    const sizeStyle = badgeVariants.size[size];
    const variantStyle = badgeVariants.variant[variant];

    const computedStyle: TextStyle = {
      ...baseBadgeStyle,
      ...sizeStyle,
      ...variantStyle,
      ...(backgroundColor && { backgroundColor }),
      ...(color && { color }),
      ...(borderColorProp && { borderColor: borderColorProp }),
      ...(fontWeight && { fontWeight: fontWeight as any }),
      ...(fontSize && { fontSize }),
      ...(fontFamily && { fontFamily }),
      ...(textAlign && { textAlign }),
      ...(absolute && {
        position: 'absolute' as any,
        ...(top !== undefined && { top }),
        ...(right !== undefined && { right }),
        ...(bottom !== undefined && { bottom }),
        ...(left !== undefined && { left }),
      }),
    };

    return (
      <StyledBadgeBase ref={ref} style={computedStyle} {...rest}>
        {children}
      </StyledBadgeBase>
    );
  }
);

Badge.displayName = 'Badge';

/**
 * Props for BadgeWithIcon component
 */
interface BadgeWithIconProps extends Omit<ViewProps, 'children'> {
  title: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textProps?: any;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
}

/**
 * BadgeWithIcon: Badge with optional left and/or right icons
 *
 * Use for: Status badges with icons, tag chips, category labels
 */
const BadgeWithIcon = forwardRef<View, BadgeWithIconProps>(
  (
    {
      title,
      iconLeft,
      iconRight,
      textProps,
      size = 'medium',
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    return (
      <XStack
        ref={ref}
        justifyContent="center"
        alignItems="center"
        gap={4}
        {...rest}
      >
        {iconLeft && <>{iconLeft}</>}
        <Badge size={size} variant={variant} {...textProps}>
          {title}
        </Badge>
        {iconRight && <>{iconRight}</>}
      </XStack>
    );
  }
);

BadgeWithIcon.displayName = 'BadgeWithIcon';

/**
 * Props for BadgeIcon component
 */
interface BadgeIconProps extends Omit<ViewProps, 'children'> {
  icon: ReactNode;
  char?: ReactNode;
  charProps?: any;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
}

/**
 * BadgeIcon: Icon with positioned badge (notification count, status indicator, etc.)
 *
 * Use for: Notification badges, unread counts, status icons, activity indicators
 */
const BadgeIcon = forwardRef<View, BadgeIconProps>(
  (
    {
      icon,
      char,
      charProps,
      top = -6,
      right = -6,
      bottom,
      left,
      size = 'small',
      variant = 'danger',
      ...rest
    },
    ref
  ) => {
    return (
      <YStack ref={ref} justifyContent="center" alignItems="center" {...rest}>
        {icon}
        {char && (
          <Badge
            absolute
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            size={size}
            variant={variant}
            {...charProps}
          >
            {char}
          </Badge>
        )}
      </YStack>
    );
  }
);

BadgeIcon.displayName = 'BadgeIcon';

/**
 * Props for Counter badge (numeric count)
 */
interface CounterBadgeProps extends BadgeProps {
  count: number;
  maxCount?: number; // e.g., 99+ when count > 99
  showZero?: boolean; // Show badge even if count is 0
}

/**
 * CounterBadge: Specialized badge for displaying counts
 *
 * Use for: Notification counts, item counts, message counts
 */
const CounterBadge = forwardRef<Text, CounterBadgeProps>(
  (
    {
      count,
      maxCount = 99,
      showZero = false,
      children,
      ...rest
    },
    ref
  ) => {
    if (!showZero && count === 0) {
      return null;
    }

    const displayCount = count > maxCount ? `${maxCount}+` : count;

    return (
      <Badge ref={ref} size="small" variant="danger" {...rest}>
        {displayCount}
      </Badge>
    );
  }
);

CounterBadge.displayName = 'CounterBadge';

/**
 * Props for Status badge
 */
interface StatusBadgeProps extends BadgeProps {
  status: 'online' | 'offline' | 'idle' | 'busy' | 'away' | 'dnd' | 'inactive';
  showDot?: boolean; // Show colored dot alongside text
}

/**
 * StatusBadge: Specialized badge for status indicators
 *
 * Use for: User status, availability, presence indicators
 */
const StatusBadge = forwardRef<Text, StatusBadgeProps>(
  (
    {
      status,
      showDot = true,
      children,
      ...rest
    },
    ref
  ) => {
    const statusConfig = {
      online: {
        variant: 'success' as const,
        label: 'Online',
        dotColor: theme.colors.green[500],
      },
      offline: {
        variant: 'default' as const,
        label: 'Offline',
        dotColor: theme.colors.gray[400],
      },
      idle: {
        variant: 'warning' as const,
        label: 'Idle',
        dotColor: theme.colors.amber[500],
      },
      busy: {
        variant: 'danger' as const,
        label: 'Busy',
        dotColor: theme.colors.red[500],
      },
      away: {
        variant: 'warning' as const,
        label: 'Away',
        dotColor: theme.colors.amber[400],
      },
      dnd: {
        variant: 'danger' as const,
        label: 'Do Not Disturb',
        dotColor: theme.colors.red[600],
      },
      inactive: {
        variant: 'default' as const,
        label: 'Inactive',
        dotColor: theme.colors.gray[300],
      },
    };

    const config = statusConfig[status];

    return (
      <XStack alignItems="center" gap={4}>
        {showDot && (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: config.dotColor,
            }}
          />
        )}
        <Badge
          ref={ref}
          size="small"
          variant={config.variant}
          {...rest}
        >
          {children || config.label}
        </Badge>
      </XStack>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

/**
 * Exports
 */
export {
  Badge,
  BadgeWithIcon,
  BadgeIcon,
  CounterBadge,
  StatusBadge,
  BadgeProps,
  BadgeWithIconProps,
  BadgeIconProps,
  CounterBadgeProps,
  StatusBadgeProps,
  StyledBadgeBase,
};
export default Badge;

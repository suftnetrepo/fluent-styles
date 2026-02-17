# Badge Component - Quick Reference

## All Badge Types

### Badge (Basic)
```tsx
<Badge variant="primary" size="medium">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
```

### BadgeWithIcon
```tsx
<BadgeWithIcon title="Verified" iconLeft={<Icon />} variant="success" />
```

### BadgeIcon
```tsx
<BadgeIcon icon={<BellIcon />} char="5" variant="danger" />
```

### CounterBadge
```tsx
<CounterBadge count={unread} maxCount={99} />
```

### StatusBadge
```tsx
<StatusBadge status="online" />
```

## Sizes

```tsx
<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>
```

## Variants

```
default   • primary   • success   • warning   • danger   • info   • outline
```

## Status Types

```
online  • offline  • idle  • busy  • away  • dnd  • inactive
```

## Props Quick Lookup

### Badge
```tsx
<Badge
  size="small|medium|large"
  variant="default|primary|success|warning|danger|info|outline"
  backgroundColor={color}
  color={color}
  absolute={true|false}
  top={number}
  right={number}
/>
```

### BadgeWithIcon
```tsx
<BadgeWithIcon
  title="Text"
  iconLeft={<Icon />}
  iconRight={<Icon />}
  variant="primary"
  size="small"
/>
```

### BadgeIcon
```tsx
<BadgeIcon
  icon={<Icon />}
  char="5"
  variant="danger"
  top={-6}
  right={-6}
/>
```

### CounterBadge
```tsx
<CounterBadge
  count={5}
  maxCount={99}
  showZero={true|false}
/>
```

### StatusBadge
```tsx
<StatusBadge
  status="online|offline|idle|busy|away|dnd|inactive"
  showDot={true|false}
/>
```

## Common Use Cases

### Notification Belt
```tsx
<BadgeIcon icon={<BellIcon />} char={notifications} variant="danger" />
```

### Unread Messages
```tsx
<BadgeIcon icon={<MailIcon />} char={unreadCount} variant="danger" />
```

### User Online Status
```tsx
<BadgeIcon
  icon={<Avatar url={avatarUrl} />}
  char={null}
  variant={isOnline ? 'success' : 'default'}
  top={0}
  right={0}
/>
```

### Feature Tag
```tsx
<Badge variant="primary" size="small">New</Badge>
<Badge variant="warning" size="small">Beta</Badge>
<Badge variant="success" size="small">Released</Badge>
```

### Priority Level
```tsx
<Badge variant="success">Low</Badge>
<Badge variant="warning">Medium</Badge>
<Badge variant="danger">High</Badge>
```

### Badge Count Truncation
```tsx
<CounterBadge count={totalNotifications} maxCount={99} />
// Shows: "99+" if count > 99
```

### Hidden Zero Count
```tsx
<CounterBadge count={unreadCount} showZero={false} />
// Shows: nothing if count is 0
```

### With Border
```tsx
<Badge variant="outline" borderColor={theme.colors.blue[300]}>
  Outlined
</Badge>
```

### Custom Colors
```tsx
<Badge
  backgroundColor={theme.colors.purple[500]}
  color={theme.colors.white[500]}
>
  Custom
</Badge>
```

### Tag Chip with Icon
```tsx
<BadgeWithIcon
  title="JavaScript"
  iconLeft={<CodeIcon size={12} />}
  variant="primary"
  size="small"
/>
```

### Category Label
```tsx
<Badge
  backgroundColor={theme.colors.green[500]}
  color={theme.colors.white[500]}
  size="small"
>
  Technology
</Badge>
```

### Status with Different Text
```tsx
<StatusBadge status="online">
  Available
</StatusBadge>
```

### List Item Badge
```tsx
<XStack justifyContent="space-between">
  <StyledText>Notifications</StyledText>
  <CounterBadge count={5} />
</XStack>
```

### Form Field Error
```tsx
<YStack>
  <StyledText>Email</StyledText>
  <Badge variant="danger" size="small">Required</Badge>
</YStack>
```

### Achievement Icon
```tsx
<BadgeWithIcon
  title="Top Contributor"
  iconLeft={<StarIcon color={theme.colors.amber[500]} size={14} />}
  variant="primary"
/>
```

## Theme Colors for Custom Styling

```tsx
// Background colors
theme.colors.gray[100]      // Default
theme.colors.blue[500]      // Primary
theme.colors.green[500]     // Success
theme.colors.amber[500]     // Warning
theme.colors.red[500]       // Danger
theme.colors.cyan[500]      // Info

// Text colors
theme.colors.white[500]     // On dark backgrounds
theme.colors.gray[800]      // On light backgrounds
theme.colors.gray[50]       // Lightest
```

## Arrays & Lists

```tsx
const badges = ['active', 'verified', 'premium'];

<XStack gap={4}>
  {badges.map(badge => (
    <Badge key={badge} variant="primary" size="small">
      {badge}
    </Badge>
  ))}
</XStack>
```

## Conditional Display

```tsx
{isNew && <Badge variant="primary" size="small">New</Badge>}
{isFeatured && <Badge variant="warning">Featured</Badge>}
{hasError && <Badge variant="danger">Error</Badge>}
```

## Multiple Badges

```tsx
<XStack gap={6}>
  <Badge variant="primary" size="small">JavaScript</Badge>
  <Badge variant="info" size="small">React</Badge>
  <Badge variant="success" size="small">TypeScript</Badge>
</XStack>
```

## Status Combinations

```tsx
<YStack gap={4}>
  <XStack alignItems="center" gap={8}>
    <StatusBadge status="online" />
    <StyledText>Alice</StyledText>
  </XStack>
  <XStack alignItems="center" gap={8}>
    <StatusBadge status="offline" />
    <StyledText>Bob</StyledText>
  </XStack>
</YStack>
```

## Notification System

```tsx
const notifications = [
  { icon: 'mail', count: 5, label: 'Messages', variant: 'primary' },
  { icon: 'alert', count: 2, label: 'Alerts', variant: 'danger' },
  { icon: 'info', count: 0, label: 'Updates', variant: 'info' },
];

<YStack gap={8}>
  {notifications.map(n => (
    <XStack key={n.label} alignItems="center" gap={8}>
      <BadgeIcon
        icon={<Icon name={n.icon} size={20} />}
        char={n.count > 0 ? n.count : null}
        variant={n.variant}
      />
      <StyledText>{n.label}</StyledText>
    </XStack>
  ))}
</YStack>
```

## Shopping Cart Badge

```tsx
<BadgeIcon
  icon={<ShoppingCartIcon size={24} />}
  char={cartItems.length > 0 ? cartItems.length : null}
  variant="danger"
  top={-6}
  right={-6}
/>
```

## Read/Unread Status

```tsx
{messages.map(msg => (
  <XStack key={msg.id} alignItems="center" gap={8}>
    {!msg.read && <Badge variant="primary" size="small">New</Badge>}
    <StyledText>{msg.text}</StyledText>
  </XStack>
))}
```

## Feature Flags

```tsx
const features = {
  darkMode: true,
  newUI: false,
  beta: true,
};

<YStack gap={4}>
  {Object.entries(features).map(([name, enabled]) => (
    <XStack key={name} alignItems="center" gap={8}>
      <Badge
        variant={enabled ? 'success' : 'default'}
        size="small"
      >
        {enabled ? '✓' : '◯'}
      </Badge>
      <StyledText>{name}</StyledText>
    </XStack>
  ))}
</YStack>
```

## Loading Badge

```tsx
<XStack alignItems="center" gap={8}>
  <ActivityIndicator color={theme.colors.blue[500]} />
  <Badge variant="info" size="small">Loading...</Badge>
</XStack>
```

## Ref Usage

```tsx
const badgeRef = useRef<Text>(null);

<Badge ref={badgeRef}>Text</Badge>

// Access native Text methods
badgeRef.current?.setNativeProps({ opacity: 0.5 });
```

## Animating Badges

```tsx
const fadeAnim = useRef(new Animated.Value(1)).current;

<Animated.Text style={{ opacity: fadeAnim }}>
  <Badge variant="danger">Animated</Badge>
</Animated.Text>
```

## Complete Example

```tsx
import { useState } from 'react';
import { YStack, XStack } from '../stack';
import { Badge, BadgeIcon, CounterBadge, StatusBadge } from '../badge';
import { StyledText } from '../text';

export const NotificationPanel = () => {
  const [notifications, setNotifications] = useState({
    messages: 5,
    alerts: 2,
    updates: 0,
  });
  const [userStatus, setUserStatus] = useState('online');

  return (
    <YStack width="100%" padding={16} gap={16}>
      {/* Header with user status */}
      <XStack alignItems="center" gap={8}>
        <StatusBadge status={userStatus} />
        <StyledText fontWeight="600">You are {userStatus}</StyledText>
      </XStack>

      {/* Notification counts */}
      <YStack gap={12}>
        <StyledText fontWeight="600">Notifications</StyledText>
        
        <XStack alignItems="center" justifyContent="space-between">
          <StyledText>Messages</StyledText>
          <CounterBadge count={notifications.messages} maxCount={99} />
        </XStack>
        
        <XStack alignItems="center" justifyContent="space-between">
          <StyledText>Alerts</StyledText>
          <CounterBadge count={notifications.alerts} maxCount={99} />
        </XStack>
        
        <XStack alignItems="center" justifyContent="space-between">
          <StyledText>Updates</StyledText>
          <CounterBadge count={notifications.updates} showZero={false} />
        </XStack>
      </YStack>

      {/* Feature badges */}
      <YStack gap={8}>
        <StyledText fontWeight="600">Features</StyledText>
        <XStack gap={4} flexWrap="wrap">
          <Badge variant="primary" size="small">New</Badge>
          <Badge variant="warning" size="small">Beta</Badge>
          <Badge variant="success" size="small">Available</Badge>
        </XStack>
      </YStack>
    </YStack>
  );
};
```

---

**Last Updated**: Badge Migration  
**Version**: 1.0.0  
**Type Coverage**: 100%  
**Component Types**: 5  

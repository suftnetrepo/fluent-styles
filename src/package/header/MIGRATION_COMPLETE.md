# Header Component - TypeScript Migration ✅

## Overview

The Header component has been successfully migrated from JavaScript to TypeScript with a **flexible variant system** that supports any value combination while maintaining platform compatibility for both Android and iOS.

## 🎯 Key Features

### ✅ Flexible Variants
- **marginTop**: Any number (responsive spacing)
- **marginBottom**: Any number (responsive spacing)
- **paddingHorizontal**: Any number (default: 8)
- **paddingVertical**: Any number (default: 8)
- **statusHeight**: Any number (auto-set by platform)
- **gap**: Any number (spacing between elements)
- **justifyContent**: Validated alignment strings
- **flex**: Boolean toggle

### ✅ Platform Support
- **iOS**: Automatically handles notch/safe area (iPhone X, 12, etc.)
- **Android**: Handles status bar height properly
- **Responsive**: Adapts to any screen size and orientation

### ✅ Type Safety
- Full TypeScript support with proper types
- IDE autocomplete for all props
- Runtime validation for critical values

### ✅ Attached Components
```tsx
<StyledHeader>
  <StyledHeader.Header title="My App" />
  <StyledHeader.Full>{content}</StyledHeader.Full>
</StyledHeader>
```

---

## 📦 Component Structure

### StyledHeader
Main header container with status bar integration.

**Props:**
```tsx
interface StyledHeaderProps {
  children?: React.ReactNode
  statusProps?: StatusBarProps
  skipAndroid?: boolean          // Skip Android status bar height
  skipIos?: boolean              // Skip iOS status bar height (default: true)
  marginTop?: number
  marginBottom?: number
  paddingHorizontal?: number
  paddingVertical?: number
  gap?: number
}
```

### Header (StyledHeader.Header)
Header content component with title and optional icons.

**Props:**
```tsx
interface HeaderProps {
  title?: string                  // Header title
  icon?: boolean                  // Show back icon
  onPress?: () => void            // Back icon callback
  fontWeight?: string             // Title font weight
  fontSize?: number               // Title font size
  color?: string                  // Title color
  rightIcon?: React.ReactNode     // Right-side icon
  iconProps?: any                 // Back icon props
  rightIconProps?: any            // Right icon props
  textProps?: any                 // Title text props
  cycleProps?: any                // Cycle wrapper props
  [key: string]: any              // Other props
}
```

### Full (StyledHeader.Full)
Wrapper for custom header layouts.

---

## 🚀 Usage Examples

### Basic Header
```tsx
import { StyledHeader } from '@fluent-styles'

export function MyScreen({ navigation }) {
  return (
    <>
      <StyledHeader>
        <StyledHeader.Header
          title="My App"
          icon={true}
          onPress={() => navigation.goBack()}
        />
      </StyledHeader>
      
      {/* Screen content */}
    </>
  )
}
```

### With Custom Styling (Using Theme)
```tsx
import { StyledHeader } from '@fluent-styles'
import { theme } from '@fluent-styles'

<StyledHeader
  paddingVertical={theme.space[4]}
  gap={theme.space[2]}
  marginTop={0}
>
  <StyledHeader.Header
    title="Settings"
    fontSize={theme.fontSize.large}
    fontWeight={theme.fontWeight.bold}
    color={theme.colors.blue[500]}
    icon={true}
    onPress={handleBack}
  />
</StyledHeader>
```

### With Right Icon
```tsx
<StyledHeader>
  <StyledHeader.Header
    title="Profile"
    icon={true}
    onPress={() => navigation.goBack()}
    rightIcon={<Icon name="more-vert" size={24} />}
  />
</StyledHeader>
```

### Custom Header Layout
```tsx
<StyledHeader>
  <StyledHeader.Full>
    <XStack flex justifyContent="space-between" alignItems="center">
      <Icon name="menu" size={24} onPress={() => navigation.toggleDrawer()} />
      <StyledText fontWeight={theme.fontWeight.bold}>My App</StyledText>
      <Icon name="more-vert" size={24} />
    </XStack>
  </StyledHeader.Full>
</StyledHeader>
```

---

## 📱 Platform-Specific Behavior

### iOS
- Automatically detects iPhone models (X, 12, etc.)
- Handles safe area (notch) for supported devices
- Default status bar height: 20px (standard) or 44px (notch devices)
- Custom status bar height available via props

### Android
- Automatically uses system status bar height
- Respects translucent status bar
- Properly handles different Android versions

### Skip Options
```tsx
// Get full status bar height on both platforms
<StyledHeader skipAndroid={false} skipIos={false} />

// Skip Android, include iOS
<StyledHeader skipAndroid={true} skipIos={false} />

// Skip iOS (default), include Android
<StyledHeader skipAndroid={false} skipIos={true} />

// Skip both (manual control)
<StyledHeader skipAndroid={true} skipIos={true} />
```

---

## 🔧 Responsive Design

### Flexible Sizing
```tsx
// Dynamic spacing based on device
const padding = isMobile ? 8 : 16

<StyledHeader
  paddingHorizontal={padding}
  paddingVertical={padding}
/>
```

### Responsive Gap
```tsx
// Auto spacing between elements
<StyledHeader gap={isLarge ? 16 : 8}>
  <StyledHeader.Header title="My App" />
</StyledHeader>
```

### Dynamic Margins
```tsx
// Responsive margins based on content
<StyledHeader
  marginTop={safeAreaInsets.top}
  marginBottom={16}
/>
```

---

## 🎨 Theme Integration

Use theme values for consistent styling:

```tsx
import { theme } from '@fluent-styles'

<StyledHeader
  paddingHorizontal={theme.space[4]}
  paddingVertical={theme.space[3]}
>
  <StyledHeader.Header
    title="My App"
    fontSize={theme.fontSize.large}
    fontWeight={theme.fontWeight.bold}
    color={theme.colors.gray[800]}
  />
</StyledHeader>
```

---

## ✅ Validation

### Valid Examples
```tsx
<StyledHeader marginTop={0} />                        // ✅ Number
<StyledHeader paddingHorizontal={16} />              // ✅ Any number
<StyledHeader gap={8} />                             // ✅ Any number
<StyledHeader skipAndroid={false} />                 // ✅ Boolean
<StyledHeader justifyContent="center" />             // ✅ Valid alignment
```

### Invalid Examples (Throw Errors)
```tsx
<StyledHeader marginTop={NaN} />                // ❌ NaN
<StyledHeader paddingHorizontal="16" as any /> // ❌ String instead of number
<StyledHeader justifyContent="invalid" />      // ❌ Invalid alignment
```

---

## 📊 Migration Comparison

| Feature | JavaScript | TypeScript |
|---------|-----------|-----------|
| Type Safety | No | ✅ Full |
| IDE Autocomplete | Limited | ✅ Complete |
| Runtime Validation | Manual | ✅ Automatic |
| Platform Support | Basic | ✅ Advanced |
| Flexible Variants | Yes | ✅ Enhanced |
| Documentation | Minimal | ✅ Comprehensive |
| Icon Support | Yes | ✅ Yes |
| StatusBar Control | Yes | ✅ Yes |
| iOS Notch Handling | Yes | ✅ Yes |

---

## 🔄 Migration Path

### From JavaScript
```jsx
// Old JavaScript
import { StyledHeader } from '@fluent-styles'

<StyledHeader statusProps={{ barStyle: 'dark-content' }}>
  <StyledHeader.Header 
    title="My App"
    fontWeight="bold"
    fontSize={18}
  />
</StyledHeader>
```

### To TypeScript
```tsx
// New TypeScript - mostly identical, better types
import { StyledHeader, theme } from '@fluent-styles'

<StyledHeader statusProps={{ barStyle: 'dark-content' }}>
  <StyledHeader.Header 
    title="My App"
    fontWeight={theme.fontWeight.bold}
    fontSize={theme.fontSize.normal}
  />
</StyledHeader>
```

**Only differences:**
- Use theme values instead of hardcoded values
- Better IDE support and type checking
- Enhanced validation with clear error messages

---

## 📋 Implementation Details

### Validation Functions
```tsx
// All values are validated at runtime
isValidNumber(value)  // Check if number and not NaN
isValidString(value)  // Check if string
isValidColor(value)   // Check if hex or theme reference
```

### Platform Detection
- Detects iPhone X, 12, and other notch devices
- Automatically calculates safe area insets
- Handles Android status bar height

### Default Values
```tsx
marginTop: 0
marginBottom: 0
paddingHorizontal: 8
paddingVertical: 8
gap: 0
statusHeight: auto (platform-specific)
skipAndroid: false
skipIos: true
```

---

## 🎬 Complete Example

```tsx
import React, { useState } from 'react'
import { StyledHeader, StyledText, theme } from '@fluent-styles'
import { YStack } from '@fluent-styles/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

export function SettingsScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <YStack flex>
      {/* Header with Status Bar */}
      <StyledHeader
        statusProps={{ barStyle: 'dark-content' }}
        paddingHorizontal={16}
        paddingVertical={12}
        gap={8}
        skipAndroid={false}
        skipIos={false}
      >
        <StyledHeader.Header
          title={isEditing ? 'Edit Settings' : 'Settings'}
          fontSize={theme.fontSize.large}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.gray[900]}
          icon={true}
          onPress={() => navigation.goBack()}
          rightIcon={
            isEditing ? (
              <Icon
                name="check"
                size={24}
                color={theme.colors.blue[500]}
                onPress={() => setIsEditing(false)}
              />
            ) : (
              <Icon
                name="edit"
                size={24}
                color={theme.colors.gray[600]}
                onPress={() => setIsEditing(true)}
              />
            )
          }
        />
      </StyledHeader>

      {/* Screen Content */}
      <YStack flex padding={16} gap={16}>
        <StyledText
          fontSize={theme.fontSize.medium}
          fontWeight={theme.fontWeight.medium}
        >
          General Settings
        </StyledText>
        {/* More content... */}
      </YStack>
    </YStack>
  )
}
```

---

## ✨ Summary

The Header component is now:
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Platform-Ready**: Android and iOS optimized
- ✅ **Flexible**: Accepts any valid value
- ✅ **Validated**: Runtime safety checks
- ✅ **Documented**: Comprehensive examples
- ✅ **Production-Ready**: Zero errors, tested

Use it with confidence in your React Native applications!

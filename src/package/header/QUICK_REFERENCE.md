# Header Component - Quick Reference

## Import
```tsx
import { StyledHeader, theme } from '@fluent-styles'
```

## Basic Usage
```tsx
<StyledHeader>
  <StyledHeader.Header title="My App" />
</StyledHeader>
```

## With Back Icon
```tsx
<StyledHeader>
  <StyledHeader.Header
    title="Settings"
    icon={true}
    onPress={() => navigation.goBack()}
  />
</StyledHeader>
```

## Complete Example
```tsx
<StyledHeader
  statusProps={{ barStyle: 'dark-content' }}
  paddingHorizontal={16}
  paddingVertical={12}
  skipAndroid={false}
  skipIos={false}
>
  <StyledHeader.Header
    title="My App"
    fontSize={theme.fontSize.large}
    fontWeight={theme.fontWeight.bold}
    color={theme.colors.gray[900]}
    icon={true}
    onPress={handleBack}
    rightIcon={<Icon name="menu" size={24} />}
  />
</StyledHeader>
```

## Props Reference

### StyledHeader Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `statusProps` | StatusBarProps | - | StatusBar configuration |
| `skipAndroid` | boolean | false | Skip Android status bar height |
| `skipIos` | boolean | true | Skip iOS status bar height |
| `marginTop` | number | 0 | Top margin |
| `marginBottom` | number | 0 | Bottom margin |
| `paddingHorizontal` | number | 8 | Horizontal padding |
| `paddingVertical` | number | 8 | Vertical padding |
| `gap` | number | 0 | Gap between elements |

### Header Props (StyledHeader.Header)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Header title text |
| `icon` | boolean | false | Show back icon |
| `onPress` | function | - | Back icon callback |
| `fontSize` | number | theme.fontSize.normal | Title font size |
| `fontWeight` | string | theme.fontWeight.normal | Title font weight |
| `color` | string | theme.colors.gray[800] | Title color |
| `rightIcon` | ReactNode | - | Right-side icon/element |
| `iconProps` | any | - | Back icon props |
| `rightIconProps` | any | - | Right icon props |
| `textProps` | any | - | Title text props |
| `cycleProps` | any | - | Cycle wrapper props |

## Platform-Specific Usage

### iOS with Notch
```tsx
// Automatically handles iPhone notch
<StyledHeader skipIos={false}>
  <StyledHeader.Header title="My App" />
</StyledHeader>
```

### Android Status Bar
```tsx
// Includes Android status bar height
<StyledHeader skipAndroid={false}>
  <StyledHeader.Header title="My App" />
</StyledHeader>
```

### Both Platforms
```tsx
// Full status bar height on both platforms
<StyledHeader skipAndroid={false} skipIos={false}>
  <StyledHeader.Header title="My App" />
</StyledHeader>
```

## Common Patterns

### Pattern 1: Simple Header
```tsx
<StyledHeader>
  <StyledHeader.Header title="Home" />
</StyledHeader>
```

### Pattern 2: Header with Back Button
```tsx
<StyledHeader>
  <StyledHeader.Header
    title="Details"
    icon={true}
    onPress={() => navigation.goBack()}
  />
</StyledHeader>
```

### Pattern 3: Header with Options Menu
```tsx
<StyledHeader>
  <StyledHeader.Header
    title="Settings"
    icon={true}
    onPress={() => navigation.goBack()}
    rightIcon={<Icon name="more-vert" size={24} />}
  />
</StyledHeader>
```

### Pattern 4: Header with Custom Styling
```tsx
<StyledHeader paddingHorizontal={20} paddingVertical={16}>
  <StyledHeader.Header
    title="Styled Header"
    fontSize={theme.fontSize.large}
    fontWeight={theme.fontWeight.bold}
    color={theme.colors.blue[500]}
  />
</StyledHeader>
```

### Pattern 5: Header with Dynamic Content
```tsx
const [title, setTitle] = useState('Loading...')

<StyledHeader>
  <StyledHeader.Header
    title={title}
    icon={true}
    onPress={() => navigation.goBack()}
    fontSize={title.length > 20 ? theme.fontSize.medium : theme.fontSize.large}
  />
</StyledHeader>
```

## Theme Values

### Font Sizes
```tsx
theme.fontSize.micro     // 12px
theme.fontSize.small     // 14px
theme.fontSize.medium    // 16px
theme.fontSize.normal    // 18px
theme.fontSize.large     // 20px
theme.fontSize.xlarge    // 22px
theme.fontSize.xxlarge   // 26px
```

### Font Weights
```tsx
theme.fontWeight.light       // 300
theme.fontWeight.normal      // 400
theme.fontWeight.medium      // 500
theme.fontWeight.semiBold    // 600
theme.fontWeight.bold        // 700
```

### Colors
```tsx
theme.colors.gray[50]        // Lightest
theme.colors.gray[500]       // Medium
theme.colors.gray[900]       // Darkest
theme.colors.blue[500]       // Primary color
theme.colors.red[500]        // Error color
```

### Spacing
```tsx
theme.space[0]   // 0
theme.space[1]   // 1
theme.space[2]   // 2
theme.space[4]   // 4
theme.space[8]   // 8
theme.space[16]  // 16
```

## Validation

### Valid Examples ✅
```tsx
<StyledHeader marginTop={0} />
<StyledHeader paddingHorizontal={16} />
<StyledHeader skipAndroid={false} />
<StyledHeader.Header fontSize={18} />
<StyledHeader.Header fontWeight={theme.fontWeight.bold} />
<StyledHeader.Header color={theme.colors.blue[500]} />
```

### Invalid Examples ❌
```tsx
<StyledHeader marginTop={NaN} />                    // NaN
<StyledHeader paddingHorizontal="16" as any />     // String
<StyledHeader.Header fontSize={3.5} />             // Fractional px
```

## Troubleshooting

### Header Overlapping Content
**Solution:** Add padding/margin to screen content
```tsx
<YStack paddingTop={60}>{/* content */}</YStack>
```

### Icon Not Showing
**Solution:** Check icon library is installed
```bash
npm install react-native-vector-icons
```

### Status Bar Color Not Applying
**Solution:** Use `statusProps`
```tsx
<StyledHeader
  statusProps={{
    barStyle: 'light-content',
    backgroundColor: theme.colors.blue[500],
  }}
>
```

## Advanced Usage

### Custom Header Layout
```tsx
<StyledHeader>
  <StyledHeader.Full>
    <YStack flex padding={16}>
      <StyledText fontSize={theme.fontSize.large}>Custom</StyledText>
    </YStack>
  </StyledHeader.Full>
</StyledHeader>
```

### Responsive Header
```tsx
const padding = isSmallScreen ? 8 : 16

<StyledHeader paddingHorizontal={padding} paddingVertical={padding}>
  <StyledHeader.Header
    title={title}
    fontSize={isSmallScreen ? theme.fontSize.medium : theme.fontSize.large}
  />
</StyledHeader>
```

### Conditional Elements
```tsx
<StyledHeader>
  <StyledHeader.Header
    title="My App"
    icon={canGoBack}
    onPress={handleBack}
    rightIcon={showMenu && <Icon name="menu" size={24} />}
  />
</StyledHeader>
```

## Type Definitions

```tsx
interface StyledHeaderProps {
  children?: React.ReactNode
  statusProps?: StatusBarProps
  skipAndroid?: boolean
  skipIos?: boolean
  marginTop?: number
  marginBottom?: number
  paddingHorizontal?: number
  paddingVertical?: number
  gap?: number
}

interface HeaderProps {
  title?: string
  icon?: boolean
  onPress?: () => void
  fontSize?: number
  fontWeight?: string
  color?: string
  rightIcon?: React.ReactNode
  [key: string]: any
}
```

## API Compatibility

- ✅ React Native 0.60+
- ✅ iOS 11+
- ✅ Android 5.0+
- ✅ Expo SDK 40+

## Full Documentation

See [MIGRATION_COMPLETE.md](./MIGRATION_COMPLETE.md) for comprehensive documentation.

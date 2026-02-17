# Cycle Component - Quick Reference

## Import

```tsx
import { StyledCycle } from '../package/cycle'
import type { SizeVariant, CycleVariants, StyledCycleProps } from '../package/cycle'
```

## Basic Usage

```tsx
// Default cycle (48px)
<StyledCycle>
  <Icon name="star" />
</StyledCycle>

// With size variant
<StyledCycle size="lg">
  <Avatar uri={image} />
</StyledCycle>

// With custom styling
<StyledCycle 
  size="md"
  backgroundColor={theme.colors.blue[100]}
  borderColor={theme.colors.blue[500]}
>
  <Text>✓</Text>
</StyledCycle>
```

## Size Variants Reference

| Size | Dimension | Common Uses |
|------|-----------|-------------|
| `sm` | 32×32px | Small icons, badges, counters |
| `md` | 48×48px | Default avatars, icons |
| `lg` | 64×64px | Large avatars, featured items |
| `xl` | 80×80px | Hero sections, emphasis |

## Component Props

### Base Props (from ViewProps & ViewStyle)

```tsx
interface StyledCycleProps {
  // Size variant
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Colors
  backgroundColor?: string;
  borderColor?: string;
  
  // Border
  borderWidth?: number;
  borderRadius?: number; // Usually 50 for circle
  
  // Spacing
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  padding?: number;
  
  // Layout
  opacity?: number;
  
  // Children
  children?: React.ReactNode;
  
  // Ref
  ref?: React.Ref<View>;
}
```

## Common Patterns

### Pattern 1: User Avatar
```tsx
<StyledCycle size="md">
  <Image 
    source={{ uri: userPhoto }}
    style={{ width: 48, height: 48, borderRadius: 24 }}
  />
</StyledCycle>
```

### Pattern 2: Status Badge
```tsx
<StyledCycle 
  size="sm"
  backgroundColor={theme.colors.success[100]}
  borderColor={theme.colors.success[500]}
>
  <Text color={theme.colors.success[500]} fontSize={12}>✓</Text>
</StyledCycle>
```

### Pattern 3: Icon Container
```tsx
<StyledCycle 
  size="lg"
  backgroundColor={theme.colors.primary[100]}
  borderColor={theme.colors.primary[500]}
>
  <Icon name="star" color={theme.colors.primary[500]} size={32} />
</StyledCycle>
```

### Pattern 4: Notification Badge
```tsx
<YStack>
  <StyledCycle size="md">
    <Icon name="bell" size={24} />
  </StyledCycle>
  <StyledCycle 
    size="sm"
    backgroundColor={theme.colors.red[500]}
    style={{ position: 'absolute', top: -8, right: -8 }}
  >
    <Text color="white" fontSize={10} fontWeight="bold">3</Text>
  </StyledCycle>
</YStack>
```

### Pattern 5: Status Indicator
```tsx
<StyledCycle 
  size="md"
  backgroundColor={isOnline ? theme.colors.green[500] : theme.colors.gray[300]}
  borderColor={isOnline ? theme.colors.green[600] : theme.colors.gray[400]}
>
  {isOnline && <Icon name="check" color="white" size={20} />}
</StyledCycle>
```

## TypeScript Support

### Type-Safe Props
```tsx
const cycle: StyledCycleProps = {
  size: 'md', // Only 'sm', 'md', 'lg', 'xl' allowed
  backgroundColor: theme.colors.blue[100],
  children: <Icon name="star" />,
};

<StyledCycle {...cycle} />
```

### Type Checking
```tsx
// ✅ Valid - TypeScript will autocomplete
<StyledCycle size="lg">

// ❌ Invalid - TypeScript error
<StyledCycle size="xl2"> // Error: "xl2" is not assignable to type 'SizeVariant'
```

### Exported Types
```tsx
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
export type CycleVariants = { size?: SizeVariant };
export type CycleComponentProps = CycleVariants & ViewProps & ViewStyle;
interface StyledCycleProps extends CycleComponentProps {
  children?: React.ReactNode;
}
```

## Styling Examples

### Blue Circle
```tsx
<StyledCycle 
  size="md"
  backgroundColor={theme.colors.blue[100]}
  borderColor={theme.colors.blue[500]}
  borderWidth={1}
>
  <Icon name="info" color={theme.colors.blue[500]} />
</StyledCycle>
```

### Success Circle
```tsx
<StyledCycle 
  size="md"
  backgroundColor={theme.colors.success[100]}
  borderColor={theme.colors.success[500]}
>
  <Text color={theme.colors.success[500]}>✓</Text>
</StyledCycle>
```

### Warning Circle
```tsx
<StyledCycle 
  size="md"
  backgroundColor={theme.colors.warning[100]}
  borderColor={theme.colors.warning[500]}
>
  <Icon name="alert" color={theme.colors.warning[500]} />
</StyledCycle>
```

### Error Circle
```tsx
<StyledCycle 
  size="md"
  backgroundColor={theme.colors.error[100]}
  borderColor={theme.colors.error[500]}
>
  <Icon name="close" color={theme.colors.error[500]} />
</StyledCycle>
```

### No Border Circle
```tsx
<StyledCycle 
  size="lg"
  backgroundColor={theme.colors.primary[500]}
  borderWidth={0}
>
  <Icon name="star" color="white" size={32} />
</StyledCycle>
```

## Size Selection Guide

### Choose `sm` (32px) when:
- Displaying small icons in a list
- Badge counters
- Small status indicators
- Notification dots

### Choose `md` (48px) when:
- Standard user avatars
- Default icon containers
- Small profile pictures
- Most UI elements

### Choose `lg` (64px) when:
- Large user avatars
- Featured items
- Hero icons
- Group avatars

### Choose `xl` (80px) when:
- Hero sections
- Emphasis elements
- Large profile pictures
- App logos

## Responsive Usage

### Conditional Size
```tsx
const isMobile = Dimensions.get('window').width < 600;

<StyledCycle size={isMobile ? 'md' : 'lg'}>
  <Avatar uri={photo} />
</StyledCycle>
```

### Responsive Grid
```tsx
<XStack flexWrap="wrap" gap={12}>
  {items.map(item => (
    <StyledCycle key={item.id} size="md">
      <Image source={item.icon} />
    </StyledCycle>
  ))}
</XStack>
```

## Best Practices Checklist

- [ ] Use size variants instead of manual width/height
- [ ] Use theme colors for styling
- [ ] Ensure content size matches circle size
- [ ] Keep content centered (automatic with base styles)
- [ ] Use forwardRef when you need DOM access
- [ ] Export types for component props
- [ ] Use TypeScript for type safety

## Troubleshooting

### Circle Not Circular?
- Ensure `borderRadius` is 50 (default handles this)
- Width and height must be equal (size variants handle this)

### Content Not Centered?
- Base styles include `justifyContent: 'center'` and `alignItems: 'center'`
- This should work automatically

### Custom Size Needed?
```tsx
// Use component props to override
<StyledCycle 
  width={56}
  height={56}
  size="md" // This will be overridden by width/height
>
  Content
</StyledCycle>
```

### Type Errors?
```tsx
// Make sure to import types
import type { SizeVariant } from '../package/cycle'

// Then use in type annotations
const size: SizeVariant = 'md';
```

## Performance Notes

- Component is lightweight and optimized
- Size variants use static style definitions
- No unnecessary re-renders with memoization
- ForwardRef enables parent control when needed

---

**Quick Links:**
- [Full Migration Guide](./MIGRATION.md)
- [Component Summary](./SUMMARY.md)
- [Theme Colors Reference](../theme.js)

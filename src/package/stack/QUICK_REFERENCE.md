# Stack Components - Quick Reference

## Import

```tsx
import { Stack, XStack, YStack } from '../tspackage/stack';
```

## Three Stack Components

| Component | Default | Best For |
|-----------|---------|----------|
| `Stack` | No flex direction | Generic layout with variants |
| `XStack` | flexDirection: 'row' | Horizontal layouts |
| `YStack` | flexDirection: 'column' | Vertical layouts |

## Basic Usage

### Stack (Flexible)
```tsx
<Stack horizontal={true}>
  <Text>Left</Text>
  <Text>Right</Text>
</Stack>

<Stack vertical={true}>
  <Text>Top</Text>
  <Text>Bottom</Text>
</Stack>
```

### XStack (Horizontal)
```tsx
<XStack>
  <Text>Left</Text>
  <Text>Right</Text>
</XStack>

<XStack gap={10}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</XStack>
```

### YStack (Vertical)
```tsx
<YStack>
  <Text>Top</Text>
  <Text>Bottom</Text>
</YStack>

<YStack gap={15}>
  <Header />
  <Content />
  <Footer />
</YStack>
```

## Variants

### Stack Variants
| Variant | Effect | Usage |
|---------|--------|-------|
| `horizontal` | Sets flexDirection: 'row' | `horizontal={true}` |
| `vertical` | Sets flexDirection: 'column' | `vertical={true}` |

### XStack Variants
No variants (horizontal is default)

### YStack Variants
No variants (vertical is default)

## Customization Levels

### Level 1: Variant-Only (Boolean)
```tsx
<XStack gap={10}>
  <Text>Item</Text>
</XStack>
```

### Level 2: Component Props
```tsx
<XStack 
  gap={10}
  padding={15}
  alignItems="center"
>
  <Text>Item</Text>
</XStack>
```

### Level 3: Combined
```tsx
<YStack 
  vertical={true}
  justifyContent="flex-end"
  gap={12}
  padding={20}
>
  <Text>Item</Text>
</YStack>
```

## Common Properties

### Spacing
```tsx
<XStack 
  gap={10}           // Space between children
  padding={15}       // Space around children
  paddingHorizontal={20}
  paddingVertical={10}
  margin={5}
  marginHorizontal={10}
/>
```

### Sizing
```tsx
<YStack 
  width="100%"
  height={300}
  flex={1}           // Fill available space
/>
```

### Flex Properties
```tsx
<XStack>
  <View flex={1}>Item 1</View>
  <View flex={2}>Item 2 (double size)</View>
</XStack>
```

### Alignment
```tsx
<XStack 
  alignItems="center"        // Vertical alignment
  justifyContent="space-between"  // Horizontal spacing
/>

<YStack 
  alignItems="flex-start"    // Horizontal alignment
  justifyContent="center"    // Vertical alignment
/>
```

### Styling
```tsx
<Stack 
  backgroundColor="#fff"
  borderRadius={8}
  borderWidth={1}
  borderColor="#eee"
  shadowColor="#000"
  shadowOpacity={0.1}
  shadowRadius={4}
/>
```

## Real-World Examples

### Header
```tsx
<XStack 
  gap={10}
  alignItems="center"
  padding={15}
  backgroundColor="#fff"
  borderBottomWidth={1}
  borderBottomColor="#eee"
>
  <Text flex={1} fontSize={18} fontWeight="bold">Title</Text>
  <TouchableOpacity><Icon name="menu" /></TouchableOpacity>
</XStack>
```

### Card
```tsx
<YStack 
  gap={12}
  padding={16}
  backgroundColor="#fff"
  borderRadius={8}
  borderWidth={1}
  borderColor="#eee"
>
  <Text fontWeight="bold">Title</Text>
  <Text color="#666">Description</Text>
</YStack>
```

### Form
```tsx
<YStack gap={16} padding={20}>
  <TextInput placeholder="Email" />
  <TextInput placeholder="Password" />
  <Button>Login</Button>
</YStack>
```

### Button Group
```tsx
<XStack gap={10}>
  <Button flex={1}>Cancel</Button>
  <Button flex={1}>OK</Button>
</XStack>
```

### List Item
```tsx
<XStack 
  gap={12}
  alignItems="center"
  padding={12}
  borderBottomWidth={1}
  borderBottomColor="#f0f0f0"
>
  <Image width={40} height={40} />
  <YStack flex={1}>
    <Text fontWeight="600">Name</Text>
    <Text color="#999">Subtitle</Text>
  </YStack>
</XStack>
```

### Centered Content
```tsx
<Stack 
  center={true}
  flex={1}
>
  <Spinner />
  <Text>Loading...</Text>
</Stack>
```

## Style Properties

All React Native ViewStyle properties work:

```tsx
<XStack 
  // Dimensions
  width={100}
  height={100}
  
  // Layout
  flex={1}
  flexWrap="wrap"
  
  // Spacing
  gap={10}
  padding={15}
  margin={10}
  
  // Alignment (XStack context)
  alignItems="center"        // Vertical
  justifyContent="center"    // Horizontal
  
  // Styling
  backgroundColor="#fff"
  borderRadius={8}
  opacity={0.9}
  
  // Shadow
  shadowColor="#000"
  shadowOpacity={0.1}
/>
```

## Type Definitions

```tsx
// Variant types
type StackVariants = {
  horizontal?: boolean | [boolean, ViewStyle];
  vertical?: boolean | [boolean, ViewStyle];
  center?: boolean | [boolean, ViewStyle];
};

// Component props
type StackComponentProps = StackVariants & ViewProps & ViewStyle;

// Interface for wrapper
interface StyledStackProps extends StackComponentProps {
  children?: React.ReactNode;
}
```

## TypeScript Support

Full type safety with IntelliSense:

```tsx
// ✅ Correct
<XStack gap={10} padding={15} />

// ❌ Error - unknown property
<XStack invalidProp="test" />

// ❌ Error - wrong type
<XStack gap="10px" />

// ✅ Correct - array tuple
<XStack center={[true, { justifyContent: 'flex-start' }]} />
```

## Performance Tips

1. Use `flex={1}` instead of width/height for responsive layouts
2. Use `gap` instead of manually adding margins
3. Use appropriate `alignItems` and `justifyContent` to avoid nested containers
4. Keep nesting depth reasonable (max 5-6 levels)

## Best Practices

✅ **Do:**
- Use XStack for horizontal, YStack for vertical
- Use Stack when you need both orientations
- Use center={true} for quick centering
- Combine with other components for complex layouts
- Use gap for spacing between children

❌ **Don't:**
- Nest unnecessary stacks
- Use both horizontal and vertical on same Stack
- Manually calculate spacing when gap exists
- Forget to set flex={1} for flex items
- Mix fixed widths with flex={1}

---

**File Location**: `/tspackage/stack/index.tsx`
**Components**: Stack, XStack, YStack
**Types**: StackVariants, StackComponentProps

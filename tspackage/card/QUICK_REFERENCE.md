# Card Component - Quick Reference

## Import

```tsx
import { StyledCard } from '../tspackage/card';
```

## Basic Usage

```tsx
// Simple card
<StyledCard>
  <Text>Card Content</Text>
</StyledCard>

// Card with shadow
<StyledCard shadow="medium">
  <Text>Shadowed Card</Text>
</StyledCard>

// Card with styling
<StyledCard 
  shadow="medium"
  padding={16}
  marginHorizontal={12}
>
  <Text>Styled Card</Text>
</StyledCard>

// Interactive card
<StyledCard 
  shadow="medium"
  pressable={true}
  pressableProps={{ onPress: handlePress }}
>
  <Text>Tap me!</Text>
</StyledCard>
```

## Shadow Levels

| Level | Usage |
|-------|-------|
| `light` | Subtle cards, lists |
| `lightMedium` | Standard cards |
| `medium` | Default, most cards |
| `mediumDark` | Featured content |
| `dark` | Important items |
| `veryDark` | Modal emphasis |

## Props

### Base Props (from ViewProps & ViewStyle)

```tsx
// Dimensions
width?: number | string
height?: number | string
flex?: number

// Spacing
padding?: number
margin?: number
paddingHorizontal?: number
paddingVertical?: number
marginHorizontal?: number
marginVertical?: number

// Layout
flexDirection?: 'row' | 'column'
alignItems?: string
justifyContent?: string

// Styling
backgroundColor?: string
borderRadius?: number
opacity?: number
overflow?: 'hidden' | 'visible'

// Shadow & Elevation
shadow?: 'light' | 'lightMedium' | 'medium' | 'mediumDark' | 'dark' | 'veryDark'
```

### Card-Specific Props

```tsx
// Optional pressable support
pressable?: boolean
pressableProps?: PressableProps

// Children
children?: React.ReactNode
```

## Common Patterns

### Product Card
```tsx
<StyledCard shadow="medium" marginHorizontal={12} overflow="hidden">
  <Image source={image} style={{ width: '100%', height: 200 }} />
  <YStack padding={12} gap={8}>
    <Text fontWeight="bold">Product Name</Text>
    <Text color="#666">$99.99</Text>
    <Button>Add to Cart</Button>
  </YStack>
</StyledCard>
```

### User Profile Card
```tsx
<StyledCard 
  shadow="lightMedium"
  alignItems="center"
  padding={16}
  gap={12}
>
  <Image source={avatar} width={80} height={80} cycle={true} />
  <Text fontWeight="bold">John Doe</Text>
  <Button>Follow</Button>
</StyledCard>
```

### List Item Card
```tsx
<StyledCard 
  shadow="light"
  flexDirection="row"
  alignItems="center"
  padding={12}
  gap={12}
>
  <Image source={icon} width={40} height={40} />
  <YStack flex={1}>
    <Text fontWeight="600">Title</Text>
    <Text color="#999" fontSize={12}>Subtitle</Text>
  </YStack>
</StyledCard>
```

### Header Card
```tsx
<StyledCard shadow="medium" overflow="hidden">
  <YStack 
    padding={12}
    backgroundColor="#f5f5f5"
    borderBottomWidth={1}
    borderBottomColor="#eee"
  >
    <Text fontWeight="bold">Header</Text>
  </YStack>
  <YStack padding={12}>
    <Text>Content</Text>
  </YStack>
</StyledCard>
```

### Card Grid
```tsx
<XStack flexWrap="wrap" gap={12} padding={12}>
  {items.map(item => (
    <StyledCard 
      key={item.id}
      shadow="medium"
      width="48%"
      padding={12}
    >
      <Text>{item.name}</Text>
    </StyledCard>
  ))}
</XStack>
```

## Type Definitions

```tsx
type ShadowLevel = 'light' | 'lightMedium' | 'medium' | 'mediumDark' | 'dark' | 'veryDark';

type CardVariants = {
  shadow?: ShadowLevel;
};

type CardComponentProps = CardVariants & ViewProps & ViewStyle;

interface StyledCardProps extends CardComponentProps {
  children?: React.ReactNode;
  pressable?: boolean;
  pressableProps?: Omit<PressableProps, 'children'>;
}
```

## TypeScript Support

Full type safety with IntelliSense:

```tsx
// ✅ Correct
<StyledCard shadow="medium" padding={16} />

// ❌ Error - invalid shadow level
<StyledCard shadow="invalid" />

// ❌ Error - invalid prop
<StyledCard invalidProp="test" />

// ✅ Correct - interactive
<StyledCard 
  pressable={true}
  pressableProps={{ onPress: handlePress }}
/>
```

## Best Practices

✅ **Do:**
- Use `shadow="medium"` for most cards
- Combine with YStack/XStack for layout
- Use `pressable` for interactive cards
- Add `overflow="hidden"` when needed
- Use responsive widths (flex, percentage)

❌ **Don't:**
- Use hardcoded pixel widths (use flex instead)
- Forget `overflow="hidden"` with images
- Use veryDark for subtle cards
- Nest cards deeply

## Shadow Platform Support

Shadows automatically adapt:
- **iOS**: Native shadow properties
- **Android**: Elevation system

No additional configuration needed!

---

**File Location**: `/tspackage/card/index.tsx`
**Components**: StyledCard, CardBase
**Types**: CardVariants, ShadowLevel

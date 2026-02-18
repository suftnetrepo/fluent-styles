# Text Component - Quick Reference

## Import

```tsx
import { StyledText } from '../text'
import type { StyledTextProps, FontWeightVariant, TextAlignVariant } from '../text'
```

## Basic Usage

```tsx
// Simple text
<StyledText>Hello World</StyledText>

// With color (using theme)
<StyledText color={theme.colors.blue[500]}>Blue Text</StyledText>

// With font weight (using theme)
<StyledText fontWeight={theme.fontWeight.bold}>Bold Text</StyledText>

// With size (using theme)
<StyledText fontSize={theme.fontSize.large}>Large Text</StyledText>

// With multiple properties (using theme)
<StyledText 
  fontSize={theme.fontSize.medium}
  fontWeight={theme.fontWeight.bold}
  color={theme.colors.gray[800]}
  textAlign="center"
>
  Styled Text
</StyledText>
```

## Font Sizes (From theme.fontSize)

| Theme Value | Pixels | Common Use |
|------------|--------|-----------|
| `theme.fontSize.micro` | 12 | Captions, labels |
| `theme.fontSize.small` | 14 | Secondary text |
| `theme.fontSize.medium` | 16 | Standard body |
| `theme.fontSize.normal` | 18 | Default body |
| `theme.fontSize.large` | 20 | Subheadings |
| `theme.fontSize.xlarge` | 22 | Large emphasis |
| `theme.fontSize.xxlarge` | 26 | Titles |
| `theme.fontSize.xxxlarge` | 30 | Extra large |
| `theme.fontSize.splash` | 40 | Splash screen |

## Font Weights (From theme.fontWeight)

| Theme Value | Value | Use Case |
|------------|-------|----------|
| `theme.fontWeight.light` | 300 | De-emphasized |
| `theme.fontWeight.normal` | 400 | Default |
| `theme.fontWeight.medium` | 500 | Slightly bold |
| `theme.fontWeight.semiBold` | 600 | Strong emphasis |
| `theme.fontWeight.bold` | 700 | Headers |
| `theme.fontWeight.extraBold` | 800 | Very strong |
| `theme.fontWeight.black` | 900 | Maximum weight |

## Text Alignment

```tsx
<StyledText textAlign="left">Left aligned (default)</StyledText>
<StyledText textAlign="center">Center aligned</StyledText>
<StyledText textAlign="right">Right aligned</StyledText>
<StyledText textAlign="justify">Justified text</StyledText>
```

## Common Patterns (Using Theme)

### Pattern 1: Page Title
```tsx
<StyledText 
  fontSize={theme.fontSize.xxlarge}
  fontWeight={theme.fontWeight.bold}
  color={theme.colors.gray[900]}
>
  Page Title
</StyledText>
```

### Pattern 2: Subtitle
```tsx
<StyledText 
  fontSize={theme.fontSize.large}
  color={theme.colors.gray[600]}
>
  Subtitle text
</StyledText>
```

### Pattern 3: Body Text (Default)
```tsx
<StyledText 
  fontSize={theme.fontSize.medium}
  numberOfLines={3}
>
  Body text that wraps and truncates at 3 lines...
</StyledText>
```

### Pattern 4: Caption / Label
```tsx
<StyledText 
  fontSize={theme.fontSize.micro}
  fontWeight={theme.fontWeight.semiBold}
  color={theme.colors.gray[600]}
>
  LABEL TEXT
</StyledText>
```

### Pattern 5: Emphasis / Highlight
```tsx
<StyledText 
  fontSize={theme.fontSize.normal}
  fontWeight={theme.fontWeight.bold}
  color={theme.colors.blue[500]}
>
  Important Text
</StyledText>
```

## StyledText Props

```tsx
interface StyledTextProps {
  // Typography
  fontSize?: number;              // 12, 14, 16, 18, 20, 22, 26
  fontWeight?: FontWeightVariant; // 'light' | 'normal' | 'medium' | 'semiBold' | 'bold'
  color?: string;                 // hex or theme color
  fontFamily?: string;            // Custom font family
  
  // Layout
  numberOfLines?: number;         // 1, 2, 3, 4 for line clamping
  textAlign?: TextAlignVariant;   // 'auto' | 'left' | 'right' | 'center' | 'justify'
  
  // State
  selected?: boolean;             // Changes text color
  underline?: boolean;            // Adds underline decoration
  
  // Content
  children?: React.ReactNode;
  
  // Refs
  ref?: React.Ref<Text>;
}
```

## Quick Examples

### Text with Theme Color
```tsx
<StyledText color={theme.colors.primary[500]}>
  Primary color text
</StyledText>
```

### Truncated Text
```tsx
<StyledText numberOfLines={1}>
  This very long text will be truncated with ellipsis...
</StyledText>
```

### Selected State
```tsx
<StyledText selected={isSelected}>
  {isSelected ? '✓ Selected' : 'Not Selected'}
</StyledText>
```

### Underlined Text
```tsx
<StyledText underline={true} fontWeight={theme.fontWeight.bold}>
  Underlined Bold Text
</StyledText>
```

### Centered Text
```tsx
<StyledText textAlign="center" fontSize={theme.fontSize.large}>
  Centered Text
</StyledText>
```

### Custom Font
```tsx
<StyledText fontFamily="Poppins" fontSize={theme.fontSize.medium}>
  Text with custom font
</StyledText>
```

### Error Message
```tsx
<StyledText 
  fontSize={theme.fontSize.small}
  color={theme.colors.red[500]}
  fontWeight={theme.fontWeight.medium}
>
  Error message
</StyledText>
```

### Success Message
```tsx
<StyledText 
  fontSize={theme.fontSize.small}
  color={theme.colors.green[500]}
  fontWeight={theme.fontWeight.medium}
>
  Success message
</StyledText>
```

## TypeScript Support

### Type-Safe Props
```tsx
const textProps: StyledTextProps = {
  fontSize: 16,
  fontWeight: 'bold',
  color: theme.colors.blue[500],
  children: 'Typed text',
};

<StyledText {...textProps} />
```

### Font Weight Type
```tsx
const weights: FontWeightVariant[] = ['light', 'normal', 'medium', 'semiBold', 'bold'];

weights.forEach(weight => (
  <StyledText fontWeight={weight} key={weight}>
    {weight} weight
  </StyledText>
))
```

### Text Align Type
```tsx
const alignments: TextAlignVariant[] = ['left', 'center', 'right', 'justify'];

alignments.forEach(align => (
  <StyledText textAlign={align} key={align}>
    {align} aligned
  </StyledText>
))
```

## Color Examples

### Theme Colors
```tsx
// Primary
<StyledText color={theme.colors.primary[500]}>Primary</StyledText>

// Grays
<StyledText color={theme.colors.gray[900]}>Dark</StyledText>
<StyledText color={theme.colors.gray[800]}>Default</StyledText>
<StyledText color={theme.colors.gray[600]}>Medium</StyledText>
<StyledText color={theme.colors.gray[50]}>Light</StyledText>

// Brand colors
<StyledText color={theme.colors.blue[500]}>Blue</StyledText>
<StyledText color={theme.colors.amber[500]}>Amber</StyledText>
<StyledText color={theme.colors.red[500]}>Red</StyledText>
```

## Size Examples

### Header Hierarchy
```tsx
// H1 - Page Title
<StyledText fontSize={theme.fontSize.xxlarge} fontWeight={theme.fontWeight.bold}>
  Page Title
</StyledText>

// H2 - Section Title
<StyledText fontSize={theme.fontSize.xlarge} fontWeight={theme.fontWeight.bold}>
  Section Title
</StyledText>

// H3 - Subsection
<StyledText fontSize={theme.fontSize.large} fontWeight={theme.fontWeight.semiBold}>
  Subsection
</StyledText>

// Body - Default
<StyledText fontSize={theme.fontSize.medium}>
  Body text
</StyledText>

// Small - Secondary
<StyledText fontSize={theme.fontSize.small} color={theme.colors.gray[600]}>
  Secondary text
</StyledText>

// Caption
<StyledText fontSize={theme.fontSize.micro} fontWeight={theme.fontWeight.light}>
  Caption or label
</StyledText>
```

## Common Issues & Solutions

### Text Too Small?
```tsx
// Increase fontSize
<StyledText fontSize={theme.fontSize.normal}>Text</StyledText>  // ✅ Larger
```

### Text Not Bold Enough?
```tsx
// Increase fontWeight
<StyledText fontWeight={theme.fontWeight.bold}>Text</StyledText>  // ✅ Bolder
```

### Text Not Aligned?
```tsx
// Make sure parent is wide enough
<YStack width="100%">
  <StyledText textAlign="center">Centered</StyledText>
</YStack>
```

### Text Overflowing?
```tsx
// Use numberOfLines to truncate
<StyledText numberOfLines={2}>Long text...</StyledText>  // ✅ Truncated
```

### Color Not Visible?
```tsx
// Use sufficient contrast
<StyledText color={theme.colors.gray[900]}>Dark text</StyledText>  // ✅ Visible
```

## Accessibility

- ✅ Use sufficient color contrast
- ✅ Use appropriate font sizes for readability
- ✅ Provide context for colored text (don't rely on color alone)
- ✅ Use semantic font weights for hierarchy
- ✅ Test on different screen sizes

## Performance Notes

- Component is lightweight and optimized
- ForwardRef enables parent control when needed
- Predefined variants use static style definitions

## Troubleshooting

### Text not displaying?
- Check `children` prop is provided
- Verify component is inside a valid container

### Font family not working?
- Ensure font is installed in the project
- Check font name spelling

### Color not applying?
- Verify color format (hex or theme object)
- Check color has sufficient contrast

### Alignment not working?
- Ensure parent container has explicit width
- Check for competing style props

---

**Quick Links:**
- [Full Migration Guide](./MIGRATION.md)
- [Component Summary](./SUMMARY.md)
- [Theme Reference](../utils/theme.ts)

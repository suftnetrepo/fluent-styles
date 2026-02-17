# Text Component - Flexible Variant System

## Overview

The `StyledText` component implements a **flexible variant system** that accepts dynamic values with validation, rather than being restricted to preset options.

This approach provides maximum flexibility while maintaining type safety and validation at runtime.

## Flexible Variants

### 1. `fontSize` - Any Number

**Type:** `number`

Accepts any numeric value for font size in pixels. Includes runtime validation.

```tsx
// Theme.fontSize preset values (recommended)
<StyledText fontSize={theme.fontSize.micro}>Micro text (12px)</StyledText>
<StyledText fontSize={theme.fontSize.small}>Small text (14px)</StyledText>
<StyledText fontSize={theme.fontSize.medium}>Medium text (16px)</StyledText>
<StyledText fontSize={theme.fontSize.normal}>Normal text (18px, default)</StyledText>
<StyledText fontSize={theme.fontSize.large}>Large text (20px)</StyledText>
<StyledText fontSize={theme.fontSize.xlarge}>XLarge text (22px)</StyledText>
<StyledText fontSize={theme.fontSize.xxlarge}>XXLarge text (26px)</StyledText>

// Custom sizes (also valid)
<StyledText fontSize={32}>Custom size (32px)</StyledText>
<StyledText fontSize={11}>Very small (11px)</StyledText>
<StyledText fontSize={48}>Very large (48px)</StyledText>

// Dynamic sizes
const dynamicSize = isLarge ? theme.fontSize.large : theme.fontSize.small;
<StyledText fontSize={dynamicSize}>Dynamic text</StyledText>
```

**Theme Font Sizes Available:**
- `theme.fontSize.base` = 8
- `theme.fontSize.nano` = 10
- `theme.fontSize.micro` = 12
- `theme.fontSize.small` = 14
- `theme.fontSize.medium` = 16
- `theme.fontSize.normal` = 18 (default)
- `theme.fontSize.large` = 20
- `theme.fontSize.xlarge` = 22
- `theme.fontSize.xxlarge` = 26
- `theme.fontSize.xxxlarge` = 30
- `theme.fontSize.splash` = 40

**Validation:** Must be a valid number (no NaN). Throws error if invalid.

---

### 2. `fontWeight` - Any String

**Type:** `string`

Accepts any string value for font weight. Use theme.fontWeight for available preset weights.

```tsx
// Theme.fontWeight preset values (recommended)
<StyledText fontWeight={theme.fontWeight.light}>Light weight (300)</StyledText>
<StyledText fontWeight={theme.fontWeight.normal}>Normal weight (400)</StyledText>
<StyledText fontWeight={theme.fontWeight.medium}>Medium weight (500)</StyledText>
<StyledText fontWeight={theme.fontWeight.semiBold}>SemiBold weight (600)</StyledText>
<StyledText fontWeight={theme.fontWeight.bold}>Bold weight (700)</StyledText>
<StyledText fontWeight={theme.fontWeight.extraBold}>ExtraBold weight (800)</StyledText>
<StyledText fontWeight={theme.fontWeight.black}>Black weight (900)</StyledText>

// Other theme weights
<StyledText fontWeight={theme.fontWeight.thin}>Thin weight (100)</StyledText>
<StyledText fontWeight={theme.fontWeight.extraLight}>Extra Light weight (200)</StyledText>

// Custom values
<StyledText fontWeight="lighter">Lighter</StyledText>
<StyledText fontWeight="bolder">Bolder</StyledText>

// Dynamic weight
const weight = isBold ? theme.fontWeight.bold : theme.fontWeight.normal;
<StyledText fontWeight={weight}>Dynamic weight</StyledText>
```

**Theme Font Weights Available:**
- `theme.fontWeight.thin` = '100'
- `theme.fontWeight.extraLight` = '200'
- `theme.fontWeight.light` = '300'
- `theme.fontWeight.normal` = '400' (default)
- `theme.fontWeight.medium` = '500'
- `theme.fontWeight.semiBold` = '600'
- `theme.fontWeight.bold` = '700'
- `theme.fontWeight.extraBold` = '800'
- `theme.fontWeight.black` = '900'

**Validation:** Must be a valid string. Throws error if invalid.

---

### 3. `color` - Hex or Theme Color

**Type:** `string`

Accepts hex colors or theme color references. Supports any valid color format recognized by React Native.

```tsx
// Theme gray colors (recommended)
<StyledText color={theme.colors.gray[800]}>Dark gray text</StyledText>
<StyledText color={theme.colors.gray[600]}>Medium gray text</StyledText>
<StyledText color={theme.colors.gray[400]}>Light gray text</StyledText>
<StyledText color={theme.colors.gray[50]}>Very light gray text</StyledText>

// Theme brand colors
<StyledText color={theme.colors.blue[500]}>Blue text</StyledText>
<StyledText color={theme.colors.red[500]}>Red text</StyledText>
<StyledText color={theme.colors.green[500]}>Green text</StyledText>
<StyledText color={theme.colors.amber[500]}>Amber (primary) text</StyledText>

// Other theme color palettes
<StyledText color={theme.colors.indigo[600]}>Indigo text</StyledText>
<StyledText color={theme.colors.pink[500]}>Pink text</StyledText>
<StyledText color={theme.colors.teal[600]}>Teal text</StyledText>

// Hex colors
<StyledText color="#FF0000">Red hex</StyledText>
<StyledText color="#00FF00">Green hex</StyledText>
<StyledText color="#0000FF">Blue hex</StyledText>

// Dynamic colors
const color = isError ? theme.colors.red[500] : theme.colors.gray[800];
<StyledText color={color}>Dynamic color</StyledText>
```

**Theme Color Palettes:**
- Grays: `theme.colors.gray[50-900]`
- Status: `theme.colors.red`, `theme.colors.green`, `theme.colors.amber`, `theme.colors.orange`
- Primary: `theme.colors.amber[500]` (light mode) or `theme.colors.blue[400]` (dark mode)
- Full palettes: rose, pink, fuchsia, purple, violet, indigo, blue, cyan, teal, emerald, green, lime, yellow, orange, red, and more

---

### 4. `numberOfLines` - Any Number

**Type:** `number`

Accepts any numeric value for line clamping. Text beyond the specified number of lines will be truncated with ellipsis.

```tsx
// Single line (most common)
<StyledText numberOfLines={1}>Long text that will be cut off...</StyledText>

// Multiple lines with padding (using theme.space)
<StyledText numberOfLines={2} style={{ paddingHorizontal: theme.space[16] }}>
  Very long text that spans multiple lines
  and will be truncated at 2 lines...
</StyledText>

<StyledText numberOfLines={3} style={{ paddingHorizontal: theme.space[8] }}>
  Even longer text that can span
  up to 3 lines before being
  truncated with ellipsis...
</StyledText>

<StyledText numberOfLines={4}>
  Can also specify 4 or more lines
  for longer descriptions or
  multi-line content that needs
  to be clamped...
</StyledText>

// No line limit (undefined or omitted)
<StyledText>
  Text that can wrap to any number of lines
  without truncation or ellipsis...
</StyledText>

// Dynamic line clamping
const lines = isExpanded ? undefined : 2;
<StyledText numberOfLines={lines}>Dynamic clamping</StyledText>
```

**Theme Spacing Values (for padding/margin):**
- `theme.space['0']` = 0
- `theme.space['1']` = 1
- `theme.space['2']` = 2
- `theme.space['4']` = 4
- `theme.space['8']` = 8
- `theme.space['16']` = 16
- `theme.space['32']` = 32
- `theme.space['64']` = 64
- `theme.space['128']` = 128

**Validation:** Must be a valid number. Throws error if invalid.

---

### 5. `textAlign` - Valid Alignment

**Type:** `string`

Accepts valid text alignment values. Must be one of: `'auto'`, `'left'`, `'right'`, `'center'`, `'justify'`.

```tsx
// Standard alignments
<StyledText textAlign="auto">Auto alignment</StyledText>
<StyledText textAlign="left">Left aligned (default)</StyledText>
<StyledText textAlign="right">Right aligned</StyledText>
<StyledText textAlign="center">Center aligned</StyledText>
<StyledText textAlign="justify">Justified text</StyledText>

// Dynamic alignment
const align = isRTL ? 'right' : 'left';
<StyledText textAlign={align}>Dynamic alignment</StyledText>

// Common patterns
<StyledText textAlign="center" fontSize={20} fontWeight="700">
  Page Title
</StyledText>

<StyledText textAlign="right" fontSize={12} color={theme.colors.gray[600]}>
  Right-aligned caption
</StyledText>
```

**Validation:** Must be one of valid alignment values. Throws error if invalid.

---

### 6. `fontFamily` - Custom Font

**Type:** `string`

Accepts any custom font family name. No validation required - fonts must be installed separately.

```tsx
// Custom fonts (must be installed)
<StyledText fontFamily="Roboto">Roboto font</StyledText>
<StyledText fontFamily="Poppins">Poppins font</StyledText>
<StyledText fontFamily="Open Sans">Open Sans font</StyledText>

// Combined with other variants
<StyledText 
  fontFamily="Poppins" 
  fontSize={16} 
  fontWeight="600"
  color={theme.colors.blue[500]}
>
  Custom styled text
</StyledText>

// Dynamic font family
const font = isSpecial ? 'Poppins' : undefined;
<StyledText fontFamily={font}>Dynamic font</StyledText>
```

**No validation** - ensure fonts are installed and named correctly.

---

## Boolean Variants

### `selected` - Selection State

**Type:** `boolean`

Toggles between selected (light gray) and unselected (dark gray) colors.

```tsx
// Selected state
<StyledText selected={true}>Selected text (light)</StyledText>

// Unselected state
<StyledText selected={false}>Unselected text (dark)</StyledText>

// Dynamic selection
const isSelected = currentItem.id === selectedId;
<StyledText selected={isSelected}>
  {isSelected ? 'Selected' : 'Not selected'}
</StyledText>

// Use in lists/selections
{items.map(item => (
  <StyledText 
    key={item.id}
    selected={item.id === activeId}
  >
    {item.name}
  </StyledText>
))}
```

**Color Mapping:**
- `true`: `theme.colors.gray[50]` (light gray)
- `false`: `theme.colors.gray[800]` (dark gray)

---

### `textDecorationLine` - Underline Decoration

**Type:** `boolean`

Toggles underline text decoration on/off.

```tsx
// With underline
<StyledText textDecorationLine={true}>Underlined text</StyledText>

// Without underline
<StyledText textDecorationLine={false}>Normal text</StyledText>

// Dynamic underline
const showUnderline = isLink || isActive;
<StyledText textDecorationLine={showUnderline}>
  Maybe underlined
</StyledText>

// Common patterns
<StyledText 
  textDecorationLine={true}
  fontWeight="700"
  color={theme.colors.blue[500]}
>
  Underlined link
</StyledText>

<StyledText 
  textDecorationLine={isError}
  color={isError ? theme.colors.red[500] : theme.colors.gray[800]}
>
  {errorMessage}
</StyledText>
```

**Decoration Mapping:**
- `true`: `'underline'`
- `false`: `'none'`

---

## Complete Examples

### Typography Hierarchy

```tsx
// Heading (using theme.fontSize and theme.fontWeight)
<StyledText 
  fontSize={theme.fontSize.xxlarge} 
  fontWeight={theme.fontWeight.bold} 
  color={theme.colors.gray[900]}
>
  Page Heading
</StyledText>

// Subheading
<StyledText 
  fontSize={theme.fontSize.large} 
  fontWeight={theme.fontWeight.semiBold} 
  color={theme.colors.gray[800]}
>
  Section Subheading
</StyledText>

// Body text
<StyledText 
  fontSize={theme.fontSize.medium} 
  fontWeight={theme.fontWeight.normal} 
  color={theme.colors.gray[800]}
>
  Main body content goes here. This is the default text style used for most content.
</StyledText>

// Secondary text
<StyledText 
  fontSize={theme.fontSize.small} 
  fontWeight={theme.fontWeight.medium} 
  color={theme.colors.gray[600]}
>
  Secondary information or description
</StyledText>

// Caption
<StyledText fontSize={12} fontWeight="300" color={theme.colors.gray[500]}>
  Small caption or helper text
</StyledText>
```

### Flexible Form Fields

```tsx
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

function FormField({ label, error, required, disabled }: FormFieldProps) {
  return (
    <>
      <StyledText 
        fontSize={14} 
        fontWeight={required ? "600" : "500"}
        color={disabled ? theme.colors.gray[400] : theme.colors.gray[800]}
      >
        {label}
        {required && <StyledText color={theme.colors.red[500]}> *</StyledText>}
      </StyledText>
      
      {error && (
        <StyledText 
          fontSize={12}
          fontWeight="400"
          color={theme.colors.red[500]}
          numberOfLines={1}
        >
          {error}
        </StyledText>
      )}
    </>
  );
}
```

### Dynamic Responsive Text

```tsx
function ResponsiveText({ 
  text, 
  isSmallScreen 
}: { 
  text: string; 
  isSmallScreen: boolean;
}) {
  const size = isSmallScreen ? 14 : 18;
  const weight = isSmallScreen ? "500" : "600";
  
  return (
    <StyledText fontSize={size} fontWeight={weight}>
      {text}
    </StyledText>
  );
}
```

### Conditional Styling

```tsx
function StatusText({ status }: { status: 'success' | 'error' | 'pending' }) {
  const colorMap = {
    success: theme.colors.green[500],
    error: theme.colors.red[500],
    pending: theme.colors.orange[400],
  };
  
  const weightMap = {
    success: "600",
    error: "700",
    pending: "500",
  };

  return (
    <StyledText 
      color={colorMap[status]}
      fontWeight={weightMap[status]}
      textDecorationLine={status === 'error'}
    >
      Status: {status.toUpperCase()}
    </StyledText>
  );
}
```

---

## Validation Behavior

The flexible variant system includes runtime validation:

```tsx
// Valid - no errors
<StyledText fontSize={14} fontWeight="500" color="#FF0000" />

// Invalid - will throw error
<StyledText fontSize={NaN} />                    // fontSize not a valid number
<StyledText fontWeight={{}} as any />            // fontWeight not a string
<StyledText color="invalid-color-name" />       // color not valid format
<StyledText numberOfLines={1.5} />              // numberOfLines must be whole number
<StyledText textAlign="invalid" />              // textAlign not valid option
```

---

## Migration from Preset System

If migrating from a preset-only system:

**Before (Presets Only):**
```tsx
<StyledText fontSize="large" fontWeight="bold">
  Text
</StyledText>
```

**After (Flexible):**
```tsx
<StyledText fontSize={20} fontWeight="700">
  Text
</StyledText>
```

Benefits of flexible system:
- ✅ Any size, not just presets
- ✅ Any weight, not just preset names
- ✅ Any color, not just theme colors
- ✅ Runtime validation for safety
- ✅ More intuitive prop names
- ✅ Better TypeScript support

---

## Performance Considerations

- ✅ Validation runs only when component renders
- ✅ No performance penalty vs preset system
- ✅ Use stable references for dynamic values to prevent re-renders
- ✅ Memoize computed values when used in lists

```tsx
// Good - stable reference
const textColor = useMemo(() => 
  isError ? theme.colors.red[500] : theme.colors.gray[800],
  [isError]
);
<StyledText color={textColor}>Text</StyledText>

// Avoid - new reference every render
<StyledText color={isError ? theme.colors.red[500] : theme.colors.gray[800]}>
  Text
</StyledText>
```

---

## Summary

The flexible variant system provides:

| Feature | Benefit |
|---------|---------|
| **Any Number** | No size limitations |
| **String Values** | Support any font weight |
| **Color Flexibility** | Hex + theme colors |
| **Dynamic Props** | Responsive styling |
| **Runtime Validation** | Catch errors early |
| **Boolean Toggles** | Simple state handling |
| **Zero Presets** | Maximum flexibility |

This approach mirrors the original JavaScript implementation, providing the same flexibility with better TypeScript support and runtime validation.

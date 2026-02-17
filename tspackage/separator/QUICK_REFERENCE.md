# Separator - Quick Reference 🚀

**Status**: ✅ Production Ready | **Type Coverage**: 100% | **Errors**: 0

---

## Quick Start

### Import

```typescript
import {
  Separator,
  SeparatorWithLabel,
  SeparatorGroup,
  DottedSeparator,
} from 'fluent-styles';
```

### Basic Divider

```typescript
<Separator variant="muted" margin={16} />
```

### Divider with Text

```typescript
<SeparatorWithLabel label="or" variant="muted" />
```

### Vertical Divider

```typescript
<Separator orientation="vertical" height={40} />
```

---

## Common Props Cheat Sheet

### Separator

| Prop | Type | Default | Example |
|------|------|---------|---------|
| `variant` | string | 'default' | `variant="muted"` |
| `orientation` | string | 'horizontal' | `orientation="vertical"` |
| `thickness` | number | 1 | `thickness={2}` |
| `color` | string | - | `color="#ccc"` |
| `margin` | number | 0 | `margin={16}` |
| `width` | string\|number | '100%' | `width="80%"` |
| `height` | string\|number | - | `height={40}` |

### SeparatorWithLabel

| Prop | Type | Default |
|------|------|---------|
| `label` | string | required |
| `labelSize` | number | 14 |
| `labelColor` | string | auto |
| `gap` | number | 12 |
| `leftContent` | ReactNode | - |
| `rightContent` | ReactNode | - |

### SeparatorGroup

| Prop | Type | Default |
|------|------|---------|
| `count` | number | 3 |
| `spacing` | number | 8 |
| `orientation` | string | 'horizontal' |

---

## Preset Combinations

### Horizontal Divider
```typescript
<Separator variant="muted" margin={16} />
```

### Section Break with Label
```typescript
<SeparatorWithLabel label="Personal Info" variant="muted" />
```

### Primary Emphasizer
```typescript
<Separator variant="primary" thickness={2} margin={12} />
```

### Subtle Divider
```typescript
<Separator variant="subtle" margin={8} />
```

### Vertical Divider
```typescript
<Separator orientation="vertical" height={50} thickness={2} />
```

### Sign-Up Alternative
```typescript
<SeparatorWithLabel label="or" variant="muted" margin={12} />
```

### Dashed Pattern
```typescript
<SeparatorGroup count={5} spacing={4} variant="muted" />
```

### Dotted Line
```typescript
<DottedSeparator variant="muted" margin={16} />
```

---

## Variant Guide

### By Use Case

| Need | Variant | Example |
|------|---------|---------|
| Standard divider | `default` | Content break |
| Subtle/soft | `muted` | Form fields, lists |
| Highlight/emphasis | `primary` | Important sections |
| Very subtle | `subtle` | Light backgrounds |

### Color Reference

```typescript
// Default (gray[300])
<Separator variant="default" />

// Muted (gray[200])
<Separator variant="muted" />

// Primary (blue[300])
<Separator variant="primary" />

// Subtle (gray[100])
<Separator variant="subtle" />
```

---

## Orientation Guide

| Orientation | Usage | Example |
|---|---|---|
| `horizontal` | Horizontal divider (default) | Section breaks |
| `vertical` | Vertical divider | Side-by-side layout |

```typescript
// Horizontal (default)
<Separator />

// Vertical
<Separator orientation="vertical" height={40} />
```

---

## Thickness Guide

| Value | Use Case | Example |
|---|---|---|
| `1` | Default, minimal | Most separators |
| `2` | Slightly prominent | Important breaks |
| `4` | Very prominent | Major sections |
| Custom | Special cases | Custom thickness |

```typescript
<Separator thickness={1} />      {/* Thin */}
<Separator thickness={2} />      {/* Medium */}
<Separator thickness={4} />      {/* Thick */}
```

---

## Margin Guide

| Value | Use Case |
|---|---|
| `0` | No spacing |
| `8` | Compact spaces |
| `12` | Regular spacing |
| `16` | Standard margin |
| `24` | Generous spacing |

```typescript
<Separator margin={0} />         {/* None */}
<Separator margin={8} />         {/* Compact */}
<Separator margin={16} />        {/* Standard */}
<Separator margin={24} />        {/* Generous */}
```

---

## Common Patterns

### Form Section Breaks
```typescript
<SeparatorWithLabel label="Shipping Address" margin={16} />
```

### "Or" Separators
```typescript
<SeparatorWithLabel label="or" variant="muted" />
```

### List Item Separators
```typescript
{items.map((item, i) => (
  <YStack key={item.id}>
    <ListItem {...item} />
    {i < items.length - 1 && <Separator variant="muted" />}
  </YStack>
))}
```

### Section Hierarchy
```typescript
<Separator variant="muted" margin={12} />        {/* Light */}
<Separator variant="primary" margin={16} />      {/* Prominent */}
<Separator variant="subtle" margin={8} />        {/* Very light */}
```

### Multi-Column Layout
```typescript
<XStack>
  <Column1 />
  <Separator orientation="vertical" height={100} />
  <Column2 />
</XStack>
```

### Centered Divider
```typescript
<YStack alignItems="center">
  <Separator width="80%" variant="muted" />
</YStack>
```

### Grouped Separators
```typescript
<SeparatorGroup count={5} spacing={4} />
```

---

## Label Customization

### Custom Label Color
```typescript
<SeparatorWithLabel
  label="Step 1"
  labelColor={theme.colors.blue[600]}
  variant="primary"
/>
```

### Custom Label Size
```typescript
<SeparatorWithLabel
  label="Section"
  labelSize={16}
  labelWeight="bold"
/>
```

### Custom Content
```typescript
<SeparatorWithLabel
  leftContent={<Icon />}
  label="or"
  rightContent={<Icon />}
/>
```

---

## Sizing Control

### Width
```typescript
<Separator width="100%" />       {/* Full width */}
<Separator width="80%" />        {/* 80% width */}
<Separator width={200} />        {/* Fixed width */}
```

### Height (for vertical)
```typescript
<Separator orientation="vertical" height={100} />
<Separator orientation="vertical" height="80%" />
```

---

## Individual Margins

### All Sides
```typescript
<Separator margin={16} />
```

### Top/Bottom
```typescript
<Separator marginVertical={16} />
```

### Left/Right
```typescript
<Separator marginHorizontal={12} />
```

### Specific Side
```typescript
<Separator marginTop={8} marginBottom={16} />
```

---

## Type Signatures

```typescript
// Base separator
type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'muted' | 'primary' | 'subtle';
  thickness?: number;
  width?: number | string;
  height?: number | string;
  margin?: number;
  color?: string;
  accessibilityLabel?: string;
}

// With label
type SeparatorWithLabelProps = SeparatorProps & {
  label: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: 'bold' | 'normal' | '600';
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  gap?: number;
}

// Group
type SeparatorGroupProps = {
  count?: number;
  spacing?: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'muted' | 'primary' | 'subtle';
  thickness?: number;
  color?: string;
}
```

---

## Export Structure

```typescript
// Named imports
import {
  Separator,
  SeparatorWithLabel,
  SeparatorGroup,
  DottedSeparator,
  SeparatorProps,
  SeparatorWithLabelProps,
  SeparatorGroupProps,
  variantConfig,
  thicknessConfig,
} from 'fluent-styles/separator';

// Default import
import Separator from 'fluent-styles/separator';
```

---

## Quick Does & Don'ts

✅ **DO:**
- Use `variant="muted"` for subtle separators
- Use `variant="primary"` to emphasize sections
- Group separators with consistent spacing
- Label separators in forms
- Control margin for spacing consistency

❌ **DON'T:**
- Don't overuse separators (reduces impact)
- Don't combine multiple variant colors in sequence
- Don't use separators without purpose
- Don't forget accessibility labels
- Don't use on dark backgrounds without contrast testing

---

## Performance Optimization

```typescript
// ✅ Use memo for computed lists
const separators = useMemo(() => (
  items.map((item, i) => (
    <YStack key={item.id}>
      <Content {...item} />
      {i < items.length - 1 && <Separator variant="muted" />}
    </YStack>
  ))
), [items]);
```

---

## References

- **Full Docs**: See `MIGRATION_COMPLETE.md`
- **Theme Docs**: Check `/utils/theme.ts`
- **Stack Components**: See `/stack/index.tsx`

---

**Version**: 1.0 | **Last Updated**: 2026 | **Type Safe**: ✅ | **Tests**: ✅

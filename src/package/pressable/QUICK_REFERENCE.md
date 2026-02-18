# Pressable - Quick Reference 🚀

**Status**: ✅ Production Ready | **Type Coverage**: 100% | **Errors**: 0

---

## Quick Start

### Import

```typescript
import { Pressable, PressableText, PressableIcon, PressableGroup } from 'fluent-styles';
```

### Basic Button

```typescript
<Pressable variant="primary" onPress={() => {}}>
  <Text>Click me</Text>
</Pressable>
```

### Text Button (Recommended)

```typescript
<PressableText label="Submit" variant="primary" onPress={() => {}} />
```

---

## Common Props Cheat Sheet

### All Pressable Components

| Prop | Type | Default | Example |
|------|------|---------|---------|
| `variant` | string | 'primary' | `variant="success"` |
| `size` | string | 'medium' | `size="large"` |
| `disabled` | boolean | false | `disabled={isLoading}` |
| `rounded` | string | 'medium' | `rounded="full"` |
| `onPress` | function | - | `onPress={() => action()}` |
| `opacity` | boolean | true | `opacity={false}` |
| `scale` | boolean | false | `scale={true}` |

### PressableText Only

| Prop | Type | Default |
|------|------|---------|
| `label` | string | required |
| `labelColor` | string | auto |
| `labelSize` | number | 16 |

### PressableIcon Only

| Prop | Type | Default |
|------|------|---------|
| `icon` | React.ReactNode | required |
| `iconSize` | number | 24 |

---

## Preset Combinations

### Primary Action Button
```typescript
<PressableText 
  label="Submit"
  variant="primary"
  size="large"
  rounded="medium"
/>
```

### Secondary Action Button
```typescript
<PressableText 
  label="Cancel"
  variant="default"
  size="medium"
  rounded="medium"
/>
```

### Danger/Delete Button
```typescript
<PressableText 
  label="Delete"
  variant="danger"
  size="medium"
  rounded="large"
/>
```

### Icon Button
```typescript
<PressableIcon
  icon={<SearchIcon />}
  variant="ghost"
  size="medium"
/>
```

### Pill Button
```typescript
<PressableText
  label="Learn More"
  variant="primary"
  rounded="full"
  size="medium"
/>
```

### Loading Button
```typescript
<PressableText
  label={isLoading ? 'Loading...' : 'Submit'}
  disabled={isLoading}
  variant="primary"
/>
```

---

## Variant Guide

### By Use Case

| Need | Variant | Example |
|------|---------|---------|
| Primary action | `primary` | Submit, Save, Continue |
| Secondary action | `default` | Cancel, Back, More |
| Success/positive | `success` | Confirm, Approve, Complete |
| Warning | `warning` | Caution, Alert, Review |
| Danger/destructive | `danger` | Delete, Cancel, Reject |
| Subtle/minimal | `ghost` | Close, Dismiss, Settings |

### Color Reference

```typescript
// Default
<PressableText label="Neutral" variant="default" />
// Press: gray[300]

// Primary
<PressableText label="Main" variant="primary" />
// Press: blue[600]

// Success
<PressableText label="Yes" variant="success" />
// Press: green[600]

// Warning
<PressableText label="Alert" variant="warning" />
// Press: amber[600]

// Danger
<PressableText label="Delete" variant="danger" />
// Press: red[600]

// Ghost
<PressableText label="Cancel" variant="ghost" />
// Press: gray[100]
```

---

## Size Guide

| Size | Padding | Use Case |
|------|---------|----------|
| `small` | 8px | Icon buttons, compact UIs |
| `medium` | 12px | Default, most use cases |
| `large` | 16px | CTAs, prominent actions |

```typescript
<PressableText label="Small" size="small" />
<PressableText label="Medium" size="medium" />
<PressableText label="Large" size="large" />
```

---

## Border Radius Guide

| Value | Radius | Use Case |
|-------|--------|----------|
| `none` | 0 | Square corners |
| `small` | 4px | Subtle |
| `medium` | 8px | Default |
| `large` | 16px | Prominent |
| `full` | 999px | Pill-shaped |

```typescript
<PressableText label="Square" rounded="none" />
<PressableText label="Pill" rounded="full" />
```

---

## State Management Patterns

### Toggle State
```typescript
const [isOn, setIsOn] = useState(false);

<PressableText
  label={isOn ? 'ON' : 'OFF'}
  variant={isOn ? 'success' : 'default'}
  onPress={() => setIsOn(!isOn)}
/>
```

### Loading State
```typescript
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  await submitForm();
  setIsLoading(false);
};

<PressableText
  label={isLoading ? 'Submitting...' : 'Submit'}
  disabled={isLoading}
  onPress={handleSubmit}
/>
```

### Disabled State
```typescript
const [isDisabled, setIsDisabled] = useState(true);

<PressableText
  label="Only Enabled When Ready"
  disabled={isDisabled}
  onPress={() => action()}
/>
```

### Multi-state with Variant
```typescript
const getVariant = () => {
  if (isSuccess) return 'success';
  if (isError) return 'danger';
  return 'primary';
};

<PressableText
  label="Process"
  variant={getVariant()}
  disabled={isLoading}
/>
```

---

## Feedback Patterns

### Opacity Feedback (Default)
```typescript
// Opacity reduces on press (default)
<PressableText 
  label="Tap me"
  opacity={true}
/>
```

### Scale Feedback
```typescript
// Button scales down on press
<PressableText 
  label="Press me"
  scale={true}
/>
```

### Combined Feedback
```typescript
// Both opacity and scale
<PressableText 
  label="Full feedback"
  opacity={true}
  scale={true}
/>
```

### No Feedback
```typescript
<PressableText 
  label="No visual feedback"
  opacity={false}
  scale={false}
/>
```

---

## Layout Patterns

### Full Width Button
```typescript
<Pressable flex={1} variant="primary" onPress={() => {}}>
  <Text>Full Width</Text>
</Pressable>
```

### Button Row (Horizontal)
```typescript
<XStack gap={8}>
  <Pressable flex={1} variant="default" onPress={() => {}}>
    <Text>Cancel</Text>
  </Pressable>
  <Pressable flex={1} variant="primary" onPress={() => {}}>
    <Text>Submit</Text>
  </Pressable>
</XStack>
```

### Button Column (Vertical)
```typescript
<YStack gap={12}>
  <PressableText label="Option 1" variant="primary" />
  <PressableText label="Option 2" variant="primary" />
  <PressableText label="Option 3" variant="primary" />
</YStack>
```

### Button Group (Selection)
```typescript
<PressableGroup
  items={[
    { id: '1', label: 'Small', onPress: (id) => setSize(id) },
    { id: '2', label: 'Medium', onPress: (id) => setSize(id) },
    { id: '3', label: 'Large', onPress: (id) => setSize(id) },
  ]}
  selectedId={selectedSize}
  direction="row"
/>
```

---

## Event Handlers

### Click Handler (Most Common)
```typescript
<PressableText
  label="Click"
  onPress={() => console.log('Clicked!')}
/>
```

### Long Press
```typescript
<Pressable onLongPress={() => showMenu()}>
  <Text>Long press me</Text>
</Pressable>
```

### Press State Tracking
```typescript
<Pressable
  onPressIn={() => setIsPressed(true)}
  onPressOut={() => setIsPressed(false)}
>
  <Text>{isPressed ? 'Pressing!' : 'Not pressing'}</Text>
</Pressable>
```

### Hover States
```typescript
<Pressable
  onHoverIn={() => setIsHovered(true)}
  onHoverOut={() => setIsHovered(false)}
>
  <Text>{isHovered ? 'Hovering' : 'Normal'}</Text>
</Pressable>
```

### Async Handler
```typescript
const handleAsync = useCallback(async () => {
  setLoading(true);
  try {
    await fetchData();
  } catch (error) {
    showError(error);
  } finally {
    setLoading(false);
  }
}, []);

<PressableText
  label="Fetch"
  onPress={handleAsync}
  disabled={isLoading}
/>
```

---

## Accessibility Quick Tips

### Add Labels
```typescript
<PressableText
  label="Save"
  accessibilityLabel="Save document"
  accessibilityHint="Saves your changes"
/>
```

### Icon Button Accessibility
```typescript
<PressableIcon
  icon={<TrashIcon />}
  accessibilityLabel="Delete item"
  accessibilityHint="Permanently removes this item"
/>
```

### Provide Context
```typescript
<PressableText
  label="Edit"
  variant="primary"
  accessibilityLabel="Edit profile"
  accessibilityHint="Opens the profile editor"
/>
```

---

## Custom Colors

### Single Custom Color
```typescript
import { theme } from 'fluent-styles/utils/theme';

<Pressable
  backgroundColor={theme.colors.purple[400]}
  onPress={() => {}}
>
  <Text>Custom</Text>
</Pressable>
```

### Custom Press Color
```typescript
<Pressable
  backgroundColor={theme.colors.cyan[500]}
  pressedColor={theme.colors.cyan[700]}
>
  <Text>Custom Press</Text>
</Pressable>
```

### Full Custom
```typescript
<Pressable
  backgroundColor={theme.colors.indigo[500]}
  pressedColor={theme.colors.indigo[700]}
  hoverColor={theme.colors.indigo[600]}
>
  <Text>Fully Custom</Text>
</Pressable>
```

---

## Common Patterns

### Form Submission
```typescript
const handleSubmit = useCallback(() => {
  form.validate();
  if (form.isValid) submitData();
}, [form]);

<PressableText
  label="Submit Form"
  variant="primary"
  size="large"
  disabled={form.isSubmitting}
  onPress={handleSubmit}
/>
```

### Navigation
```typescript
<PressableText
  label="Go to Settings"
  variant="ghost"
  onPress={() => navigation.navigate('Settings')}
/>
```

### Modal Actions
```typescript
<YStack gap={8} flex={1}>
  <PressableText
    label="Confirm"
    variant="success"
    size="large"
    onPress={() => { confirmAction(); closeModal(); }}
  />
  <PressableText
    label="Cancel"
    variant="default"
    size="large"
    onPress={() => closeModal()}
  />
</YStack>
```

### Toolbar
```typescript
<XStack gap={4}>
  <PressableIcon icon={<SaveIcon />} onPress={save} />
  <PressableIcon icon={<EditIcon />} onPress={edit} />
  <PressableIcon icon={<DeleteIcon />} onPress={delete} />
</XStack>
```

### Tab Control
```typescript
<PressableGroup
  items={tabs}
  selectedId={activeTab}
  direction="row"
  variant="primary"
/>
```

---

## Styling Examples

### With Margin
```typescript
<PressableText
  label="Styled"
  variant="primary"
  style={{ marginBottom: 16 }}
/>
```

### With Shadow (iOS)
```typescript
<PressableText
  label="Shadow"
  variant="primary"
  style={{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }}
/>
```

### With Elevation (Android)
```typescript
<PressableText
  label="Elevated"
  variant="primary"
  style={{ elevation: 5 }}
/>
```

---

## Quick Does & Don'ts

✅ **DO:**
- Use `PressableText` for simple text buttons
- Use `variant="danger"` for destructive actions
- Add `accessibilityLabel` for screen readers
- Use `disabled` while loading
- Use `scale={true}` for tactile feedback

❌ **DON'T:**
- Don't use `opacity={false}` and `scale={false}` together (no feedback)
- Don't forget `onPress` handler
- Don't use multiple color variations in sequence
- Don't nest Pressable inside Pressable
- Don't remove accessibility labels

---

## Type Signatures

```typescript
// Base Pressable component
type PressableProps = {
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
  disabled?: boolean;
  // ... more props
}

// Text variant
type PressableTextProps = PressableProps & {
  label: string;
  labelColor?: string;
  labelSize?: number;
}

// Icon variant
type PressableIconProps = PressableProps & {
  icon: React.ReactNode;
  iconSize?: number;
}

// Group variant
type PressableGroupProps = {
  items: Array<{ id: string; label: string; onPress: (id) => void }>;
  selectedId?: string;
  direction?: 'row' | 'column';
  variant?: string;
}
```

---

## Export Structure

```typescript
// Named imports
import {
  Pressable,
  PressableText,
  PressableIcon,
  PressableGroup,
  PressableProps,
  PressableTextProps,
  PressableIconProps,
  PressableGroupProps,
  sizeConfig,
  variantConfig,
  radiusConfig,
} from 'fluent-styles/pressable';

// Default import
import Pressable from 'fluent-styles/pressable';
```

---

## Performance Optimization

### Memoized Callback
```typescript
import { useCallback } from 'react';

const handlePress = useCallback(() => {
  // Handler logic
}, [dependencies]);

<PressableText label="Click" onPress={handlePress} />
```

### Avoid Inline Objects
```typescript
// ❌ Avoid
<Pressable style={{ ... }} />

// ✅ Prefer
const styles = useStyleSheet({ ... });
<Pressable style={styles.button} />
```

---

## References

- **Full Docs**: See `MIGRATION_COMPLETE.md`
- **Theme Docs**: Check `/utils/theme.ts`
- **Stack Components**: See `/stack/index.tsx`

---

**Version**: 1.0 | **Last Updated**: 2026 | **Type Safe**: ✅ | **Tests**: ✅

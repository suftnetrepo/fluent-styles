# Accordion - Quick Reference

## Basic Single Expand

```tsx
import { Accordion } from '../tspackage/accordion';

const items = [
  { id: '1', title: 'Section 1', content: 'Content 1' },
  { id: '2', title: 'Section 2', content: 'Content 2' },
  { id: '3', title: 'Section 3', content: 'Content 3' },
];

<Accordion
  items={items}
  onChange={(id) => console.log('Expanded:', id)}
/>
```

## Uncontrolled (Local State)

```tsx
<Accordion
  items={items}
  defaultValue="1"
  onChange={(id) => console.log(id)}
/>
```

## Controlled (Parent State)

```tsx
const [expanded, setExpanded] = useState('1');

<Accordion
  items={items}
  value={expanded}
  onChange={setExpanded}
/>
```

## Multiple Open Items

```tsx
const [expanded, setExpanded] = useState(['1', '2']);

<Accordion
  items={items}
  value={expanded}
  multiple={true}
  onChange={setExpanded}
/>
```

## Style Variants

### Default
```tsx
<Accordion items={items} variant="default" />
```

### Filled Background
```tsx
<Accordion items={items} variant="filled" />
```

### Outline
```tsx
<Accordion items={items} variant="outline" />
```

## Allow collapsing all

```tsx
<Accordion
  items={items}
  collapsible={true}  // Default: true
  onChange={(id) => console.log(id)}
/>
```

## With Custom Content

```tsx
const items = [
  {
    id: '1',
    title: 'Settings',
    content: (
      <YStack gap={10}>
        <StyledText>Custom React content</StyledText>
        <SwitchRow label="Enable notifications" />
      </YStack>
    ),
  },
];

<Accordion items={items} />
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemConfig[]` | - | Array of accordion items |
| `value` | `string \| string[]` | - | Controlled expanded item id(s) |
| `defaultValue` | `string \| string[]` | - | Default expanded item id(s) |
| `onChange` | `(value) => void` | - | Callback when item expanded/collapsed |
| `collapsible` | `boolean` | `true` | Allow all items to collapse |
| `multiple` | `boolean` | `false` | Allow multiple items open |
| `variant` | `'default' \| 'filled' \| 'outline'` | `'default'` | Style variant |

## Item Configuration

```typescript
interface AccordionItemConfig {
  id: string;          // Unique identifier
  title: string;       // Header text
  content: ReactNode | string;  // Body content
}
```

## Common Patterns

### FAQ Section
```tsx
const faqItems = [
  {
    id: 'q1',
    title: 'How do I get started?',
    content: 'Follow the installation steps in the docs...',
  },
  {
    id: 'q2',
    title: 'What is the pricing?',
    content: 'We offer flexible pricing plans...',
  },
];

<Accordion items={faqItems} />
```

### Settings Panel
```tsx
const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
});

<Accordion
  multiple={true}
  items={[
    {
      id: 'notifications',
      title: 'Notifications',
      content: (
        <SwitchRow
          label="Enable"
          value={settings.notifications}
          onValueChange={(val) =>
            setSettings({ ...settings, notifications: val })
          }
        />
      ),
    },
  ]}
/>
```

### Expandable Form Sections
```tsx
<Accordion
  items={[
    {
      id: 'personal',
      title: 'Personal Information',
      content: (
        <YStack gap={12}>
          <StyledInput placeholder="First name" />
          <StyledInput placeholder="Last name" />
        </YStack>
      ),
    },
    {
      id: 'address',
      title: 'Address',
      content: (
        <YStack gap={12}>
          <StyledInput placeholder="Street" />
          <StyledInput placeholder="City" />
        </YStack>
      ),
    },
  ]}
/>
```

## Features

✅ Single/multiple selection modes  
✅ Controlled and uncontrolled patterns  
✅ Smooth animations  
✅ 3 style variants  
✅ Collapsible items  
✅ Custom content support  
✅ Full accessibility  
✅ Theme integration  

## Note

- Content can be a string or React component
- Animations smooth over 300ms
- Icons rotate on expand/collapse
- Theme colors applied automatically

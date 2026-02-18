# Dropdown - Quick Reference

## Import

```tsx
import { Dropdown } from '../tspackage';
import type { DropdownProps, DropdownOptionItem } from '../tspackage';
```

## Basic Usage

```tsx
const options: DropdownOptionItem[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

<Dropdown
  data={options}
  placeholder="Select an option"
  onChange={(item) => console.log('Selected:', item.value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `DropdownOptionItem[]` | - | Array of options to display |
| `onChange` | `(item: DropdownOptionItem) => void` | - | Callback when option selected |
| `placeholder` | `string` | - | Placeholder text when empty |
| `iconName` | `string` | `'expand-more'` | MaterialIcons icon name |
| `disabled` | `boolean` | `false` | Disable the dropdown |

## Examples

### Simple Dropdown
```tsx
<Dropdown
  data={[
    { value: 'a', label: 'Apple' },
    { value: 'b', label: 'Banana' },
  ]}
  placeholder="Select fruit"
  onChange={(item) => setSelected(item)}
/>
```

### Custom Icon
```tsx
<Dropdown
  data={options}
  placeholder="Choose..."
  iconName="arrow-drop-down"
  onChange={handleChange}
/>
```

### Disabled State
```tsx
<Dropdown
  data={options}
  placeholder="Disabled dropdown"
  disabled={true}
  onChange={handleChange}
/>
```

### With State Management
```tsx
const [selected, setSelected] = useState<DropdownOptionItem | null>(null);

<Dropdown
  data={options}
  placeholder="Select country"
  onChange={(item) => {
    setSelected(item);
    // Do something with item.value
  }}
/>
```

## Type Definitions

### DropdownOptionItem
```tsx
type DropdownOptionItem = {
  value: string;  // Unique identifier
  label: string;  // Display text
};
```

### DropdownProps
```tsx
interface DropdownProps {
  data: DropdownOptionItem[];
  onChange: (item: DropdownOptionItem) => void;
  placeholder: string;
  iconName?: string;
  disabled?: boolean;
}
```

## Features

✅ Full TypeScript support  
✅ Theme-aware styling  
✅ Customizable icons  
✅ Disabled state support  
✅ Modal-based dropdown  
✅ Touch-friendly interface  
✅ React Native Vector Icons integration  
✅ Forward ref support  

## Common Patterns

### Controlled Dropdown
```tsx
const [value, setValue] = useState('');
const [selectedItem, setSelectedItem] = useState<DropdownOptionItem | null>(null);

<Dropdown
  data={options}
  placeholder="Select..."
  onChange={(item) => {
    setSelectedItem(item);
    setValue(item.label);
  }}
/>
```

### Dropdown with Form
```tsx
const [formData, setFormData] = useState({ category: '' });

<Dropdown
  data={categories}
  placeholder="Select category"
  onChange={(item) =>
    setFormData({ ...formData, category: item.value })
  }
/>
```

## Notes

- Uses MaterialIcons from `react-native-vector-icons`
- Theme colors automatically applied
- Works on iOS and Android
- Modal positions automatically based on button position
- Options list scrollable if > 6 items

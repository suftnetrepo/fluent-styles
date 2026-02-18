# Dialog Component - Quick Reference

## Import

```tsx
import { 
  StyledDialog, 
  StyledConfirmDialog, 
  StyledOkDialog 
} from '../dialog'

import type {
  StyledDialogProps,
  StyledConfirmDialogProps,
  StyledOkDialogProps,
  DialogAnimationType,
} from '../dialog'
```

## Quick Comparison

| Dialog Type | Buttons | Use Case |
|-------------|---------|----------|
| `StyledDialog` | Custom | Basic modal wrapper |
| `StyledConfirmDialog` | Cancel + Confirm (+ Neutral) | Delete, confirm, decisions |
| `StyledOkDialog` | Ok | Errors, success, alerts |

## Basic Usage

### StyledDialog - Basic Modal
```tsx
<StyledDialog 
  visible={isOpen} 
  animationType="fade"
>
  <YStack padding={20}>
    <Text>Custom Content</Text>
  </YStack>
</StyledDialog>
```

### StyledConfirmDialog - Decision Dialog
```tsx
<StyledConfirmDialog
  visible={showDialog}
  title="Delete Item?"
  description="This action cannot be undone."
  cancelLabel="Cancel"
  confirmLabel="Delete"
  onCancel={() => setShowDialog(false)}
  onConfirm={() => handleDelete()}
/>
```

### StyledOkDialog - Alert Dialog
```tsx
<StyledOkDialog
  visible={showError}
  title="Error"
  description="Something went wrong."
  okLabel="OK"
  onOk={() => setShowError(false)}
/>
```

## StyledDialog Props

```tsx
interface StyledDialogProps {
  // Modal Properties
  visible?: boolean;
  transparent?: boolean;
  hardwareAccelerated?: boolean;
  onDismiss?: () => void;
  onRequestClose?: () => void;
  
  // Animation
  animationType?: 'slide' | 'fade' | 'none';
  
  // Content
  children?: React.ReactNode;
  
  // Additional Modal Props
  statusBarTranslucent?: boolean;
  presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen';
}
```

## StyledConfirmDialog Props

```tsx
interface StyledConfirmDialogProps {
  // Dialog Control
  visible?: boolean;
  animationType?: 'slide' | 'fade' | 'none';
  
  // Content
  title: string;
  description: string;
  
  // Button Labels
  cancelLabel?: string;          // default: 'Cancel'
  confirmLabel?: string;         // default: 'Confirm'
  neutralLabel?: string;         // default: 'Neutral'
  
  // Neutral Button Control
  showNeutral?: boolean;         // default: false
  
  // Callbacks
  onCancel?: () => void;
  onConfirm?: (data?: any) => void;
  onNeutral?: () => void;
  
  // Data Passing
  row?: any;                     // Passed to onConfirm callback
  
  // Styling
  dialogProps?: ViewProps & ViewStyle;
  
  // Modal Props
  transparent?: boolean;
  hardwareAccelerated?: boolean;
}
```

## StyledOkDialog Props

```tsx
interface StyledOkDialogProps {
  // Dialog Control
  visible?: boolean;
  animationType?: 'slide' | 'fade' | 'none';
  
  // Content
  title?: string;                // default: "We're sorry, something went wrong."
  description?: string;          // default: 'Please try again later'
  okLabel?: string;              // default: 'Ok'
  
  // Callbacks
  onOk?: () => void;
  
  // Styling
  dialogProps?: ViewProps & ViewStyle;
  
  // Modal Props
  transparent?: boolean;
  hardwareAccelerated?: boolean;
}
```

## Common Patterns

### Pattern 1: Delete Confirmation
```tsx
const [showDelete, setShowDelete] = useState(false);

<StyledConfirmDialog
  visible={showDelete}
  title="Delete Item?"
  description="This action cannot be undone."
  cancelLabel="Keep"
  confirmLabel="Delete"
  onCancel={() => setShowDelete(false)}
  onConfirm={() => {
    handleDelete();
    setShowDelete(false);
  }}
/>
```

### Pattern 2: Save Dialog with Neutral
```tsx
const [showSave, setShowSave] = useState(false);

<StyledConfirmDialog
  visible={showSave}
  title="Save Changes?"
  description="You have unsaved changes."
  cancelLabel="Discard"
  neutralLabel="Save Later"
  confirmLabel="Save Now"
  showNeutral={true}
  onCancel={() => setShowSave(false)}
  onNeutral={() => {
    handleSaveLater();
    setShowSave(false);
  }}
  onConfirm={() => {
    handleSave();
    setShowSave(false);
  }}
/>
```

### Pattern 3: Error Alert
```tsx
const [error, setError] = useState<string | null>(null);

<StyledOkDialog
  visible={error !== null}
  title="Error"
  description={error || ''}
  okLabel="Dismiss"
  onOk={() => setError(null)}
/>
```

### Pattern 4: Success Acknowledgement
```tsx
const [success, setSuccess] = useState(false);

<StyledOkDialog
  visible={success}
  title="Success!"
  description="Your changes have been saved."
  okLabel="Great!"
  onOk={() => setSuccess(false)}
/>
```

### Pattern 5: Confirmation with Data
```tsx
const [itemToDelete, setItemToDelete] = useState<Item | null>(null);

<StyledConfirmDialog
  visible={itemToDelete !== null}
  title="Delete Item?"
  description={`Are you sure you want to delete "${itemToDelete?.name}"?`}
  cancelLabel="Cancel"
  confirmLabel="Delete"
  row={itemToDelete}
  onCancel={() => setItemToDelete(null)}
  onConfirm={(item) => {
    handleDelete(item);
    setItemToDelete(null);
  }}
/>
```

## Animation Types

```tsx
type DialogAnimationType = 'slide' | 'fade' | 'none';
```

- `'slide'` - Slide up from bottom (default mobile feel)
- `'fade'` - Fade in (smooth, subtle)
- `'none'` - No animation (instant)

## TypeScript Examples

### Type-Safe Dialog State
```tsx
type DialogState = {
  type: 'delete' | 'save' | 'error' | 'success';
  visible: boolean;
  data?: any;
};

const [dialog, setDialog] = useState<DialogState>({
  type: 'delete',
  visible: false,
});
```

### Type-Safe Props
```tsx
const confirmProps: StyledConfirmDialogProps = {
  visible: true,
  title: 'Confirm',
  description: 'Are you sure?',
  onConfirm: () => {},
};

<StyledConfirmDialog {...confirmProps} />
```

### Custom Hook for Dialog State
```tsx
function useDialog(type: 'delete' | 'save' | 'error' | 'success') {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<any>(null);

  return {
    visible,
    data,
    show: (data?: any) => {
      setData(data);
      setVisible(true);
    },
    hide: () => setVisible(false),
  };
}

// Usage
const deleteDialog = useDialog('delete');

<StyledConfirmDialog
  visible={deleteDialog.visible}
  title="Delete?"
  onConfirm={deleteDialog.hide}
  onCancel={deleteDialog.hide}
/>
```

## Styling

### Custom Dialog Container
```tsx
<StyledConfirmDialog
  visible={show}
  title="Confirm"
  description="Sure?"
  dialogProps={{
    backgroundColor: theme.colors.black,
    opacity: 0.7,
    padding: 20,
  }}
/>
```

### Custom Button Colors
Dialog button colors are controlled by the styled Button component. To customize:
1. Update theme colors (red[400], orange[400], green[500], cyan[500])
2. Or modify the Dialog component implementation

## Animation Examples

### Slide Animation
```tsx
<StyledConfirmDialog
  visible={show}
  animationType="slide"  // Bottom slide
  title="Delete?"
/>
```

### Fade Animation
```tsx
<StyledOkDialog
  visible={show}
  animationType="fade"   // Fade in
  title="Error"
/>
```

### No Animation
```tsx
<StyledDialog
  visible={show}
  animationType="none"   // Instant
>
  <Text>Content</Text>
</StyledDialog>
```

## Accessibility

### Provide Clear Titles and Descriptions
```tsx
// ✅ Good - Clear intent
<StyledConfirmDialog
  title="Delete Permanently?"
  description="This file will be permanently removed and cannot be recovered."
/>

// ❌ Avoid - Vague
<StyledConfirmDialog
  title="Confirm?"
  description="OK?"
/>
```

### Action-Oriented Button Labels
```tsx
// ✅ Good - Clear action
<StyledConfirmDialog
  cancelLabel="Keep It"
  confirmLabel="Delete Permanently"
/>

// ❌ Avoid - Generic
<StyledConfirmDialog
  cancelLabel="No"
  confirmLabel="Yes"
/>
```

## Troubleshooting

### Dialog Not Showing?
```tsx
// Make sure visible prop is true and state is set correctly
const [show, setShow] = useState(true);
<StyledDialog visible={show}>...</StyledDialog>
```

### Callback Not Firing?
```tsx
// Ensure callback is defined
<StyledConfirmDialog
  onConfirm={() => {
    console.log('Confirm clicked');
    // Handle action
  }}
/>
```

### Animation Not Working?
```tsx
// Check animation type is valid
<StyledDialog animationType="fade"> {/* Valid: 'slide', 'fade', 'none' */}
```

### Button Text Overflowing?
```tsx
// Use shorter labels
<StyledConfirmDialog
  cancelLabel="No"      // ✅ Good
  confirmLabel="Yes"    // ✅ Good
/>

// Avoid long labels
<StyledConfirmDialog
  cancelLabel="No, I want to keep this"  // ❌ Too long
/>
```

## Best Practices

- ✅ Use TypeScript to catch prop errors
- ✅ Provide clear, action-oriented button labels
- ✅ Show neutral button only when necessary
- ✅ Handle all callback cases (cancel, confirm, neutral)
- ✅ Use appropriate animation types
- ✅ Keep dialog content concise
- ✅ Test on different screen sizes
- ❌ Don't create custom dialogs when StyledDialog exists
- ❌ Don't use multiple simultaneous dialogs
- ❌ Don't pass untrusted content as title/description

---

**Quick Links:**
- [Full Migration Guide](./MIGRATION.md)
- [Component Summary](./SUMMARY.md)
- [Theme Colors](../theme.ts)

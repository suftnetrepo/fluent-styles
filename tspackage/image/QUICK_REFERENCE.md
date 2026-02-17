# Image Component - Quick Reference

## Import

```tsx
import { StyledImage, StyledImageBackground } from '../tspackage/image';
```

## Basic Usage

### Simple Image
```tsx
<StyledImage imageUrl="https://example.com/image.jpg" />
```

### Rounded Image
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg" 
  rounded={true}
/>
```

### Circular Image (Profile)
```tsx
<StyledImage 
  imageUrl="https://example.com/profile.jpg" 
  cycle={true}
  width={100}
  height={100}
/>
```

### Square Image
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg" 
  square={true}
/>
```

## Variants

| Variant | Default | Usage |
|---------|---------|-------|
| `rounded` | borderRadius: 8 | For slightly rounded corners |
| `square` | borderRadius: 0 | For sharp corners |
| `cycle` | borderRadius: 50% | For perfect circle |

## Customization Levels

### Level 1: Variant-Only (Boolean)
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg" 
  rounded={true}
/>
```

### Level 2: Variant with Overrides
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg" 
  rounded={[true, { borderRadius: 15 }]}
/>
```

### Level 3: Component Props Override
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg" 
  rounded={true}
  borderRadius={12}  // Overrides variant default (8)
/>
```

### Level 4: Combined (All Levels)
```tsx
<StyledImage 
  imageUrl="https://example.com/image.jpg"
  rounded={[true, { borderColor: '#ddd' }]}     // Variant level
  borderRadius={12}                              // Component level
  width={80}                                     // Component level
  margin={10}                                    // Component level
/>
```

## Image Source Handling

### Remote Images
```tsx
<StyledImage imageUrl="https://example.com/image.jpg" />
```

### Local Images
```tsx
<StyledImage 
  local={true}
  imageUrl={require('../assets/image.png')}
/>
```

### With Fallback
```tsx
<StyledImage 
  imageUrl={dynamicUrl}
  fallback={require('../assets/placeholder.png')}
  rounded={true}
/>
```

## ImageBackground (Content Overlay)

```tsx
<StyledImageBackground 
  imageUrl="https://example.com/bg.jpg"
  rounded={true}
>
  <Text style={{ color: 'white' }}>Content on Image</Text>
</StyledImageBackground>
```

## Common Patterns

### Profile Picture
```tsx
<StyledImage 
  imageUrl={user.avatar}
  cycle={true}
  width={64}
  height={64}
  fallback={require('../assets/avatar-default.png')}
/>
```

### Thumbnail
```tsx
<StyledImage 
  imageUrl={item.thumbnail}
  rounded={true}
  width={100}
  height={100}
/>
```

### Full-Width Image
```tsx
<StyledImage 
  imageUrl={article.coverImage}
  rounded={[true, { borderRadius: 12 }]}
  width="100%"
  height={300}
/>
```

### Card Image
```tsx
<StyledImage 
  imageUrl={product.image}
  square={true}
  width={200}
  height={200}
  marginBottom={10}
/>
```

## Style Properties (Component Level)

All React Native ViewStyle properties work at component level:

```tsx
<StyledImage 
  imageUrl="https://..."
  rounded={true}
  width={100}              // Standard props
  height={100}
  margin={10}
  marginBottom={20}
  borderWidth={1}
  borderColor="#ccc"
  opacity={0.9}
  shadowColor="#000"
  shadowOffset={{ width: 0, height: 2 }}
  shadowOpacity={0.25}
  shadowRadius={3.84}
  elevation={5}
/>
```

## Type Definitions

```tsx
// Variant types
type ImageVariants = {
  rounded?: boolean | [boolean, ImageStyle];
  square?: boolean | [boolean, ImageStyle];
  cycle?: boolean | [boolean, ImageStyle];
};

// Component props
interface StyledImageProps {
  imageUrl?: string;        // Image URL or require()
  local?: boolean;          // true for local assets
  fallback?: any;           // Fallback on error
  rounded?: boolean | [boolean, ImageStyle];
  square?: boolean | [boolean, ImageStyle];
  cycle?: boolean | [boolean, ImageStyle];
  width?: number | string;
  height?: number | string;
  // ... plus all ImageProps and ImageStyle props
}
```

## Styling Precedence

When multiple customization levels are used:

```
Component Props (highest priority)
  ↑
Variant Overrides [boolean, style]
  ↑
Variant Defaults (8px for rounded)
  ↑
Base Styles (resizeMode: 'cover')
  ↓
```

## Error Handling

Images automatically handle errors with fallback:

```tsx
<StyledImage 
  imageUrl={mayFailUrl}
  fallback={require('../assets/error.png')}  // Shown on error
  rounded={true}
/>
```

## Events

Standard React Native Image events work:

```tsx
<StyledImage 
  imageUrl="https://..."
  onLoad={() => console.log('Loaded')}
  onError={() => console.log('Failed')}
/>
```

## Best Practices

✅ **Do:**
- Provide fallback images for user-generated content
- Use specific dimensions (width/height)
- Combine variants with component props for flexibility
- Use `cycle` for profile pictures
- Use `rounded` for content images

❌ **Don't:**
- Forget to set width/height for remote images
- Skip fallback for dynamic URLs
- Override variant defaults unnecessarily
- Use square variant (just don't use any variant)

## TypeScript Support

Full type safety with IntelliSense:

```tsx
// ✅ Correct
<StyledImage rounded={true} width={100} />

// ❌ Error - unknown property
<StyledImage invalidProp="test" />

// ❌ Error - wrong type
<StyledImage rounded="yes" />

// ✅ Correct - array tuple
<StyledImage rounded={[true, { borderRadius: 12 }]} />
```

## Performance Tips

1. Use `resizeMode="contain"` for aspect ratio preservation (if needed via component prop)
2. Provide dimensions to avoid layout thrashing
3. Use fallback images to improve perceived performance
4. Consider lazy loading for lists of images

---

**File Location**: `/tspackage/image/index.tsx`
**Files**: StyledImage, StyledImageBackground, StyledImageBase, StyledImageBackgroundBase
**Types**: ImageVariants, ImageComponentProps, StyledImageProps

/**
 * MIGRATION TEMPLATE & PATTERN
 * 
 * This document shows the pattern used to migrate the Button component.
 * Follow this template for migrating other components.
 */

// ============================================================================
// STEP 1: Define Variant Types
// ============================================================================

/*
type ComponentNameVariants = {
  // Boolean variants
  variantName?: boolean;
  
  // Numeric/String variants that accept values
  sizeProp?: number | string;
  
  // etc.
};

type ComponentNameProps = ComponentNameVariants & NativeComponentProps;
*/

// ============================================================================
// STEP 2: Import Dependencies
// ============================================================================

/*
import React from 'react';
import { NativeComponent, NativeComponentProps, ViewStyle } from 'react-native';
import { styled } from '../utils/styled';
import { theme } from '../utils/theme';
import { isValidColor, isValidNumber } from '../utils/validators';
*/

// ============================================================================
// STEP 3: Create Styled Component
// ============================================================================

/*
const ComponentName = styled<ComponentNameProps>(NativeComponent, {
  // Base styles that apply to all instances
  base: {
    // default styles
  } as ViewStyle,
  
  // Variants that can be customized
  variants: {
    // Boolean variant (toggle between two styles)
    booleanVariant: {
      true: { /* styles */ } as ViewStyle,
      false: { /* styles */ } as ViewStyle,
    },
    
    // Function variant (takes a value and returns styles)
    functionVariant: (value: string | undefined): ViewStyle | undefined => {
      if (!value) return undefined;
      if (!isValidColor(value)) {
        throw new Error('Invalid value');
      }
      return { color: value } as ViewStyle;
    },
  } as any,
});
*/

// ============================================================================
// STEP 4: Create Wrapper Component (if needed)
// ============================================================================

/*
interface ComponentNameWrapperProps extends ComponentNameProps {
  children?: React.ReactNode;
}

const ComponentName = React.forwardRef<NativeComponent, ComponentNameWrapperProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ComponentName ref={ref} {...rest}>
        {children}
      </ComponentName>
    );
  }
);

ComponentName.displayName = 'ComponentName';
*/

// ============================================================================
// STEP 5: Export with Type Definitions
// ============================================================================

/*
export { ComponentName };
export type { ComponentNameProps, ComponentNameVariants };
*/

// ============================================================================
// KEY RULES FOR MIGRATION
// ============================================================================

/*
1. Always add explicit return type annotations to variant functions
   ❌ Wrong: (value) => { ... }
   ✅ Right: (value: string): ViewStyle | undefined => { ... }

2. Return undefined instead of undefined/falsy values
   ❌ Wrong: if (!value) return
   ✅ Right: if (!value) return undefined

3. Use 'as ViewStyle' for type assertions when needed
   ✅ return { color: value } as ViewStyle;

4. Always add JSDoc comments for public components
   ✅ Helps IDE autocomplete and developer experience

5. Keep variant logic identical to original JavaScript
   ✅ The TypeScript version should behave exactly like the original

6. Use type guards from validators module
   ✅ isValidColor(), isValidNumber(), isValidString()

7. Properly type children if component accepts them
   ✅ children?: React.ReactNode;

8. Use React.forwardRef for components that need refs
   ✅ Maintains ref forwarding compatibility
*/

// ============================================================================
// VALIDATION PATTERNS
// ============================================================================

/*
// For color validation
if (!isValidColor(value)) {
  throw new Error('Invalid color value');
}

// For number validation
if (!isValidNumber(value)) {
  throw new Error('Invalid number value');
}

// For string validation
if (!isValidString(value)) {
  throw new Error('Invalid string value');
}
*/

// ============================================================================
// TESTING CONSIDERATIONS
// ============================================================================

/*
After migration, ensure:
1. Component renders correctly with base styles
2. All variants work as expected
3. Validation errors are thrown correctly
4. Props are properly forwarded to native component
5. Refs work correctly when passed
6. TypeScript has no implicit any errors
*/

export {};

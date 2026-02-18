import React, {
  useCallback,
  useRef,
  useState,
  forwardRef,
  ReactNode,
  useEffect,
} from 'react';
import {
  View,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import { theme } from '../utils/theme';
import { XStack, YStack } from '../stack';
import { StyledText } from '../text';
import { Pressable } from '../pressable';
// @ts-ignore - react-native-vector-icons does not have type declarations
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/**
 * Accordion item configuration
 */
interface AccordionItemConfig {
  id: string;
  title: string;
  content: ReactNode | string;
}

/**
 * Accordion props interface
 *
 * @property {AccordionItemConfig[]} items - Array of accordion items
 * @property {string | string[]} [value] - Controlled expanded item id(s)
 * @property {string | string[]} [defaultValue] - Default expanded item id(s)
 * @property {(id: string | string[]) => void} [onChange] - Callback when item is expanded/collapsed
 * @property {boolean} [collapsible] - Allow all items to be collapsed (default: true)
 * @property {boolean} [multiple] - Allow multiple items to be open (default: false)
 * @property {string} [variant] - Style variant: 'default', 'filled', 'outline' (default: 'default')
 *
 * @example
 * ```tsx
 * const items = [
 *   { id: '1', title: 'Section 1', content: 'Content 1' },
 *   { id: '2', title: 'Section 2', content: 'Content 2' },
 * ];
 *
 * <Accordion
 *   items={items}
 *   onChange={(id) => console.log(id)}
 * />
 * ```
 */
interface AccordionProps {
  items: AccordionItemConfig[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  multiple?: boolean;
  variant?: 'default' | 'filled' | 'outline';
}

/**
 * Internal accordion item component props
 */
interface AccordionItemComponentProps {
  item: AccordionItemConfig;
  isExpanded: boolean;
  onPress: () => void;
  variant: 'default' | 'filled' | 'outline';
}

const ANIMATION_DURATION = 300;

/* ======================== ACCORDION ITEM COMPONENT ======================== */

/**
 * Single accordion item with header and collapsible content
 */
const AccordionItem = forwardRef<View, AccordionItemComponentProps>(
  ({ item, isExpanded, onPress, variant }, ref) => {
    const contentHeightAnimRef = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<View>(null);

    // Animate content height
    useEffect(() => {
      Animated.timing(contentHeightAnimRef, {
        toValue: isExpanded ? contentHeight : 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start();
    }, [isExpanded, contentHeight, contentHeightAnimRef]);

    const handleContentLayout = (event: LayoutChangeEvent) => {
      const height = event.nativeEvent.layout.height;
      if (height !== contentHeight) {
        setContentHeight(height);
      }
    };

    return (
      <YStack ref={ref} borderRadius={8} marginBottom={12} overflow="hidden">
        {/* Header */}
        <Pressable onPress={onPress}>
          <XStack
            backgroundColor={
              variant === 'filled'
                ? theme.colors.gray[50]
                : variant === 'outline'
                  ? theme.colors.white
                  : theme.colors.white
            }
            paddingHorizontal={16}
            paddingVertical={14}
            borderWidth={variant === 'outline' ? 1 : 0}
            borderColor={variant === 'outline' ? theme.colors.gray[200] : undefined}
            borderRadius={8}
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            flex={1}
          >
            <XStack flex={1}>
              <StyledText
                fontSize={16}
                fontWeight="600"
                color={theme.colors.gray[900]}
              >
                {item.title}
              </StyledText>
            </XStack>

            <Animated.View
              style={{
                transform: [
                  {
                    rotate: contentHeightAnimRef.interpolate({
                      inputRange: [0, contentHeight],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              }}
            >
              <MaterialIcons
                name="expand-more"
                size={24}
                color={theme.colors.gray[600]}
              />
            </Animated.View>
          </XStack>
        </Pressable>

        {/* Content */}
        {isExpanded && (
          <View
            ref={contentRef}
            onLayout={handleContentLayout}
            style={{
              backgroundColor:
                variant === 'filled'
                  ? theme.colors.gray[50]
                  : theme.colors.white,
              borderWidth: variant === 'outline' ? 1 : 0,
              borderColor:
                variant === 'outline' ? theme.colors.gray[200] : undefined,
              borderTopWidth: 0,
              paddingHorizontal: 16,
              paddingVertical: 14,
            }}
          >
            {typeof item.content === 'string' ? (
              <StyledText
                fontSize={14}
                color={theme.colors.gray[700]}
              >
                {item.content}
              </StyledText>
            ) : (
              item.content
            )}
          </View>
        )}
      </YStack>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

/* ======================== ACCORDION COMPONENT ======================== */

/**
 * Accordion component - Expandable content sections
 *
 * Features:
 * - Single/multiple selection modes
 * - Controlled and uncontrolled patterns
 * - Smooth animations
 * - Multiple style variants
 * - Collapsible items
 * - Full accessibility support
 * - Theme integration
 *
 * @example
 * ```tsx
 * const items = [
 *   { id: '1', title: 'What is React?', content: 'React is a JavaScript library...' },
 *   { id: '2', title: 'What is TypeScript?', content: 'TypeScript is a typed superset...' },
 * ];
 *
 * <Accordion
 *   items={items}
 *   defaultValue="1"
 *   onChange={(id) => console.log('Expanded:', id)}
 * />
 * ```
 */
const Accordion = forwardRef<View, AccordionProps>(
  (
    {
      items,
      value,
      defaultValue,
      onChange,
      collapsible = true,
      multiple = false,
      variant = 'default',
    },
    ref
  ) => {
    // Initialize state
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (multiple ? [] : '')
    );

    const selectedValue = value !== undefined ? value : internalValue;

    /**
     * Determine if an item is expanded
     */
    const isExpanded = useCallback(
      (id: string): boolean => {
        if (multiple) {
          return Array.isArray(selectedValue)
            ? selectedValue.includes(id)
            : false;
        }
        return selectedValue === id;
      },
      [selectedValue, multiple]
    );

    /**
     * Handle accordion item press
     */
    const handleItemPress = useCallback(
      (id: string) => {
        let newValue: string | string[];

        if (multiple) {
          // Multiple selection mode
          const current = Array.isArray(selectedValue) ? selectedValue : [];
          if (current.includes(id)) {
            newValue = current.filter((item) => item !== id);
          } else {
            newValue = [...current, id];
          }
        } else {
          // Single selection mode
          if (collapsible && selectedValue === id) {
            newValue = '';
          } else {
            newValue = id;
          }
        }

        // Update internal state if uncontrolled
        if (value === undefined) {
          setInternalValue(newValue);
        }

        // Call onChange callback
        onChange?.(newValue);
      },
      [selectedValue, multiple, collapsible, value, onChange]
    );

    /* ======================== JSX ======================== */

    return (
      <YStack ref={ref} width={'100%'}>
        <YStack gap={0}>
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isExpanded={isExpanded(item.id)}
              onPress={() => handleItemPress(item.id)}
              variant={variant}
            />
          ))}
        </YStack>
      </YStack>
    );
  }
);

Accordion.displayName = 'Accordion';

/* ======================== EXPORTS ======================== */

/**
 * Export accordion component and types
 */
export { Accordion, AccordionItem };
export type { AccordionProps, AccordionItemConfig };

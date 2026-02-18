import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ImageProps,
  ImageBackgroundProps,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import { styled } from '../utils/styled';

/**
 * Image-specific style properties for variants
 * Supports dual-level customization:
 * - Variant level: rounded={[true, { borderRadius: 15 }]}
 * - Component level: borderRadius={20}
 */
type ImageVariants = {
  rounded?: boolean | [boolean, ImageStyle];
  square?: boolean | [boolean, ImageStyle];
  cycle?: boolean | [boolean, ImageStyle];
};

type ImageComponentProps = ImageVariants & ImageProps & ImageStyle;

/**
 * Base Image component with styled HOC
 * Supports rounded, square, and cycle shape variants
 */
const StyledImageBase = styled<ImageComponentProps>(Image, {
  base: {
    resizeMode: 'cover',
  } as ImageStyle,
  variants: {
    rounded: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
      let isActive = false;
      let variantOverrides: ImageStyle = {};

      if (Array.isArray(value)) {
        [isActive, variantOverrides] = value;
      } else {
        isActive = value;
      }

      if (!isActive) return undefined;

      const defaultStyles: ImageStyle = {
        borderRadius: 8,
      };

      return { ...defaultStyles, ...variantOverrides };
    },
    square: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
      let isActive = false;
      let variantOverrides: ImageStyle = {};

      if (Array.isArray(value)) {
        [isActive, variantOverrides] = value;
      } else {
        isActive = value;
      }

      if (!isActive) return undefined;

      const defaultStyles: ImageStyle = {
        borderRadius: 0,
      };

      return { ...defaultStyles, ...variantOverrides };
    },
    cycle: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
      let isActive = false;
      let variantOverrides: ImageStyle = {};

      if (Array.isArray(value)) {
        [isActive, variantOverrides] = value;
      } else {
        isActive = value;
      }

      if (!isActive) return undefined;

      const defaultStyles: ImageStyle = {
        borderRadius: 50,
      };

      return { ...defaultStyles, ...variantOverrides };
    },
  } as any,
});

/**
 * Wrapper component for StyledImage with error handling and fallback support
 * Supports both local and remote image URIs
 */
interface StyledImageProps extends ImageComponentProps {
  imageUrl?: string;
  local?: boolean;
  fallback?: any;
  children?: React.ReactNode;
}

const StyledImage = React.forwardRef<Image, StyledImageProps>(
  (
    {
      imageUrl,
      local = false,
      fallback = require('../../assets/img/blank_1.png'),
      children,
      ...rest
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    const getImageSource = () => {
      if (local) {
        return imageUrl || fallback;
      }

      if (hasError || !imageUrl) {
        return fallback;
      }

      return { uri: imageUrl };
    };

    return (
      <StyledImageBase
        ref={ref}
        source={getImageSource()}
        onError={() => setHasError(true)}
        {...rest}
      />
    );
  }
);

StyledImage.displayName = 'StyledImage';

/**
 * ImageBackground variant - similar to StyledImage but uses ImageBackground component
 * Allows content to be rendered on top of the image
 */
type ImageBackgroundComponentProps = ImageVariants & ImageBackgroundProps & ImageStyle;

const StyledImageBackgroundBase = styled<ImageBackgroundComponentProps>(
  ImageBackground,
  {
    base: {
      resizeMode: 'cover',
    } as ImageStyle,
    variants: {
      rounded: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
        let isActive = false;
        let variantOverrides: ImageStyle = {};

        if (Array.isArray(value)) {
          [isActive, variantOverrides] = value;
        } else {
          isActive = value;
        }

        if (!isActive) return undefined;

        const defaultStyles: ImageStyle = {
          borderRadius: 8,
        };

        return { ...defaultStyles, ...variantOverrides };
      },
      square: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
        let isActive = false;
        let variantOverrides: ImageStyle = {};

        if (Array.isArray(value)) {
          [isActive, variantOverrides] = value;
        } else {
          isActive = value;
        }

        if (!isActive) return undefined;

        const defaultStyles: ImageStyle = {
          borderRadius: 0,
        };

        return { ...defaultStyles, ...variantOverrides };
      },
      cycle: (value: boolean | [boolean, ImageStyle]): ImageStyle | undefined => {
        let isActive = false;
        let variantOverrides: ImageStyle = {};

        if (Array.isArray(value)) {
          [isActive, variantOverrides] = value;
        } else {
          isActive = value;
        }

        if (!isActive) return undefined;

        const defaultStyles: ImageStyle = {
          borderRadius: 50,
        };

        return { ...defaultStyles, ...variantOverrides };
      },
    } as any,
  }
);

interface StyledImageBackgroundProps extends ImageBackgroundComponentProps {
  imageUrl?: string;
  local?: boolean;
  fallback?: any;
  children?: React.ReactNode;
}

const StyledImageBackground = React.forwardRef<
  ImageBackground,
  StyledImageBackgroundProps
>(
  (
    {
      imageUrl,
      local = false,
      fallback = require('../../assets/img/blank_1.png'),
      children,
      ...rest
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    const getImageSource = () => {
      if (local) {
        return imageUrl || fallback;
      }

      if (hasError || !imageUrl) {
        return fallback;
      }

      return { uri: imageUrl };
    };

    return (
      <StyledImageBackgroundBase
        ref={ref}
        source={getImageSource()}
        onError={() => setHasError(true)}
        {...rest}
      >
        {children}
      </StyledImageBackgroundBase>
    );
  }
);

StyledImageBackground.displayName = 'StyledImageBackground';

export { StyledImage, StyledImageBackground, StyledImageBase, StyledImageBackgroundBase };
export type { ImageComponentProps, ImageVariants, StyledImageProps, StyledImageBackgroundProps };

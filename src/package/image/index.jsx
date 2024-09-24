import React, { useState } from 'react'
import { Image as SourceImage, ImageBackground as ImageBg } from 'react-native'
import { styled } from '../styled'
import { isValidColor, isValidNumber } from '../utils'

const base = {
  borderRadius: 0,
  resizeMode: 'cover',
  position: 'relative'
}

const flexVariants = {
  borderRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderRadius value')
    }
    return { borderRadius: size }
  },
  flex: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid flex value')
    }
    return { flex: size }
  },
  width: size => {
    if (!size) return
    return { width: size }
  },
  height: size => {
    if (!size) return
    return { height: size }
  },
  borderWidth: (size = 1) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderWidth value')
    }
    return { borderWidth: size }
  },
  borderColor: color => {
    if (!color) return
    if (!isValidColor(color)) {
      throw new Error('Invalid backgroundColor value')
    }
    return { borderColor: color }
  },
  resizeMode: mode => {
    if (!mode) return

    const validModes = ['cover', 'contain', 'stretch', 'repeat', 'center']
    if (!validModes.includes(mode)) {
      throw new Error('Invalid mode value')
    }
    return { resizeMode: mode }
  },
  right: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid right value')
    }
    return { right: size }
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    true: {
      position: 'absolute'
    }
  }
}

const variants = {
  borderRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderRadius value')
    }
    return { borderRadius: size }
  },
  borderTopLeftRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderTopLeftRadius value')
    }
    return { borderTopLeftRadius: size }
  },
  borderTopRightRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderTopRightRadius value')
    }
    return { borderTopRightRadius: size }
  },
  borderBottomLeftRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderBottomLeftRadius value')
    }
    return { borderBottomLeftRadius: size }
  },
  borderBottomRightRadius: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderBottomRightRadius value')
    }
    return { borderBottomRightRadius: size }
  },
  flex: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid flex value')
    }
    return { flex: size }
  },
  width: size => {
    if (!size) return
    return { width: size }
  },
  height: size => {
    if (!size) return
    return { height: size }
  },
  borderWidth: (size = 1) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderWidth value')
    }
    return { borderWidth: size }
  },
  borderColor: color => {
    if (!color) return
    if (!isValidColor(color)) {
      throw new Error('Invalid backgroundColor value')
    }
    return { borderColor: color }
  },
  resizeMode: mode => {
    if (!mode) return

    const validModes = ['cover', 'contain', 'stretch', 'repeat', 'center']
    if (!validModes.includes(mode)) {
      throw new Error('Invalid mode value')
    }
    return { resizeMode: mode }
  },
  right: (size = 0) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid right value')
    }
    return { right: size }
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    true: {
      position: 'absolute'
    }
  }
}

const FlexImage = styled(SourceImage, {
  base: { ...base },
  variants: {
    ...flexVariants
  }
})

const FlexImageBackground = styled(ImageBg, {
  base: { ...base },
  variants: {
    ...flexVariants
  }
})

const Image = styled(SourceImage, {
  base: { ...base },
  variants: {
    ...variants
  }
})

const ImageBackground = styled(ImageBg, {
  base: { ...base },
  variants: {
    ...variants
  }
})

const FlexStyledImage = ({
	imageUrl,
	local = false,
	fallback = require('../../assets/img/blank_1.png'),
	...rest
}) => {
  const [hasError, setHasError] = useState(false)
  const getImageSource = () => {
    if (local) {
      return imageUrl || fallback
    }

    if (hasError || !imageUrl) {
      return fallback
    }

    return { uri: imageUrl }
  }

  return (
    <FlexImage
      source={getImageSource()}
      onError={() => setHasError(true)}
      {...rest}
		/>
  )
}

const FlexStyledBackgroundImage = ({
	imageUrl,
	local = false,
	fallback = require('../../assets/img/blank_1.png'),
	...rest
}) => {
  const [hasError, setHasError] = useState(false)
  const getImageSource = () => {
    if (local) {
      return imageUrl || fallback
    }

    if (hasError || !imageUrl) {
      return fallback
    }

    return { uri: imageUrl }
  }

  return (
    <FlexImageBackground
      source={getImageSource()}
      onError={() => setHasError(true)}
      {...rest}
		/>
  )
}

const StyledImage = ({
	imageUrl,
	local = false,
	fallback = require('../../assets/img/blank_1.png'),
	...rest
}) => {
  const [hasError, setHasError] = useState(false)
  const getImageSource = () => {
    if (local) {
      return imageUrl || fallback
    }

    if (hasError || !imageUrl) {
      return fallback
    }

    return { uri: hasError ? fallback: imageUrl }
  }

  return (
    <Image
      source={getImageSource()}
      onError={() => setHasError(true)}
      {...rest}
		/>
  )
}

const StyledBackgroundImage = ({
	imageUrl,
	local = false,
	fallback = require('../../assets/img/blank_1.png'),
	...rest
}) => {
  const [hasError, setHasError] = useState(false)
  const getImageSource = () => {
    if (local) {
      return imageUrl || fallback
    }

    if (hasError || !imageUrl) {
      return fallback
    }

    return { uri: imageUrl }
  }

  return (
    <ImageBackground
      source={getImageSource()}
      onError={() => setHasError(true)}
      {...rest}
		/>
  )
}

export {
	StyledImage,
	StyledBackgroundImage,
	FlexStyledBackgroundImage,
	FlexStyledImage
}

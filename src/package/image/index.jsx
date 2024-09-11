import React from 'react'
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

const FlexStyledImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/blank_1.png')
  return <FlexImage source={local ? imageUrl : url} {...rest} />
}

const StyledImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/blank_1.png')
  return <Image source={local ? imageUrl : url} {...rest} />
}

const FlexStyledBackgroundImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/blank_1.png')

  return <FlexImageBackground source={local ? imageUrl : url} {...rest} />
}

const StyledBackgroundImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/blank_1.png')

  return <ImageBackground source={local ? imageUrl : url} {...rest} />
}

export {
	StyledImage,
	StyledBackgroundImage,
	FlexStyledBackgroundImage,
	FlexStyledImage
}

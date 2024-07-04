import React from 'react'
import { Image as SourceImage, ImageBackground as ImageBg } from 'react-native'
import { styled } from '../styled'
import { isValidColor, isValidNumber } from '../utils'

const base = {
  borderRadius: 8,
  resizeMode: 'cover',
  position: 'relative'
}

const variants = {
  borderRadius: (size = 32) => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderRadius value')
    }
    return { borderRadius: size }
  },
  flex: size => {
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
  borderWidth: size => {
    if (!isValidNumber(size)) {
      throw new Error('Invalid borderWidth value')
    }
    return { borderWidth: size }
  },
  borderColor: color => {
    if (!isValidColor(color)) {
      throw new Error('Invalid color value')
    }
    return { borderColor: color }
  },
  resizeMode: mode => {
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
  }
}

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

const StyledImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/doctor.png')
  return <Image source={local ? imageUrl : url} {...rest} />
}

const StyledBackgroundImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/doctor.png')

  return <ImageBackground source={local ? imageUrl : url} {...rest} />
}

export { StyledImage, StyledBackgroundImage }

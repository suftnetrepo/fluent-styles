import React, { useState  } from 'react'
import { Image as SourceImage, ImageBackground as ImageBg } from 'react-native'
import { styled } from '../styled'

const base = {
  borderRadius: 8,
  resizeMode: 'cover',
  position: 'relative'
}

const variants = {
  borderRadius: size => ({
    borderRadius: size
  }),
  flex: size => ({
    flex: size
  }),
  width: size => ({
    width: size
  }),
  height: size => ({
    height: size
  }),
  borderWidth: size => ({
    borderWidth: size
  }),
  borderColor: color => ({
    borderColor: color
  }),
  resizeMode: mode => ({
    resizeMode: mode
  }),
  right: size => ({
    right: size
  })
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

const StyledImage = ({
	imageUrl,
	local = false,
	fallback = require('../../assets/img/doctor.png'),
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
	fallback = require('../../assets/img/doctor.png'),
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

export { StyledImage, StyledBackgroundImage }

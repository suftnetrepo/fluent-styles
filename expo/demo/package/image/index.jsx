import React from 'react'
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

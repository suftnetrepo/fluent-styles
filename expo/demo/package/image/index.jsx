import React from 'react'
import { Image as SourceImage } from 'react-native'
import { styled } from '../styled'

const Image = styled(SourceImage, {
  base: {
    borderRadius: 8,
    resizeMode: 'cover',
    position: 'relative'
  },
  variants: {
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
})

const StyledImage = ({ imageUrl, local = false, ...rest }) => {
  const url = imageUrl
		? {
  uri: imageUrl
}
		: require('../../assets/img/doctor.png')
  return <Image source={local ? imageUrl : url} {...rest} />
}

export { StyledImage }

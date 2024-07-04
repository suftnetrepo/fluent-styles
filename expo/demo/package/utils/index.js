import { Platform, Dimensions } from 'react-native'
import { theme } from '../theme'
import React from 'react'

export const isValidColor = value =>
	/^#[0-9A-F]{6}$/i.test(value) || typeof value === 'string' // Simple hex color validation, expand as needed
export const isValidNumber = value =>
	typeof value === 'number' && isFinite(value)
export const isValidString = value =>
	typeof value === 'string' && value.trim().length > 0

const shadow = {
  light: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22
    },
    android: {
      elevation: 1
    }
  }),
  lightMedium: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.24,
      shadowRadius: 2.84
    },
    android: {
      elevation: 3
    }
  }),
  medium: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65
    },
    android: {
      elevation: 7
    }
  }),
  mediumDark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.36,
      shadowRadius: 6.68
    },
    android: {
      elevation: 10
    }
  }),
  dark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.41,
      shadowRadius: 9.11
    },
    android: {
      elevation: 14
    }
  }),
  veryDark: Platform.select({
    ios: {
      shadowColor: theme.colors.gray[900],
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 13.34
    },
    android: {
      elevation: 20
    }
  })
}

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export const isIOS = Platform.OS === 'ios'
export const isAndroid = !isIOS
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export { shadow, ErrorBoundary }

# fluent-styles

Fluent-styles is a library designed to simplify the development of styled variants on UI components for both React and React Native projects. It enables developers to easily manage and apply base and variant styles to components dynamically based on props.

## Features

- **Dynamic Styling**: Easily apply and switch styles based on the props of the components.
- **Support for React and React Native**: Can be used seamlessly across web and mobile platforms.

## Installation

Install fluent-styles using npm:

```bash
npm install fluent-styles

Or using yarn:

yarn add fluent-styles

Usage
After installing the package, you can use it to wrap your components with styled functionality. Below is a basic example of how to use fluent-styles in a React application:

React Example

import React from 'react';
import styled from 'fluent-styles';

const baseStyles = {
  padding: '20px',
  color: 'white'
};

const variants = {
  mood: {
    happy: { backgroundColor: 'yellow' },
    sad: { backgroundColor: 'blue' }
  }
};

const MoodText = styled('div', { base: baseStyles, variants });

function App() {
  return (
    <MoodText mood="happy">I am happy!</MoodText>
  );
}

export default App;

React Native Example
import React from 'react';
import { Text } from 'react-native';
import styled from 'style-ease';

const baseStyles = {
  padding: 10,
  color: 'white'
};

const variants = {
  mood: {
    happy: { backgroundColor: 'yellow' },
    sad: { backgroundColor: 'blue' }
  }
};

const MoodText = styled(Text, { base: baseStyles, variants });

function App() {
  return (
    <MoodText mood="happy">I am happy!</MoodText>
  );
}

export default App;


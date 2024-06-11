import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import flow from 'vite-plugin-flow';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(react(), flow());

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native': 'react-native-web', // If you are using react-native-web for web compatibility
    };

    config.esbuild = {
      loader: 'jsx',
      include: [
        'src/**/*.jsx',
        'src/**/*.js',
      ],
      exclude: [],
    };

    return config;
  },
};
export default config;

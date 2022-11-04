import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'conquerpage',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#2f2f2f'
      }
    ],
  },
}
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    axe: {
      // { mode: 'warn' or 'off' } just doesn't work =\
      skip: true,
      disabledRules: ['color-contrast'],
    },
  },
};

export default preview;

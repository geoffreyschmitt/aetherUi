import type { Preview } from '@storybook/react';
import React from 'react';
import { GlobalStyles } from 'src/aether-ui-core/GlobalStyles';

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

  decorators: [
    Story => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;

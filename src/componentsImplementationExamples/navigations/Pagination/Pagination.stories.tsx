import type { Meta, StoryObj } from '@storybook/react';

import { Pagination as Component } from '.';
import CorePaginationMeta, {
  Pagination as CorePagination,
} from '@/components/navigations/Pagination/Pagination.stories';
import { useState } from 'react';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Navigations/Pagination',
  component: Component,
  argTypes: {
    ...CorePaginationMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Pagination: Story = {
  args: {
    ...CorePagination.args,
  },
  render: args => {
    const [currentPaginationPage, setCurrentPaginationPage] = useState(
      args.currentPageIndex,
    );

    return (
      <Component
        {...args}
        onPageChange={value => {
          args.onPageChange(value);
          setCurrentPaginationPage(value);
        }}
        currentPageIndex={currentPaginationPage}
      />
    );
  },
};

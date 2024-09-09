import { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/utils';
import { Dialog as Component } from '.';
import { dialogEventChannel } from '@/eventChannels';

const meta: Meta = {
  title: 'Components/Overlays/Dialog',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
    id: {
      table: {
        category: 'Data',
      },
    },
    closeButtonContentSlot: {
      table: {
        category: 'Slots',
      },
    },
    closeButtonAriaLabel: {
      table: {
        category: 'Accessibility',
      },
    },
    isModal: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const dialogId = 'dialogId';
const openDialog = () => {
  dialogEventChannel.emit('openDialog', { dialogId });
};

export const Dialog: Story = {
  args: {
    id: dialogId,
    children: 'dialogContent',
    closeButtonContentSlot: 'Close here',
  },
  render: args => {
    return (
      <>
        <button onClick={openDialog}>Open dialog</button>
        <Component {...args} />
      </>
    );
  },
};

export const DialogAsModal: Story = {
  args: {
    ...Dialog.args,
    isModal: true,
  },
  render: args => {
    const openModal = () => {};

    return (
      <>
        <button onClick={openDialog}>Open modal</button>
        <Component {...args} />
      </>
    );
  },
};

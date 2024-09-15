import { Meta, StoryObj } from '@storybook/react';

import { Dialog as CoreDialog } from '@/components/overlays/Dialog/Dialog.stories';
import { Dialog as Component } from '.';
import { dialogEventChannel } from '@/eventChannels';

const meta: Meta = {
  title: 'Implementation Example/Overlays/Dialog',
  component: Component,
  argTypes: {
    ...CoreDialog.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const dialogId = 'dialogId';
const openDialog = () => {
  dialogEventChannel.emit('openDialog', { id: dialogId });
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

import { Meta, StoryObj } from '@storybook/react';
import { Drawer as Component } from '.';
import { Drawer as CoreDrawer } from '@/components/overlays/Drawer/Drawer.stories';
import { dialogEventChannel } from '@/eventChannels';

const meta: Meta = {
  title: 'Implementation Example/Overlays/Drawer',
  component: Component,
  argTypes: {
    ...CoreDrawer.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const drawerId = 'drawerId';
const openDrawer = () => {
  dialogEventChannel.emit('openDialog', { id: drawerId });
};

export const Drawer: Story = {
  args: {
    id: drawerId,
    children: 'drawerContent',
    closeButtonContentSlot: 'Close here',
  },
  render: args => {
    return (
      <>
        <button onClick={openDrawer}>Open drawer</button>
        <Component {...args} />
      </>
    );
  },
};

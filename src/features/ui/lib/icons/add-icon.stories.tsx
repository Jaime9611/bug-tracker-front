import { Meta, StoryObj } from '@storybook/react';

import { ThemeConfig } from '@config/theme';

import { AddIcon } from '.';

const meta = {
  title: 'Example/Button',
  component: AddIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AddIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    handleClick: () => undefined,
  },
  render: (args) => (
    <ThemeConfig>
      <AddIcon handleClick={args.handleClick} />
    </ThemeConfig>
  ),
};

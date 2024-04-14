import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Carousel from './index';
import { PRIME_WINDOW_KEY } from '@/constants';

const items = [
  {
      "prime": 8819456789791,
      "key": PRIME_WINDOW_KEY[0]
  },
  {
      "prime": 8819456789863,
      "key": PRIME_WINDOW_KEY[1]
  },
  {
      "prime": 8819456789873,
      "key": PRIME_WINDOW_KEY[2]
  },
  {
      "prime": 8819456789887,
      "key": PRIME_WINDOW_KEY[3]
  },
  {
      "prime": 8819456789893,
      "key": PRIME_WINDOW_KEY[4]
  },
  {
      "prime": 8819456789933,
      "key": PRIME_WINDOW_KEY[5]
  },
  {
      "prime": 8819456789963,
      "key": PRIME_WINDOW_KEY[6]
  }
]


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    items,
    onInputChange: () => {}
  },
};

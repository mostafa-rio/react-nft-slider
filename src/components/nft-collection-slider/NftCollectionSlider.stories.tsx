import React from 'react';
import { ComponentStory, ComponentMeta, Meta, StoryObj } from '@storybook/react';

import NftCollectionSlider  from './NftCollectionSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NftCollectionSlider> = {
  title: 'NftCollectionSlider',
  component: NftCollectionSlider,
};
export default meta;

type Story = StoryObj<typeof NftCollectionSlider>;

export const DefaultUse: Story = {
  args: {}
}

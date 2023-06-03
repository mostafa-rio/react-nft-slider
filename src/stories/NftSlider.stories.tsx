import React from 'react';
import { ComponentStory, ComponentMeta, Meta, StoryObj } from '@storybook/react';

import NftSlider  from '../components/nft-slider/NftSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NftSlider> = {
  title: 'NftSlider',
  component: NftSlider,
};

export default meta;

type Story = StoryObj<typeof NftSlider>;

export const DefaultUse: Story = {
  args: {
    collection: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
  },
}

// export const WithRaribleSource: Story = {
//   render: () => <NftSlider dataSource={} />
// }

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NFTMedia  from './NFTMedia';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactNftNFTMedia/NFTMedia',
  component: NFTMedia,
} as ComponentMeta<typeof NFTMedia>;

const Template: ComponentStory<typeof NFTMedia> = (args) => <NFTMedia {...args} />;

export const NFTMediaWithLabel = Template.bind({});

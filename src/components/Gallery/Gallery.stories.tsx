import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Gallery  from './Gallery';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactNftGallery/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => <Gallery {...args} />;

export const GalleryWithLabel = Template.bind({});

GalleryWithLabel.args = {
  label: 'Gallery',
};

export const GalleryWithNftsLabel = Template.bind({});
GalleryWithNftsLabel.args = {
  label: 'Gallery with nfts',
};

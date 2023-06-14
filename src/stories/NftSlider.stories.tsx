import React from "react";
import {
  ComponentStory,
  ComponentMeta,
  Meta,
  StoryObj,
} from "@storybook/react";

import NftSlider from "../components/nft-slider/NftSlider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NftSlider> = {
  title: "NftSlider",
  component: NftSlider,
};

export default meta;

type Story = StoryObj<typeof NftSlider>;

export const DefaultUse: Story = {
  args: {
    collection: "0x670fd103b1a08628e9557cd66b87ded841115190",
    chain: "POLYGON",
    size: 20,
    loadingElement: <div>its loading</div>,
  },
};

export const ByOwner: Story = {
  args: {
    owner: "0xCc2edaEdebEA9c37d3aBc3912fF99b08904B1c99",
    chain: "ETHEREUM",
    size: 20,
    showNftsBy: "owner",
  },
};

// export const WithRaribleSource: Story = {
//   render: () => <NftSlider dataSource={} />
// }

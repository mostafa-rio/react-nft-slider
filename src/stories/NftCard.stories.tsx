import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NftCard, { NftCardProps } from "../components/nft-card/NftCard";

const meta: Meta<typeof NftCard> = {
  title: "NftCard",
  component: NftCard,
};
export default meta;

type Story = StoryObj<typeof NftCard>;

export const Primary: Story = {
  args: {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/t7Pp8nlGClRaqOMjhV99hJndVRe0X2euBzMM4R_TtZh3kHo4PySvZzdDu8pYlPESAsQ3onMGf8OBD1YlQDJw40ufUk4nkMsFflZu=s1000",
  },
};

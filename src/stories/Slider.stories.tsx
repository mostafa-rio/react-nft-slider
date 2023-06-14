import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Slider from "../components/slider/Slider";
const nfts: NftCardProps[] = [
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/dmEAwcJEiyhliQCaUSwW9fV0_DhTsn6maTRrDUj-YTU0ekSyJbOfUEFp91cyR3nAVAlIZirc7-d5U4AuxmGQKL9yZ22Hl8E4Bg=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/QOvp4TyxNIUYYGNzZ6UfKU_XkAsc8MoG-qQvIaKR-Z1byacK_1ZSimda1JuNxWAQY3RSTn0qojRklVYR09YU7l7DotRfaQHG8kk=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://assets.raribleuserdata.com/prod/v1/content/t_content_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZThISmdaRUo3amNkOXhxMnE4S2hVakFDUkFaRUVjUkJXNFNacXN3ZTJocg==",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
  {
    title: "nft title here",
    content: {
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
      "@type": "IMAGE",
    },
  },
];
import NftCard, { NftCardProps } from "../components/nft-card/NftCard";

const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const UsingNftCards: Story = {
  render: () => (
    <Slider
      loadingStatus="loaded"
      onScrollEnd={() => {
        console.log("on scroll end");
      }}
    >
      {nfts.map((item: NftCardProps, index) => (
        <NftCard key={index} {...item} />
      ))}
    </Slider>
  ),
};

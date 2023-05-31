import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Slider from './Slider';
const nfts: NftCardProps[] = [
  {
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/dmEAwcJEiyhliQCaUSwW9fV0_DhTsn6maTRrDUj-YTU0ekSyJbOfUEFp91cyR3nAVAlIZirc7-d5U4AuxmGQKL9yZ22Hl8E4Bg=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://lh3.googleusercontent.com/QOvp4TyxNIUYYGNzZ6UfKU_XkAsc8MoG-qQvIaKR-Z1byacK_1ZSimda1JuNxWAQY3RSTn0qojRklVYR09YU7l7DotRfaQHG8kk=s400',
    number: 321
  },{
    title:'nft title here', 
    bid: 30.3,
    variant: 'Yellow',
    creatorAddress:'321dsa...3123dsa',
    image:'https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZThISmdaRUo3amNkOXhxMnE4S2hVakFDUkFaRUVjUkJXNFNacXN3ZTJocg==',
    number: 321
  }
]
import NftCard, { NftCardProps } from '../nft-card/NftCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Slider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Slider',
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const UsingNftCards: Story = {
  render: () => (<Slider>
    {nfts.map((item: NftCardProps, index) => <NftCard key={index}  {...item} />)} 
  </Slider>)
};
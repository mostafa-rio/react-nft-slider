import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Slider from '../components/slider/Slider';
const nfts: NftCardProps[] = [
 
 {
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/dmEAwcJEiyhliQCaUSwW9fV0_DhTsn6maTRrDUj-YTU0ekSyJbOfUEFp91cyR3nAVAlIZirc7-d5U4AuxmGQKL9yZ22Hl8E4Bg=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/QOvp4TyxNIUYYGNzZ6UfKU_XkAsc8MoG-qQvIaKR-Z1byacK_1ZSimda1JuNxWAQY3RSTn0qojRklVYR09YU7l7DotRfaQHG8kk=s400'
  },{
    title:'nft title here', 
    image:'https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZThISmdaRUo3amNkOXhxMnE4S2hVakFDUkFaRUVjUkJXNFNacXN3ZTJocg==',
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  },{
    title:'nft title here', 
    image:'https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400'
  }
]
import NftCard, { NftCardProps } from '../components/nft-card/NftCard';

const meta: Meta<typeof Slider> = {
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
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'; 
import NftCard, {NftCardProps} from '../components/nft-card/NftCard';

 const meta: Meta<typeof NftCard> = {
  title: 'NftCard',
  component: NftCard,
}; 
export default meta;

type Story = StoryObj<typeof NftCard>;

export const Primary: Story = {
  args: {
    title:'nft title here', 
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE'
  },
//   render: () => <NftCard
//   title='nft title here' bid={30.3}  
//   creator='ali hassan' 
//   image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE'
//     number={321}
//     key={12}
// />
};
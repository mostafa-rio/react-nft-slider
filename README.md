## ![](https://github-production-user-asset-6210df.s3.amazonaws.com/32630862/243078466-00fbf8f5-b7f0-46eb-b127-57c363ff28f0.png)

## **React NFT Slider**

A React component that creates a carousel slider showcasing NFTs from a specific collection or wallet without the need for connecting a wallet or using Web3.js or Ether.js.

## **Features**

- Shows NFTs from a collection using the collection address or wallet address
- Displays NFTs in a responsive and interactive slider
- Supports touch and mouse drag gestures for easy navigation
- Customizable styling and appearance
- Lightweight and easy to integrate into your React projects
- Better annotation in typescript projects

## **Installation**

npm

```plaintext
npm install react-nft-slider
```

yarn

```plaintext
yarn add react-nft-slider
```

## **Usage**

```javascript
import React from "react";
import NFTSlider from "react-nft-slider";

const MyNftSlider = () => {
  const collectionAddress = "0x..."; // Replace with your desired collection address

  return (
    <div>
      <h1>My NFT Collection</h1>
      <NFTSlider collection={collectionAddress} />
    </div>
  );
};

export default MyNftSlider;
```

## **Props**

<table><tbody><tr><td>name</td><td>value</td><td>description &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr><td>showNftsBy</td><td><code>‘owner’</code>, <code>‘collection’</code></td><td>by default, it's set to <code>‘collection’</code> and it will be loading the NFTs of the collection. If set to, <code>‘owner’</code> it loads the NFTs of the owner address (wallet address) passed to the component.</td></tr><tr><td>collection &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td><td><code>string</code></td><td>(required) The address of the NFT collection to fetch NFTs &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td></tr><tr><td>owner</td><td><code>string</code></td><td>the wallet address of the NFT owner to fetch NFTs. ( set the showNftsBy prop to <code>‘owner’</code> to use this)</td></tr><tr><td>chain</td><td><code>‘ETHEREUM’</code>, <code>‘POLYGON’</code></td><td>Define the chain your collection address is from. The default is set to <code>‘ETHEREUM’</code> ( more chains will be supported )&nbsp;</td></tr><tr><td>dataSource</td><td><code>‘RARIBLE’</code></td><td>Define the Source you want to get the data from</td></tr><tr><td>size</td><td><code>number</code></td><td>Set the number of nft items fetched in each request</td></tr><tr><td>loadingElement</td><td><code>JSX.Element</code></td><td>Define an JSX Element as loading indicator&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table>

## **License**

This project is licensed under the [MIT License](https://chat.openai.com/link-to-license).

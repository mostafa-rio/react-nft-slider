import React from "react";
// import { NftSlider } from "react-nft-slider";
import { NftSlider } from "../../dist/esm/index";

function App() {
  return (
    <>
      <h1>Nfts by collection</h1>
      <NftSlider
        chain="POLYGON"
        collection="0x670fd103b1a08628e9557cd66b87ded841115190"
        loadingElement={<div>My loading element</div>}
      />
      <h1>Nfts by owner</h1>
      <NftSlider
        chain="ETHEREUM"
        showNftsBy="owner"
        owner="0xCc2edaEdebEA9c37d3aBc3912fF99b08904B1c99"
        loadingElement={<div>My loading element</div>}
      />
    </>
  );
}
export default App;

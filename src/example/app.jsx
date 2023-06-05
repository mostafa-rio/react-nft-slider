import React from "react";
// import { NftSlider } from "react-nft-slider";
import { NftSlider } from "../../dist/esm/index";

function App() {
  return (
    <NftSlider
      chain="POLYGON"
      collection="0x670fd103b1a08628e9557cd66b87ded841115190"
      loadingElement={<div>My loading element</div>}
    />
  );
}
export default App;
